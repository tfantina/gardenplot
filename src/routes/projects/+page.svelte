<script>
    import { base } from '$app/paths';
    import ContentRow from '$lib/components/display/ContentRow.svelte';
    export let data;
</script>
<div class="content rounded-3 p-4">
<p>
I learned enough HTML, ActionScript and PHP to cobble together a few little websites for myself in middle school and highschool but it wasn't until I was in university that I began learning Ruby and Rails in earnest. For the past five years I've been a full time contractor 
at an agency called <a href="https://www.objective.dev/">Objective</a> in Salt Lake City. I've been lucky enough to work on projects for 
companies such as Packsize, Franklin Covey, The Utah Department of Higher Education, and The Utah Avalanche Centre. Sometimes these projects 
last only a few months, a dedicated sprint to create a brochure site, but I've also worked for years building relationships with clients 
developing, maintaing, and upgrading legacy codebases primairly in Elixir.
</p>
<p>
For most projects, my contribution has been in the capacity of single/senior developer, working closely with a client and project manager. 
Depending on the scope of the project and to prevent knowledge silos I will often onboard a second or third developer as needed for a period 
of weeks or months, orienting them and reviewing their PRs.
</p>
<p>
Working for an agency there are some projects I can't go into details on. In some cases below I discuss some of the thorny technical 
issues I've been able to tackle without naming specific projects or clients.
</p>

<div class="d-flex flex-column">
{#each data.projects as project}
    <div class="row pb-4">
        <ContentRow path={`${base}${project.path}`} meta={project.meta} />
    </div>
{/each}
</div>
</div>
   
