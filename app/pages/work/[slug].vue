<script setup lang="ts">
import { work } from '~/data/work'
import { profile } from '~/data/profile'

const route = useRoute()
const item = work.find((w) => w.slug === route.params.slug)
if (!item) throw createError({ statusCode: 404, statusMessage: 'No such case study', fatal: true })

const i = work.indexOf(item)
const next = work[(i + 1) % work.length]!

useSeoMeta({
  title: item.title,
  description: item.deck,
  ogTitle: `${item.title} — ${profile.name}`,
  ogDescription: item.deck,
  ogImage: `${profile.site}/israel.jpg`,
})
</script>

<template>
  <article v-if="item" class="mx-auto w-full max-w-5xl px-5 sm:px-8 pt-10 sm:pt-14">
    <p class="font-mono text-sm text-muted"><NuxtLink to="/#work">Work</NuxtLink> / {{ item.client }}, {{ item.year }}</p>
    <h1 class="mt-4 text-[1.9rem] sm:text-[2.4rem] font-semibold leading-[1.12] max-w-3xl">{{ item.title }}</h1>
    <p class="mt-4 measure text-muted text-lg">{{ item.deck }}</p>

    <div class="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <div>
        <DiffBlock :hunks="[item.diff]" />

        <section v-for="s in item.sections" :key="s.heading" class="mt-10">
          <h2 class="text-xl font-semibold">{{ s.heading }}</h2>
          <p v-for="(p, n) in s.paragraphs" :key="n" class="mt-3 measure">{{ p }}</p>
          <ul v-if="s.bullets" class="mt-3 measure list-disc pl-5 space-y-2 marker:text-muted">
            <li v-for="(b, n) in s.bullets" :key="n">{{ b }}</li>
          </ul>
        </section>
      </div>

      <aside class="lg:pt-1 text-sm">
        <dl class="space-y-4">
          <div>
            <dt class="font-medium">Role</dt>
            <dd class="text-muted">{{ item.role }}</dd>
          </div>
          <div>
            <dt class="font-medium">Stack</dt>
            <dd class="text-muted">{{ item.stack.join(', ') }}</dd>
          </div>
          <div v-if="item.link">
            <dt class="font-medium">Live</dt>
            <dd><a :href="item.link.href" target="_blank" rel="noopener">{{ item.link.label }}</a></dd>
          </div>
        </dl>
      </aside>
    </div>

    <nav class="mt-14 pt-6 border-t border-rule flex flex-wrap justify-between gap-4 text-sm">
      <NuxtLink to="/#work">All work</NuxtLink>
      <NuxtLink :to="`/work/${next.slug}`">Next: {{ next.title }}</NuxtLink>
    </nav>
  </article>
</template>
