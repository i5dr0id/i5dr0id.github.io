<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <header class="mx-auto w-full max-w-5xl px-5 sm:px-8 pt-6 pb-2 flex items-center justify-between gap-4">
    <NuxtLink to="/" class="font-mono text-sm text-ink no-underline hover:underline">
      {{ profile.handle }}
    </NuxtLink>
    <nav class="flex items-center gap-5 text-sm">
      <NuxtLink to="/#work" class="no-underline hover:underline">Work</NuxtLink>
      <NuxtLink to="/#experience" class="no-underline hover:underline">Experience</NuxtLink>
      <a :href="profile.resume" target="_blank" rel="noopener" class="no-underline hover:underline">Résumé</a>
      <ThemeToggle />
    </nav>
  </header>
</template>
