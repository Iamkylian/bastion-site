<template>
    <footer class="border-t border-slate-800 bg-slate-900/50">
      <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div class="text-center md:text-left">
            <span class="font-semibold text-white">Bastion</span>
            <p class="mt-1 text-sm text-slate-500">
              Defence & space
            </p>
          </div>
          <ul class="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="`#${item.id}`"
                class="transition hover:text-white"
                @click.prevent="scrollTo(item.id)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
        <div class="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {{ new Date().getFullYear() }} Bastion. All rights reserved.
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'business', label: 'Business' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ]
  
  function scrollTo (id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  </script>
  