<script> 
    // import Header from '$lib/components/page/Header.svelte';
    // import Nav from '$lib/components/page/Nav.svelte';
    // import Bio from '$lib/components/page/Bio.svelte';
    // import Featured from '$lib/components/page/Featured.svelte';
    export let data;
</script>

<div class="content rounded-3 p-4">
    <svelte:component this={data.content}  />
</div>