import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const siteName = ref('Demo Fitness Instructor')
  const siteDescription = ref(
    'A conversion-focused website scaffold for fitness coaching, programs, and class sales.',
  )

  const siteTagline = computed(() => siteDescription.value)

  return {
    siteDescription,
    siteName,
    siteTagline,
  }
})
