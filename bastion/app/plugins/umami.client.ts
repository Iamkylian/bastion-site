export default defineNuxtPlugin(() => {
    const script = document.createElement('script')
    script.defer = true
    script.src = 'https://cloud.umami.is/script.js'
    script.dataset.websiteId = '0661da96-0120-443f-b7bc-6f1176aedbbd'
    script.onerror = () => {
      // Script bloqué (ex. bloqueur de pub) ou indisponible : on ignore silencieusement
    }
    document.head.appendChild(script)
  })
  