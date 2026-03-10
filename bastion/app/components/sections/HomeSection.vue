<template>
  <section
    id="home"
    class="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-bordure bg-gradient-to-b from-fond to-fond-alt px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
  >
    <NetworkCanvas class="absolute inset-0" />
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.06),transparent)]" />

    <div class="pointer-events-none relative z-10 mx-auto max-w-4xl text-center">
      <h1 class="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
        Bastion.
      </h1>
      <p class="mt-4 text-lg text-texte-muted sm:text-xl">
        Detection, jamming and anti-jamming for the protection of space communications
      </p>
      <p class="mx-auto mt-6 max-w-2xl text-texte-faint">
        We design cutting-edge solutions for sovereignty and security in space.
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-4 pointer-events-auto">
        <a
          href="#solution"
          class="rounded-lg bg-secondary px-6 py-3 text-sm font-medium text-white transition hover:bg-secondary-light"
          @click.prevent="scrollTo('solution')"
        >
          Discover
        </a>
        <a
          href="#contact"
          class="rounded-lg border border-bordure-dark px-6 py-3 text-sm font-medium text-texte-muted transition hover:border-primary hover:bg-fond-alt/50"
          @click.prevent="scrollTo('contact')"
        >
          Contact us
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import NetworkCanvas from '~/components/NetworkCanvas.vue'

function scrollTo (id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
