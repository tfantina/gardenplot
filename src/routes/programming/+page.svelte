<script>
    import { base } from '$app/paths';
    import Card from '$lib/components/display/Card.svelte';
    export let data;
</script>
<p>
A collection of projects I've built for fun and profit.
</p>
<p>
Most of my programming time is spent working as a 
contractor for <a href="https://objective.dev">Objective Inc</a> in Salt Lake City, UT (I work remotely).
Unless otherwise noted all of these projects were done for them!
Objective is a small agency that works on big projects. We've been voted Best in State some half a dozen 
times; clients really like us! I'm happy to be part of a team that solves problems with a variety of 
languages and stacks.  For the most part I work in the Elixir, Ruby and Javascript worlds.
</p>
<div class="d-flex flex-column">
{#each data.projects as project}
    <Card path={`${base}${project.path}`} meta={project.meta} />
{/each}
</div>
   
