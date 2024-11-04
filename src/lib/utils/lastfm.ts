import { json } from '@sveltejs/kit';
import { supabase } from '$lib/utils';

export const lastFM = async (from?: string) => {
    const timestamp = from || "1 Sep 2024, 20:58"
    const unixTime = Math.round(new Date(timestamp).getTime() / 1000)

    const fetchUrl: string = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${import.meta.env.VITE_LASTFM_USER}&from=${unixTime}&api_key=${import.meta.env.VITE_LASTFM_KEY}&format=json&limit=10`
    //Change limit when updateTrackListing is finished

    const songs = await fetchSongs(fetchUrl).catch(err => { 
        return { error: err }
    })

    return songs
}

const fetchSongs = async (url) => {
    return fetch(url).then(res => res.json()).then(res => res.recenttracks.track.filter(track => track.date).map(track => to_track_data(track)))
}

export const updateTrackListing = async () => {
    const { data: latestPlay } = await supabase.from('plays').select('created_at').order('created_at').limit(1);

    const songs = await lastFM(latestPlay);

    const insert_artists = songs.map(song => ({ name: song.artist }))
    const insert_albums = songs.map(song => ({ name: song.album, artist: song.artist, image: song.image })) 
    const insert_songs = songs.map(song => ({ title: song.title, artist: song.artist, album: song.album }))

    const { data: artists } = await supabase.from("artists").select('id', 'name').in('name', songs.map(song => song.artist))

    const { data: tracks, error: errr } = await supabase.from("tracks")
        .select('id', 'name', 'artist_id', 'album_id')
        .or(songs.map(song => `and(title.eq.${song.title},artist_id.eq.${song.artist_id})`).join(', '))

    const { data: albums } = await supabase.from("albums").select('id', 'name').in('name', songs.map(song => song.album))
    //    const { data: tracks } = await supabase.from("tracks").select('id', 'name',)

}

const to_track_data = (track) => {
    return { title: track.name, artist: from_mbid(track, "artist"), album: from_mbid(track, "album"), image: image(track, "large"), listened_at: from_mbid(track, "date") }
}

const from_mbid = (content, key) => {
    if (content[key]) {
        return content[key]['#text']
    }
}

const image = (track, size) => {
    return track.image.find(img => img.size == size)['#text']
}