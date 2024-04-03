<script setup>


</script>
<template>
  <NuxtLoadingIndicator />
  <div class="flex flex-col h-screen p-3">

    <Toaster />

    <!-- navbar -->
    <div class="min-w-full border border-blue-600 rounded-lg p-2">
      <DevHeader />
    </div>

    <div class="flex lg:flex-row justify-around items-center px-8 h-screen sm:flex-col">
      <div class="w-full text-center">
        <!-- music player -->
        <DevMusicPlayer />
      </div>

      <div class="w-full text-center">
        <!-- music queue list -->
        <DevMusicPlayerSongLists />
      </div>
    </div>
  </div>
</template>
