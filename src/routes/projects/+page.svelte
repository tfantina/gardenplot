<script>
    import { base } from '$app/paths';
    import Card from '$lib/components/display/Card.svelte';
    export let data;
</script>
<p>
I do a lot of random things a lot of them don't fall under the "programming" umbrella.  I'm proud of/interested in these projects, sometimes moreso than my programming projects.
These projects will collect here as time goes on, some of them are programming based but more like exprements or little websites that I tried and failed to launch. Others 
may be design or art projects or other random things.  Cheers.
</p>

<div class="d-flex flex-column">
{#each data.projects as project}
    <Card path={`${base}${project.path}`} meta={project.meta} />
{/each}
</div>
   
