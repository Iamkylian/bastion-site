<template>
  <Transition name="intro-fade">
    <div
      v-if="visible"
      class="intro-overlay intro-overlay--space"
    >
      <div class="intro-particles" aria-hidden="true">
        <span
          v-for="(p, i) in particles"
          :key="i"
          class="intro-particle"
          :style="{
            left: p.x,
            top: p.y,
            width: p.size + 'px',
            height: p.size + 'px',
            opacity: p.opacity,
            animationDelay: p.delay + 's',
            animationDuration: p.duration + 's'
          }"
        />
      </div>
      <div class="intro-glow" aria-hidden="true" />
      <p class="intro-text" aria-hidden="true">
        Bastion
      </p>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const emit = defineEmits<{ end: [] }>()
const visible = ref(true)

const particleCount = 80
const particles = computed(() => {
  const list: Array<{ x: string, y: string, size: number, opacity: number, delay: number, duration: number }> = []
  for (let i = 0; i < particleCount; i++) {
    list.push({
      x: `${(i * 17 + 7) % 98}%`,
      y: `${(i * 23 + 11) % 97}%`,
      size: (i % 3) === 0 ? 3 : 2,
      opacity: 0.12 + (i % 5) * 0.06,
      delay: (i % 10) * 0.4,
      duration: 18 + (i % 8),
    })
  }
  return list
})

const DURATION_MS = 3500
let timeouts: ReturnType<typeof setTimeout>[] = []

onMounted(() => {
  timeouts.push(
    setTimeout(() => {
      visible.value = false
      emit('end')
    }, DURATION_MS)
  )
})

onUnmounted(() => {
  timeouts.forEach(clearTimeout)
})
</script>

<style scoped>
.intro-overlay--space {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #E8EBEF;
  clip-path: circle(0% at 50% 50%);
  animation: intro-space-reveal 1.5s ease-in-out 1.1s forwards;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.intro-particle {
  position: absolute;
  border-radius: 50%;
  background: #0D9488;
  transform: translate(-50%, -50%);
  animation: intro-particle-drift linear infinite;
  will-change: transform;
}

@keyframes intro-particle-drift {
  0% { transform: translate(-50%, -50%) translateY(0) translateX(0); }
  100% { transform: translate(-50%, -50%) translateY(-20px) translateX(8px); }
}

.intro-glow {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100vmax;
  height: 100vmax;
  margin-left: -50vmax;
  margin-top: -50vmax;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(13, 148, 136, 0.06), 0 0 120px 50px rgba(21, 101, 192, 0.05);
  transform: scale(0);
  animation: intro-glow-scale 2.5s ease-in-out 1.1s forwards;
  pointer-events: none;
}

@keyframes intro-space-reveal {
  0% { clip-path: circle(0% at 50% 50%); }
  100% { clip-path: circle(150% at 50% 50%); }
}

@keyframes intro-glow-scale {
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
}

.intro-text {
  position: relative;
  z-index: 1;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 200;
  letter-spacing: 0.35em;
  color: #2B3840;
  text-transform: uppercase;
  margin: 0;
  opacity: 0;
  animation: intro-text-in 3.8s ease-out 0.25s forwards;
}

@keyframes intro-text-in {
  0% { opacity: 0; letter-spacing: 0.5em; }
  28% { opacity: 1; letter-spacing: 0.35em; }
  42% { opacity: 1; }
  100% { opacity: 0; letter-spacing: 0.4em; }
}

.intro-fade-enter-active,
.intro-fade-leave-active {
  transition: opacity 0.35s ease-out;
}

.intro-fade-leave-to {
  opacity: 0;
  pointer-events: none;
}
</style>
