<script>
    export let songs;
</script>

<div class="music-card f-col">
    {#each songs as song}
        <div class="song-card">
            <div class="song-card--art">
                <img src={song.image} />
            </div>
            <div class="col">
                <div class="song-card--title ">
                    {song.title}
                </div>
                <div class="song-card--artist-album meta">
                    {song.artist} - <i>{song.album}</i>
                </div>
                <div class="song-card--listened">
                    Played: {song.listened_at}
                </div>
            </div>
        </div>
    {/each}
</div>
