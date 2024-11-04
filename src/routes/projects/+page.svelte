<script>
    import { base } from '$app/paths';
    import ContentRow from '$lib/components/display/ContentRow.svelte';
    export let data;
</script>
<div class="content rounded-3 p-4">
<p>
These are the projects I've worked on where I've either been the sole contributor or lead developer, while not a comprehensive list of the dozens of projects I've 
helped out with these are the most significant (fixing Wordpress CSS dosen't count). Some of these projects are personal, some are professional. 
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
   
