<script setup lang="ts">
import { profile, heroDiff } from '~/data/profile'
import { work, moreWork } from '~/data/work'
import { experience } from '~/data/experience'
import { skills } from '~/data/skills'

useSeoMeta({
  title: null,
  description: `${profile.name} is a software engineer with ten years of production work in Vue, React, Go and Node.js, for teams in Germany, the US and Nigeria.`,
  ogTitle: `${profile.name} — Software engineer`,
  ogDescription: profile.headline,
  ogImage: `${profile.site}/israel.jpg`,
})

const featured = work.filter((w) => w.featured)
</script>

<template>
  <div class="mx-auto w-full max-w-5xl px-5 sm:px-8">
    <!-- Hero -->
    <section class="pt-14 sm:pt-20 pb-12 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start">
      <div>
        <p class="font-mono text-sm text-muted">{{ profile.name }}. {{ profile.role }}.</p>
        <h1 class="mt-5 text-[2rem] sm:text-[2.6rem] font-semibold leading-[1.1]">
          {{ profile.headline }}
        </h1>
        <p class="mt-6 measure text-muted">{{ profile.intro }}</p>
        <p class="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a :href="profile.resume" target="_blank" rel="noopener">Read the résumé</a>
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
          <a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        </p>
      </div>
      <DiffBlock :from="heroDiff.from" :to="heroDiff.to" :hunks="heroDiff.hunks" reveal />
    </section>

    <!-- Work -->
    <section id="work" class="pt-10 scroll-mt-20">
      <h2 class="text-2xl font-semibold">Selected work</h2>
      <p class="mt-2 measure text-muted">Each of these has a page with the context, what I built, how, and what came of it. Client code stays with the client; the write-ups describe outcomes.</p>
      <ul class="mt-6 list-none p-0">
        <WorkRow v-for="item in featured" :key="item.slug" :item="item" />
      </ul>

      <h3 class="mt-10 text-lg font-medium">Also</h3>
      <ul class="mt-3 list-none p-0 grid gap-3 sm:grid-cols-2">
        <li v-for="m in moreWork" :key="m.name" class="text-sm">
          <a v-if="m.href" :href="m.href" target="_blank" rel="noopener" class="font-medium">{{ m.name }}</a>
          <span v-else class="font-medium">{{ m.name }}</span>
          <span class="text-muted"> — {{ m.text }}</span>
        </li>
      </ul>
    </section>

    <!-- Experience -->
    <section id="experience" class="pt-16 scroll-mt-20">
      <h2 class="text-2xl font-semibold">Experience</h2>
      <p class="mt-2 measure text-muted">Employed twice, contracted since 2021, remote since 2019. Two of these are still running.</p>
      <ol class="rail mt-8 ml-1 list-none p-0 space-y-7">
        <li v-for="r in experience" :key="r.company + r.start" class="pl-6" :class="{ now: r.period.endsWith('present') }">
          <div class="flex flex-wrap items-baseline gap-x-3">
            <h3 class="text-lg font-medium">{{ r.company }}</h3>
            <span class="font-mono text-sm text-muted">{{ r.period }}</span>
          </div>
          <p class="text-sm text-muted">{{ r.title }}. {{ r.where }}.</p>
          <p class="mt-2 measure">{{ r.summary }}</p>
          <p v-if="r.work" class="mt-1 text-sm"><NuxtLink :to="`/work/${r.work}`">Read the case study</NuxtLink></p>
        </li>
      </ol>
    </section>

    <!-- Skills -->
    <section id="skills" class="pt-16 scroll-mt-20">
      <h2 class="text-2xl font-semibold">What I work with</h2>
      <dl class="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-[9rem_1fr]">
        <template v-for="[k, v] in skills" :key="k">
          <dt class="font-medium">{{ k }}</dt>
          <dd class="text-muted measure">{{ v }}</dd>
        </template>
      </dl>
    </section>

    <!-- Contact -->
    <section id="contact" class="pt-16 scroll-mt-20">
      <div class="grid gap-8 sm:grid-cols-[6rem_1fr] items-start">
        <img src="/israel.jpg" alt="" width="96" height="96" class="rounded-md w-24 h-24 object-cover" loading="lazy">
        <div>
          <h2 class="text-2xl font-semibold">Get in touch</h2>
          <p class="mt-2 measure text-muted">{{ profile.remote }}. Available for contract and full-time roles. The quickest way to reach me is email; I reply within a day.</p>
          <p class="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
            <a :href="profile.resume" target="_blank" rel="noopener">Résumé</a>
            <a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
            <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
