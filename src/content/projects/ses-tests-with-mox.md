---
title: SES Tests with Mox
hero: ''
alt: 'Elixir Mox Library'
daterange: 'Jul 2022'
date: '2022-07-30'
tags: ['Elixir', 'Phoenix', 'Mox', 'Bamboo']
---

AWS SES is a dirt cheap email service but you get what you pay for. Most of my projects have slowly migrated to greener pastures; however when occasion necessitated using SES I had to get creative. One of the biggest problems with SES is that it offers little to no visibility into what emails are sending, how, when or to whom. I was working on a large enterprise project that used SES for transactional emails. The volume was sizeable but not massive for a large organization, between somewhere between 2-5 thousand emails a day. For the most part these emails worked like a charm. However; one in every hundred emails or so would simply fail to send sometimes this would halt an order in the state machine causing a bit of a headache to debug. Other times we (CC’d parties) would get confirmation emails but the intended customer would not. I spent several hours trolling through dodgy looking “email verification” services trying to validate these addresses, I even sent a few test emails from my work email to ensure that the addresses in question were both existing and configured correctly, they were. 
Moving to a service like Mandrill was not an option at this point in time (about eighteen months later we did make the jump much to everybody's relief) so I had to figure out a way to debug these errors. The problem occurred somewhere between `ex_aws`, `bamboo` and SES itself, not exactly testable, however by mocking the `deliver_now` function of Bamboo I thought I'd be able to TDD my way into catching some errors.
Mox requires a `behaviour` for your expectations, so I had to recreate `Bamboo.Mailer.deliver_now/1` which is simple enough:
```elixir 
defmodule ClientApp.MailerBehaviour do
  @moduledoc false
  @callback deliver_now(state :: term) :: {:ok, new_state :: term} | {:error, new_state :: term}
end
```
Then inside the `Mailer` module, which was already using `Bamboo.Mailer` I just added said behaviour:
```elixir 
  use Bamboo.Mailer, otp_app: :client_app
  @behaviour ClientApp.MailerBehaviour
```
This needs to be configured in both `config.exs` as well as `test_helpers.exs` respectively: 
`config :client_app, :mailer, ClientApp.Mailer`
```elixir 
Mox.defmock(ClientApp.MailerMock, for: ClientApp.MailerBehaviour)
Application.put_env(:client_app, :mailer, ClientApp.MailerMock)
```

With that configured any time I called `Application.get_env(:client_app, :mailer)` I had access to either the Bamboo mailer or the mock. This allowed me to write expectations in tests that would cover the edge cases we were seeing with SES:
```elixir
expect(ClientApp.MailerMock, :deliver_now, fn _ ->
  raise %Bamboo.SMTPAdapter.SMTPError{
    message: "problem",
    raw: {:no_more_hosts, {:permanent_failure, 'Farewell, Felicia', :auth_failed}}
  }
end)
```

Any errors raised by Bamboo could be handled:
```elixir 
 defp apply_email_action(function, ctxt, updated_opts) do
    Email
    |> apply(function, [ctxt, updated_opts])
    |> mailer().deliver_now()

    put_step(ctxt, :send)

  rescue
    error in Bamboo.SMTPAdapter.SMTPError ->
      handle_bamboo_failures(error, ctxt)
    error ->
      reraise error, __STACKTRACE__
  end

  defp handle_bamboo_failures(error, ctxt) do
    case error.raw do
      {:no_more_hosts, _err} ->
        # some error handler 
      {_, {err, _, _}} ->   
        # another error handler
      _ -> 
        # etc
    end
  end
```

This drastically reduced the number of issues we saw, I was able to get the processing errors down to nearly nothing. Of course there were still a few addresses SES just would *not* deliver too which is the main reason we eventually jumped to Mandrill but this was a very handy workaround for a year and a half.