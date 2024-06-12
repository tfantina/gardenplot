<script>
    export let setTheme, currentTheme;
</script>

<div class="theme-box">
    <div class="theme-box--all">
        <button class="themable forest" on:click={() => {setTheme("forest")}} aria-label="Change theme to Forest"></button>
        <button class="themable creamsicle" on:click={() => {setTheme("creamsicle")}} aria-label="Change theme to Creasicle"></button>
        <button class="themable nightly" on:click={() => {setTheme("nightly")}} aria-label="Change theme to Nightly"></button>
    </div>
    <div class="theme-box--current">
        <button class="themable {$currentTheme}" aria-label="Current theme: {$currentTheme}"></button>
    </div>
</div>

