<script setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { StepForward, StepBack, Play, Pause } from 'lucide-vue-next'
import { usePlaylistStore } from '~/store/playlist';

const playlistStore = usePlaylistStore();
</script>
<template>
  <div class="flex flex-col">
    <span class="text-2xl font-bold">
      Music Player
    </span>

    <div class="flex w-full justify-center">
      <Card class="mt-5 justify-center w-[50%] border-4 border-primary border-black">
        <CardHeader>
          <CardTitle>{{ playlistStore.player_state.song.song_name }}</CardTitle>
          <CardDescription>{{ playlistStore.player_state.song.artist_name }}</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex flex-row gap-2 justify-center">
            <Button size="icon" variant="outline" class="rounded-full border border-blue-700" @click="playlistStore.previous()" :disabled="!playlistStore.player_state.is_playing">
              <StepBack class="size-6" />
            </Button>

            <Button size="default" variant="outline" class="rounded-full border border-blue-700" v-if="!playlistStore.player_state.is_playing" @click="playlistStore.play()">
              <Play class="size-6" />
            </Button>

            <Button size="default" variant="outline" class="rounded-full border border-blue-700" v-else @click="playlistStore.pause()">
              <Pause class="size-6" />
            </Button>

            <Button size="icon" variant="outline" class="rounded-full border border-blue-700" @click="playlistStore.next()" :disabled="!playlistStore.player_state.is_playing">
              <StepForward class="size-6" />
            </Button>
          </div>
        </CardContent>
        <CardFooter class="justify-center">
          00:00 / {{ playlistStore.player_state.song.song_duration }}
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
