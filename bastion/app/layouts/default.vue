<template>
    <div class="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <AppHeader />
      <main class="flex-1">
        <slot />
      </main>
      <AppFooter />
    </div>
  </template>
  
  <script setup lang="ts">
  </script>