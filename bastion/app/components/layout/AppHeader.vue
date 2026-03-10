<template>
    <header class="sticky top-0 z-50 border-b border-bordure bg-fond/90 backdrop-blur-sm">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-2 font-semibold tracking-tight text-primary">
          <span class="text-xl">Bastion</span>
        </NuxtLink>
        <ul class="hidden gap-8 md:flex">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="text-sm text-texte-muted transition hover:text-primary"
              @click.prevent="scrollTo(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        <button
          type="button"
          class="rounded p-2 text-texte-muted hover:bg-fond-alt hover:text-primary md:hidden"
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
        class="border-t border-bordure bg-fond/95 px-4 py-4 md:hidden"
      >
        <ul class="flex flex-col gap-4">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="block text-texte-muted hover:text-primary"
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
