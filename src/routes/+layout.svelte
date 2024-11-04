<script>
    import { onMount } from 'svelte'
    import { writable } from 'svelte/store';
    import Header from '$lib/components/page/Header.svelte';
    import Nav from '$lib/components/page/Nav.svelte';
    import MobileFooter from '$lib/components/page/MobileFooter.svelte'
    import ThemeSelect from '$lib/components/page/ThemeSelect.svelte'
    import '$lib/scss/global.scss'
    import { page } from '$app/stores';

    let theme;
    let currentTheme = writable(theme);
    const siteName = "Travis Fantina"
    const pageTitle = $page.data?.title ? ` | ${$page.data.title}` : ""

    $: title = `${siteName} ${pageTitle}`

    const setTheme = (theme) => {
        window.localStorage.setItem('theme', theme);
        currentTheme.set(theme) 
        document.querySelector('html').dataset.theme = theme;
    }

    onMount(() => {
        theme = window.localStorage.getItem('theme');
        theme ? setTheme(theme) : setTheme('forest')
    })

    let img = $page.data.image
    let imgname
    if ($page.data.image) {
        imgname = $page.data.image.split(".")[0]
    }
    
</script>
<svelte:head>
    <title>{title}</title>
</svelte:head>
<ThemeSelect {setTheme} {currentTheme} />
<div class="content-container">
    <Header>
        <span slot="title">{$page.data.title}</span>
        <svelte:fragment slot="headerimg">
            <div class="header-image">
                {#if $page.data.image}
                  <picture>
                        <source srcset="{imgname}.webp" type="image/webp">
                        <source srcset="{img}" type="image/jpeg">
                        <img src="{img}" alt="{$page.data.title}" />
                    </picture>
                {/if}
            </div>
        </svelte:fragment>
    </Header>
    <Nav />
    <main>
        <slot /> 
    </main>
</div>
<MobileFooter />