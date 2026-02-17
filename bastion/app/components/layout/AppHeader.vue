<template>
    <header class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-sm">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-2 font-semibold tracking-tight text-white">
          <span class="text-xl">Bastion</span>
        </NuxtLink>
        <ul class="hidden gap-8 md:flex">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="text-sm text-slate-400 transition hover:text-white"
              @click.prevent="scrollTo(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        <button
          type="button"
          class="rounded p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Menu"
          @click="open = !open"
        >
          <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>
      <div
        v-show="open"
        class="border-t border-slate-800/80 bg-slate-900/95 px-4 py-4 md:hidden"
      >
        <ul class="flex flex-col gap-4">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="block text-slate-400 hover:text-white"
              @click.prevent="scrollTo(item.id); open = false"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  const open = ref(false)
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'solution', label: 'Solution' },
    { id: 'business', label: 'Business' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ]
  
  function scrollTo (id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  </script>