<template>
  <component
    :is="activeComponent"
    @end="$emit('end')"
  />
</template>

<script setup lang="ts">
import IntroSpace from '~/components/intro/IntroSpace.vue'

defineEmits<{ end: [] }>()

/** Changer ici pour basculer entre les animations d'entrée */
const INTRO_TYPE = 'space'

const components = {
  space: IntroSpace,
}

const activeComponent = computed(() => components[INTRO_TYPE])
</script>
