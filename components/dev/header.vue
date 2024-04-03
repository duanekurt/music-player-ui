<script setup>
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
</script>

<template>
    <div class="flex flex-row justify-between">
        <div class="flex w-[50%]">
            <Button variant="ghost" size="lg">My Music Player</Button>
        </div>

        <div class="flex w-[50%] justify-end px-5">
            <Button variant="ghost" class="border border-red-700">Logout</Button>
        </div>
    </div>
</template>