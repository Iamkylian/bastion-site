<template>
  <section
    id="solution"
    class="scroll-mt-20 border-b border-slate-800/60 bg-slate-900/30 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
  >
    <div class="mx-auto max-w-6xl">
      <!-- Header -->
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Our Solutions
      </h2>

      <p class="mt-4 max-w-3xl text-slate-400">
        Bastion develops space-qualified RF subsystems protecting satellites against jamming and GNSS spoofing.
        Our embedded modules combine certified hardware, adaptive software and continuous monitoring to secure
        critical orbital infrastructure — from civilian constellations to sovereign missions.
      </p>

      <!-- Offers -->
      <div class="mt-12 grid gap-6 sm:grid-cols-2">

        <!-- Civil -->
        <div class="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-white">
              Bastion.Talk
            </h3>
            <span class="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              Passive RF Protection
            </span>
          </div>

          <p class="mt-3 text-slate-400">
            Secure satellite communications and RF monitoring for NewSpace operators and critical civilian services.
            Bastion.Talk focuses on detection, resilience and observability — without offensive capabilities.
          </p>

          <ul class="mt-5 space-y-2 text-slate-300 text-sm">
           <li>• High-gain antenna network</li>
            <li>• GNSS data securing & encryption</li>
            <li>• Jamming & spoofing detection</li>
            <li>• Jammer geolocation</li>
            <li>• Mission dashboard</li>
            <li>• Continuous monitoring</li>
            <li>• Secure API access</li>
            <li>• Software updates</li>
            <li class="pt-2 italic text-slate-400">
              No active jamming or counter-attack capability
            </li>
          </ul>

          <p class="mt-4 text-sm text-slate-400">
            Objective: observe, alert, document and maintain service continuity.
          </p>
        </div>

        <!-- Defense -->
        <div class="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-white">
              Bastion.Daemon
            </h3>
            <span class="rounded-full bg-red-900/40 px-3 py-1 text-xs text-red-300">
              Active RF Defense
            </span>
            
          </div>

          <p class="mt-3 text-slate-400">
            Defense-grade RF subsystem designed for contested environments, enabling active protection and mission
            continuity for sovereign space assets.
          </p>

          <ul class="mt-5 space-y-2 text-slate-300 text-sm">
            <li>• Reconfigurable antenna network</li>
            <li>• Wideband RF surveillance</li>
            <li>• Signal intelligence capabilities</li>
            <li>• Detection of hostile satellites</li>
            <li>• Active anti-jamming</li>
            <li>• Advanced anti-spoofing</li>
            <li>• Inter-satellite RF mitigation</li>
            <li>• Priority support</li>
            <li>• Advanced algorithmic updates</li>
          </ul>

          <p class="mt-4 text-sm text-slate-400">
            Objective: operate under attack, preserve sovereignty and maintain operational superiority.
          </p>
        </div>

      </div>

      <!-- Vision -->
      <p class="mt-12 max-w-3xl text-slate-400">
        Bastion’s ambition is to build a European leader in space RF cybersecurity, addressing the rapidly growing
        vulnerability of orbital infrastructures in an increasingly contested space domain.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
