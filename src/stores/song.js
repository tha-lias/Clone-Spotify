import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', {
    state: () => ({
        isPlaying : false,
        audio : null,
        currentArtist: null,
        currentTrack: null
    }),

    //
    actions: {
        loadSong(artist, track) {
            this.currentArtist = artist;
            this.currentTrack = track;

            if (this.audio && this.audio.src) {
                this.audio.pause()
                this.isPlaying = false      
                this.audio.src =''
            }

            this.audio = new Audio()
            this.audio.src = track.path
        }
    }
})