<script setup>
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { usePlaylistStore } from '~/store/playlist';
import { Shuffle } from 'lucide-vue-next'
const playlistStore = usePlaylistStore();
const songs = ref()

onMounted(async () => {
    await playlistStore.getPlaylist();
    songs.value = playlistStore.playlist.songs
})

</script>

<template>
    <div>
        <Card>
            <CardHeader>
                <CardTitle>
                    <div class="class flex flex-row justify-center items-center gap-3">
                        {{ playlistStore.playlist.playlist_name }}
                        <Button variant="outline" size="default" @click="playlistStore.shuffle()">
                            <Shuffle class="h-4 w-4" />
                        </Button>
                    </div>
                </CardTitle>
                <CardDescription>List of songs that will be played in the music player.</CardDescription>

                <CardContent>
                    <ScrollArea class="h-96 w-full rounded-md border">
                        <div v-for="song in songs" :key="tag">
                            <div class="grid grid-cols-3 justify-around p-3">
                                <span class="text-lg">
                                    {{ song.song_duration }}
                                </span>
                                <div class="song">
                                    <div class="">
                                        {{ song.song_name }}
                                    </div>
                                    <div class="text-sm">
                                        {{ song.artist_name }}
                                    </div>
                                </div>
                                <Badge variant="primary" class="m-2 justify-center bg-green-300 text-white"
                                    v-if="playlistStore.player_state.song.id == song.id && playlistStore.player_state.is_playing">
                                    Playing
                                </Badge>
                            </div>
                            <Separator />
                        </div>
                    </ScrollArea>
                </CardContent>
            </CardHeader>
        </Card>

    </div>
</template>