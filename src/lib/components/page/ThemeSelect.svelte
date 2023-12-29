<script>
    export let setTheme, currentTheme;
</script>

<div class="theme-box">
    <div class="theme-box--all">
        <button class="themable forest" on:click={() => {setTheme("forest")}}></button>
        <button class="themable creamsicle" on:click={() => {setTheme("creamsicle")}}></button>
        <button class="themable nightly" on:click={() => {setTheme("nightly")}}></button>
    </div>
    <div class="theme-box--current">
        <button class="themable {$currentTheme}"></button>
    </div>
</div>

