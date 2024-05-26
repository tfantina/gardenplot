import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Eon: Ruby Gem",
  "hero": "src/images/programming/kbyg/hero.png",
  "alt": "Eon Gem",
  "daterange": "May 2023",
  "date": "2023-05-16",
  "tags": ["Ruby"]
};
const Eon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-bdgd0k">Secure encrypting/decrypting of <code>.env</code> files.</p> <p data-svelte-h="svelte-14k98cw">For many years the team I’m on used the CodeShip Jet CLI tool which generates a secure key, and encrypts files with it. The general idea was that you could
encrypt your <code>.env</code> file or other configurations and check them into version controll. Storing the secure key in a company folder or using a secure server
to send it to other employees they could then have all the secure <code>.env</code> credentials.</p> <p data-svelte-h="svelte-69eum8">As we moved away from CodeShip I missed the Jet CLI and couldn’t find a similar tool anywhere so I spent a few afternoons putting together something that
would satisfy my own needs. It’s been used on a few projects internally where I work.  I’ve never publcized it or anything but I’d love to hear your
thoughts if you are looking for a tool like this.</p> <p data-svelte-h="svelte-texmed">Get it from <a href="https://rubygems.org/gems/eon_crypt" rel="nofollow">RubyGems</a> or fork it on <a href="https://github.com/tfantina/eon" rel="nofollow">GitHub</a></p>`;
});
export {
  Eon as default,
  metadata
};
