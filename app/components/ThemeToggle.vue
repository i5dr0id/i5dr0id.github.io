<script setup lang="ts">
const { theme, toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    class="font-mono text-xs text-muted hover:text-ink border border-rule rounded-sm px-2 py-1"
    :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggle"
  >
    <span aria-hidden="true">{{ theme === 'dark' ? 'light' : 'dark' }}</span>
  </button>
</template>
