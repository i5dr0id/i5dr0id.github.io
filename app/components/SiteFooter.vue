<script setup lang="ts">
import { profile } from '~/data/profile'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mx-auto w-full max-w-5xl px-5 sm:px-8 py-10 mt-16 border-t border-rule text-sm text-muted flex flex-wrap gap-x-6 gap-y-2">
    <span>{{ profile.name }}, {{ year }}</span>
    <a :href="`mailto:${profile.email}`" class="hover:text-ink">{{ profile.email }}</a>
    <a :href="profile.github" target="_blank" rel="noopener" class="hover:text-ink">GitHub</a>
    <a :href="profile.linkedin" target="_blank" rel="noopener" class="hover:text-ink">LinkedIn</a>
    <a href="https://github.com/i5dr0id/i5dr0id.github.io" target="_blank" rel="noopener" class="hover:text-ink">Source for this site</a>
  </footer>
</template>
