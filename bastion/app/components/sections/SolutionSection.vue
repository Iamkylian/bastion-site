<template>
  <section
    id="solution"
    class="scroll-mt-20 border-b border-bordure bg-fond-alt/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
  >
    <div class="mx-auto max-w-6xl">
      <div class="text-center">
        <span class="text-sm font-semibold uppercase tracking-wider text-texte-faint">
          The Solution
        </span>
      </div>

      <div class="mt-8 text-center">
        <h1 class="text-8xl font-black tracking-tighter sm:text-9xl md:text-[10rem]">
          DAEMON
        </h1>
        <div class="mt-4 flex justify-center gap-4">
          <span class="rounded-full bg-red-50 px-6 py-2 text-sm font-semibold uppercase tracking-wider text-red-700">
            Active RF Defense
          </span>
          <span class="rounded-full bg-fond-alt px-6 py-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Defense Grade
          </span>
        </div>
      </div>

      <p class="mx-auto mt-12 max-w-4xl text-center text-xl text-texte-muted sm:text-2xl">
        Space-qualified RF subsystem protecting sovereign assets<br />
        in contested environments through active defense.
      </p>

      <div class="mt-16 grid gap-4 sm:grid-cols-3">
        <div class="rounded-lg border border-bordure bg-fond-surface p-6 text-center">
          <div class="text-4xl font-bold text-primary">3</div>
          <div class="mt-2 text-sm uppercase tracking-wider text-texte-muted">Modes</div>
          <p class="mt-1 text-xs text-texte-faint">Detect · Localize · Counter</p>
        </div>
        <div class="rounded-lg border border-bordure bg-fond-surface p-6 text-center">
          <div class="text-4xl font-bold text-primary">360°</div>
          <div class="mt-2 text-sm uppercase tracking-wider text-texte-muted">Awareness</div>
          <p class="mt-1 text-xs text-texte-faint">Full RF spectrum surveillance</p>
        </div>
        <div class="rounded-lg border border-bordure bg-fond-surface p-6 text-center">
          <div class="text-4xl font-bold text-primary">0s</div>
          <div class="mt-2 text-sm uppercase tracking-wider text-texte-muted">Latency</div>
          <p class="mt-1 text-xs text-texte-faint">Real-time countermeasures</p>
        </div>
      </div>

      <p class="mt-16 text-center text-sm text-texte-faint">
        Built for sovereignty. Operates under attack.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
h1 {
  text-shadow: 0 0 40px rgba(13, 148, 136, 0.15);
  background: linear-gradient(180deg, #000091 0%, #000091 20%, #2B3840 60%, #e1000f 80%, #e1000f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
