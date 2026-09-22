<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps<{ error: NuxtError }>()
useSeoMeta({ title: 'Not found' })
</script>

<template>
  <div class="min-h-dvh flex flex-col">
    <SiteHeader />
    <main class="flex-1 mx-auto w-full max-w-5xl px-5 sm:px-8 pt-14">
      <p class="font-mono text-sm text-muted">{{ error.statusCode }}</p>
      <h1 class="mt-3 text-3xl font-semibold">There is nothing at this address.</h1>
      <p class="mt-4 measure text-muted">The page may have moved when the site was rebuilt. Everything still lives on the home page.</p>
      <p class="mt-6"><NuxtLink to="/" @click="clearError()">Go to the home page</NuxtLink></p>
    </main>
    <SiteFooter />
  </div>
</template>
