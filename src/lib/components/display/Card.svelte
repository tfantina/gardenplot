<script>
    export let path, title;
</script>   

<a href={path}>
    <div class="card">
        <div class="row text-center">
            <h4>{title}</h4>
        </div>

        <slot />
    </div>
</a>