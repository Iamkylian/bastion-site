<template>
  <div class="app-root">
    <!-- Intro en premier : visible dès le premier paint -->
    <IntroAnimation v-if="showIntro" @end="onIntroEnd" />

    <!-- Contenu principal masqué pendant l'intro, fondu à la fin -->
    <div
      class="app-content"
      :class="{ 'app-content--visible': !showIntro }"
      :aria-hidden="showIntro"
    >
      <NuxtRouteAnnouncer />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroAnimation from '~/components/IntroAnimation.vue'

const showIntro = ref(true)

function onIntroEnd () {
  showIntro.value = false
}
</script>

<style>
.app-root {
  min-height: 100vh;
  /* Même fond que l'intro : pas de flash avant le premier paint */
  background: #030304;
}

/* Masqué tant que l'intro est affichée, puis fondu d'entrée */
.app-content {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s ease-out;
}

.app-content--visible {
  opacity: 1;
  pointer-events: auto;
}
</style>
