<script setup lang="ts">
import type { DiffLine } from '~/data/work'

const props = defineProps<{
  from?: string
  to?: string
  hunks: readonly { header: string; lines: readonly DiffLine[] }[]
  reveal?: boolean
}>()

// Sequential index across every rendered row, used for the staggered reveal.
let i = 0
const idx = () => i++
i = 0
</script>

<template>
  <div class="diff border border-rule rounded-md bg-well py-2" :class="{ reveal: props.reveal }" role="figure" aria-label="Unified diff summarising the work">
    <template v-if="from && to">
      <div class="file" :style="{ '--i': idx() }">--- {{ from }}</div>
      <div class="file" :style="{ '--i': idx() }">+++ {{ to }}</div>
    </template>
    <template v-for="hunk in hunks" :key="hunk.header">
      <div class="hunk" :style="{ '--i': idx() }">@@ {{ hunk.header }} @@</div>
      <div
        v-for="([sign, text], n) in hunk.lines"
        :key="n"
        class="line"
        :class="sign === '+' ? 'add' : sign === '-' ? 'del' : 'ctx'"
        :style="{ '--i': idx() }"
      >
        <span aria-hidden="true">{{ sign }}</span>
        <span>{{ text }}</span>
      </div>
    </template>
  </div>
</template>
