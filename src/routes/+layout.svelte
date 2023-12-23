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

    const setTheme = (theme) => {
        window.localStorage.setItem('theme', theme);
        currentTheme.set(theme) 
        document.querySelector('html').dataset.theme = theme;
    }

    onMount(() => {
        theme = window.localStorage.getItem('theme');
        theme ? setTheme(theme) : setTheme('forest')
    })
    export const prerender = true;
    
</script>
<ThemeSelect {setTheme} {currentTheme} />
<div class="container">
    <Header>
        <span slot="title">{$page.data.title}</span>
        <img src={$page.data.image} alt={$page.data.title} class="header-image"slot="headerimg" />
    </Header>
    <div class="row">
        <Nav />
        <div class="col-md-9 col-lg-10 content rounded-3 p-4">
            <slot /> 
        </div>
    </div>
</div>
<MobileFooter />