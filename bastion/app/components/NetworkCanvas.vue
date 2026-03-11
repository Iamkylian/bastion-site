<template>
    <canvas
      ref="canvasRef"
      class="pointer-events-none absolute inset-0 h-full w-full"
    />
  </template>
  
  <script setup lang="ts">
  interface Node {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    baseOpacity: number
  }
  
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const mouse = reactive({ x: -9999, y: -9999, active: false })
  
  const CONNECTION_DIST = 160
  const MOUSE_RADIUS = 200
  const MOUSE_FORCE = 0.015

  function getNodeCount () {
    const w = window.innerWidth
    if (w < 480) return 60
    if (w < 768) return 100
    if (w < 1024) return 160
    return 250
  }
  
  const ACCENT = { r: 13, g: 148, b: 136 }
  const PRIMARY = { r: 60, g: 80, b: 100 }
  
  let nodes: Node[] = []
  let rafId = 0
  let width = 0
  let height = 0
  
  let nodeCount = 250

  function seedNodes () {
    nodeCount = getNodeCount()
    nodes = []
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 1.5 + Math.random() * 1.5,
        baseOpacity: 0.35 + Math.random() * 0.4,
      })
    }
  }
  
  function resize () {
    const canvas = canvasRef.value
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    width = rect.width
    height = rect.height
    canvas.width = width * dpr
    canvas.height = height * dpr
    const ctx = canvas.getContext('2d')
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  
  function tick () {
    const canvas = canvasRef.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
  
    ctx.clearRect(0, 0, width, height)
  
    for (const node of nodes) {
      if (mouse.active) {
        const dx = node.x - mouse.x
        const dy = node.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE
          node.vx -= (dx / dist) * force
          node.vy -= (dy / dist) * force
        }
      }
  
      node.x += node.vx
      node.y += node.vy
  
      node.vx *= 0.998
      node.vy *= 0.998
  
      if (node.x < 0) { node.x = 0; node.vx *= -1 }
      if (node.x > width) { node.x = width; node.vx *= -1 }
      if (node.y < 0) { node.y = 0; node.vy *= -1 }
      if (node.y > height) { node.y = height; node.vy *= -1 }
    }
  
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i]
        const b = nodes[j]
        if (!a || !b) continue
        const dx = a.x - b.x
        const dy = a.y - b.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.24
  
          let nearMouse = false
          if (mouse.active) {
            const mx = (a.x + b.x) / 2
            const my = (a.y + b.y) / 2
            const md = Math.sqrt((mx - mouse.x) ** 2 + (my - mouse.y) ** 2)
            nearMouse = md < MOUSE_RADIUS
          }
  
          if (nearMouse) {
            ctx.strokeStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${alpha * 2.5})`
            ctx.lineWidth = 1.2
          } else {
            ctx.strokeStyle = `rgba(${PRIMARY.r}, ${PRIMARY.g}, ${PRIMARY.b}, ${alpha})`
            ctx.lineWidth = 0.9
          }
  
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
    }
  
    for (const node of nodes) {
      let nearMouse = false
      if (mouse.active) {
        const d = Math.sqrt((node.x - mouse.x) ** 2 + (node.y - mouse.y) ** 2)
        nearMouse = d < MOUSE_RADIUS
      }
  
      if (nearMouse) {
        ctx.fillStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${Math.min(node.baseOpacity * 2, 1)})`
        ctx.shadowColor = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, 0.4)`
        ctx.shadowBlur = 8
      } else {
        ctx.fillStyle = `rgba(${PRIMARY.r}, ${PRIMARY.g}, ${PRIMARY.b}, ${node.baseOpacity})`
        ctx.shadowColor = 'transparent'
        ctx.shadowBlur = 0
      }
  
      ctx.beginPath()
      ctx.arc(node.x, node.y, nearMouse ? node.radius * 1.6 : node.radius, 0, Math.PI * 2)
      ctx.fill()
    }
  
    ctx.shadowColor = 'transparent'
    ctx.shadowBlur = 0
  
    rafId = requestAnimationFrame(tick)
  }
  
  function onMouseMove (e: MouseEvent) {
    mouse.x = e.clientX
    mouse.y = e.clientY
    mouse.active = true
  }

  function onMouseLeave () {
    mouse.active = false
  }

  let resizeObserver: ResizeObserver | null = null

  onMounted(() => {
    resize()
    seedNodes()
    rafId = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    resizeObserver = new ResizeObserver(() => {
      resize()
      const target = getNodeCount()
      if (nodes.length === 0 || Math.abs(nodes.length - target) > 20) seedNodes()
    })
    if (canvasRef.value) {
      resizeObserver.observe(canvasRef.value)
    }
  })

  onUnmounted(() => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseleave', onMouseLeave)
    resizeObserver?.disconnect()
  })
  </script>
  