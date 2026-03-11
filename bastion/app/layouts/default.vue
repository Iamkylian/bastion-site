<template>
    <div class="relative z-[1] min-h-screen flex flex-col text-slate-100">
      <AppHeader />
      <main class="flex-1">
        <slot />
      </main>
      <AppFooter />
    </div>
  </template>
  
  <script setup lang="ts">
  </script>