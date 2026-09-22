<script setup lang="ts">
import type { CaseStudy } from '~/data/work'
defineProps<{ item: CaseStudy }>()
</script>

<template>
  <li class="py-5 border-t border-rule grid gap-x-8 gap-y-2 sm:grid-cols-[8.5rem_1fr]">
    <div class="font-mono text-sm text-muted pt-1">{{ item.year }}</div>
    <div>
      <h3 class="text-xl font-medium leading-snug">
        <NuxtLink :to="`/work/${item.slug}`" class="no-underline hover:underline">{{ item.title }}</NuxtLink>
      </h3>
      <p class="mt-1 text-muted measure">{{ item.deck }}</p>
      <p class="mt-2 font-mono text-xs text-muted">{{ item.client }}. {{ item.stack.slice(0, 6).join(', ') }}</p>
    </div>
  </li>
</template>
