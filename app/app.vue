<script setup lang="ts">
import { profile } from '~/data/profile'

// Apply the stored or system theme before first paint so there is no flash.
useHead({
  script: [{
    key: 'theme',
    tagPosition: 'head',
    innerHTML: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`,
  }],
})

useSeoMeta({
  ogSiteName: profile.name,
  ogType: 'website',
  twitterCard: 'summary',
})
</script>

<template>
  <div class="min-h-dvh flex flex-col">
    <SiteHeader />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>
