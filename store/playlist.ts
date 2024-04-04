const state = () => ({
    playlist: {},
    player_state: {
        is_playing: false,
        song: {}
    }
});

const getters = {};

const actions = {
    async getPlaylist() {
        const $this = usePlaylistStore();
        const loader = useLoadingIndicator();
        loader.start();

        const { data, response } = await useFetchApi('/playlist/songs', {
            method: "GET"
        });

        loader.finish();

        if (response.value.status == 200) {
            $this.playlist = data.value.data.playlist

            $this.playlist.songs.map((item: any) => {
                if (item.pivot.state == 1) {
                    $this.player_state.song = item
                }
            })
        }
    },
    async play() {
        const $this = usePlaylistStore();
        const loader = useLoadingIndicator();
        loader.start();
        $this.player_state.is_playing = true
        const { data, response } = await useFetchApi('/playlist/play', {
            method: "GET"
        });

        await $this.getPlaylist();

        loader.finish();
    },
    async pause() {
        const $this = usePlaylistStore();
        $this.player_state.is_playing = false
    },
    async next() {
        const $this = usePlaylistStore();
        const loader = useLoadingIndicator();
        loader.start();

        await useFetchApi('/playlist/next', {
            method: "GET"
        });

        await $this.getPlaylist();


        loader.finish();
    },
    async previous() {
        const $this = usePlaylistStore();
        const loader = useLoadingIndicator();
        loader.start();

        await useFetchApi('/playlist/previous', {
            method: "GET"
        });

        await $this.getPlaylist();

        loader.finish();
    },
    async shuffle() {
        const $this = usePlaylistStore();
        const loader = useLoadingIndicator();
        loader.start();
        if (!$this.player_state.is_playing) {
            $this.player_state.is_playing = true
        }
        await useFetchApi('/playlist/shuffle', {
            method: "GET"
        });

        await $this.getPlaylist();

        loader.finish();
    }
};


export const usePlaylistStore = defineStore('playlistStore', {
    state,
    getters,
    actions
});
