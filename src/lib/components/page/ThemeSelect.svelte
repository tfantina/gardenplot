<script>
    export let setTheme, currentTheme;
</script>

<div class="theme-box">
    <button class="themable forest" on:click={() => {setTheme("forest")}}></button>
    <button class="themable creamsicle" on:click={() => {setTheme("creamsicle")}}></button>
    <button class="themable nightly" on:click={() => {setTheme("nightly")}}></button>
    <span class="divider"></span>
    <button class="themable {$currentTheme}"></button>
</div>

