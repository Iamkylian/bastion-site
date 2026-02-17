<template>
  <section
    id="team"
    class="scroll-mt-20 border-b border-slate-800/60 bg-slate-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
  >
    <div class="mx-auto max-w-6xl">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Team
      </h2>
      <p class="mt-4 max-w-2xl text-slate-400">
        Get to know the team behind Bastion.
      </p>
      <ul class="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <li
          v-for="(member, i) in team"
          :key="i"
          class="flex flex-col items-center text-center"
        >
          <p class="text-lg font-semibold text-white truncate">
            {{ member.name }}
          </p>
          <p class="mt-0.5 text-sm text-slate-500">
            {{ member.role }}
          </p>
          <div
            class="mt-3 aspect-square w-full max-w-[200px] overflow-hidden rounded-lg border border-slate-700 bg-slate-800"
          >
            <img
              v-if="member.photo"
              :src="member.photo"
              :alt="member.name"
              class="size-full object-cover"
            >
            <div
              v-else
              class="flex size-full items-center justify-center text-slate-600"
              aria-hidden
            >
              <svg class="size-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const team = [
  { name: 'Antonin ARNAUD', role: 'RF Lead', photo: '/images/team/17977a15-840b-49eb-8900-e8209f9901f9.jpg' },
  { name: 'Tierno-Alpha TALL', role: 'Software Lead', photo: '/images/team/ltr11ll3xrt8g7dr.png' },
  { name: 'Kichi-Tawa BOURGUINAT', role: 'Business Lead', photo: '/images/team/54n7z3vwzmqd549r.jpg' },
  { name: 'Henrique IHA TAGUTI', role: 'E/W Lead', photo: '/images/team/a8a695e0-1dfb-4a14-a5a7-a9214c8596cc.jpg' },
  { name: 'Kylian GACHET', role: 'Cybersecurity Lead', photo: '/images/team/1333fe97-f070-4fef-8daf-a4804a653c94.jpg' }
]
</script>
  