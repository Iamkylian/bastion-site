<template>
  <section
    id="home"
    class="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-slate-800/60 bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
  >
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
    <div class="relative mx-auto max-w-4xl text-center">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Bastion.
      </h1>
      <p class="mt-4 text-lg text-slate-400 sm:text-xl">
        Detection, jamming and anti-jamming for the protection of space communications
      </p>
      <p class="mx-auto mt-6 max-w-2xl text-slate-500">
        We design cutting-edge solutions for sovereignty and security in space.
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#solution"
          class="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          @click.prevent="scrollTo('solution')"
        >
          Discover
        </a>
        <a
          href="#contact"
          class="rounded-lg border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-800/50"
          @click.prevent="scrollTo('contact')"
        >
          Contact us
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function scrollTo (id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>