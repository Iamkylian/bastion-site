<template>
  <Transition name="intro-fade">
    <div
      v-if="visible"
      class="intro-overlay intro-overlay--space"
    >
      <div class="intro-stars" aria-hidden="true">
        <span
          v-for="(star, i) in stars"
          :key="i"
          class="intro-star"
          :style="{
            left: star.x,
            top: star.y,
            width: star.size + 'px',
            height: star.size + 'px',
            opacity: star.opacity,
            animationDelay: star.delay + 's',
            animationDuration: star.duration + 's'
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

const starCount = 100
const stars = computed(() => {
  const list: Array<{ x: string, y: string, size: number, opacity: number, delay: number, duration: number }> = []
  for (let i = 0; i < starCount; i++) {
    list.push({
      x: `${(i * 17 + 7) % 98}%`,
      y: `${(i * 23 + 11) % 97}%`,
      size: (i % 3) === 0 ? 1.5 : 1,
      opacity: 0.25 + (i % 5) * 0.1,
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
  background: #030304;
  clip-path: circle(0% at 50% 50%);
  animation: intro-space-reveal 1.5s ease-in-out 1.1s forwards;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-stars {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.intro-star {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  animation: intro-star-drift linear infinite;
  will-change: transform;
}

@keyframes intro-star-drift {
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
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04), 0 0 120px 50px rgba(255, 255, 255, 0.06);
  transform: scale(0);
  animation: intro-glow-scale 2.8s ease-in-out 1.1s forwards;
  pointer-events: none;
}

@keyframes intro-space-reveal {
  0% { clip-path: circle(0% at 50% 50%); }
  100% { clip-path: circle(150% at 50% 50%); }
}

@keyframes intro-glow-scale {
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(1); opacity: 0.6; }
}

.intro-text {
  position: relative;
  z-index: 1;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 200;
  letter-spacing: 0.35em;
  color: rgba(255, 255, 255, 0.92);
  text-transform: uppercase;
  margin: 0;
  opacity: 0;
  animation: intro-text-in 3.5s ease-out 0.25s forwards;
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
