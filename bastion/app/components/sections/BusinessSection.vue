<template>
  <section
    id="business"
    class="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
  >

  <div class="business-timeline">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Roadmap
          </h2>
          <div class="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-[#000091] via-white to-[#e1000f]"></div>
          <p class="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            From prototype to European leadership — our 11-year journey
          </p>
        </div>

    <div class="mt-4 mb-8 text-sm text-slate-400 max-w-2xl mx-auto bg-slate-800/30 p-3 rounded-lg">
      <span class="font-semibold text-white">The numbers:</span> 
      Annual revenue in millions of €. <span class="text-blue-400">Hardware</span> = one-time equipment sales. 
      <span class="text-blue-400">Software</span> = recurring subscriptions from <span class="text-white">all satellites deployed to date</span> (past years + current year). 
      Software share grows from 7% to 39% as our installed base expands.
    </div>


    <div class="timeline-container" ref="timelineContainer">
      <!-- Vertical center line -->
      <div class="timeline-line"></div>
      
      <div class="timeline-steps">
        <div 
          v-for="(step, index) in timelineSteps" 
          :key="index"
          class="timeline-step"
          :class="{ 'active': activeStep === index }"
          :ref="el => { if(el) stepRefs[index] = el }"
        >
          <div class="step-marker">
            <div class="step-dot" :class="step.phaseType"></div>
            <span class="step-year">Year {{ step.year }}</span>
          </div>
          
          <div class="step-content">
            <div class="step-header">
              <span class="step-phase">{{ step.phase }}</span>
              <h3 class="step-title">{{ step.title }}</h3>
            </div>
            
            <!-- Revenue data -->
            <div class="revenue-data">
              <div class="revenue-row">
                <span class="revenue-label">Hardware:</span>
                <span class="revenue-value">{{ formatRevenue(step.revenue.hardware) }} M€</span>
              </div>
              <div class="revenue-row">
                <span class="revenue-label">Software:</span>
                <span class="revenue-value">{{ formatRevenue(step.revenue.software) }} M€</span>
              </div>
              <div class="revenue-row software-percent">
                <span class="revenue-label">Software %:</span>
                <span class="revenue-value">{{ step.revenue.softwarePercent }}</span>
              </div>
              <div class="revenue-row total">
                <span class="revenue-label">Total:</span>
                <span class="revenue-value">{{ formatRevenue(step.revenue.total) }} M€</span>
              </div>
            </div>

            <!-- Gantt data if present -->
            <div v-if="step.ganttData" class="gantt-preview">
              <div class="gantt-bar" :style="{ width: step.ganttData.progress + '%' }"></div>
            </div>

            <!-- Specific badges -->
            <div v-if="step.badges" class="step-badges">
              <span 
                v-for="(badge, i) in step.badges" 
                :key="i"
                class="badge"
                :class="badge.type"
              >
                {{ badge.text }}
              </span>
            </div>

            <!-- Description -->
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'BusinessTimeline',
  data() {
    return {
      activeStep: 0,
      stepRefs: [],
      timelineSteps: [
        {
          year: 1,
          phase: '0/A',
          title: 'Module prototype',
          phaseType: 'prototype',
          description: 'Radio frequency prototype development and validation',
          revenue: {
            hardware: 0.00,
            software: 0.00,
            softwarePercent: '-%',
            total: 0.00
          },
          badges: [
            { text: 'Prototype', type: 'technical' }
          ],
          ganttData: {
            progress: 0
          }
        },
        {
          year: 2,
          phase: 'B',
          title: 'Integration',
          phaseType: 'integration',
          description: 'RF Prototype integration and testing',
          revenue: {
            hardware: 0.32,
            software: 0.07,
            softwarePercent: '17.95%',
            total: 0.39
          },
          badges: [
            { text: 'Integration', type: 'technical' }
          ],
          ganttData: {
            progress: 10
          }
        },
        {
          year: 3,
          phase: 'DAEMON',
          title: 'DAEMON Demonstrator',
          phaseType: 'demonstrator',
          description: 'DAEMON technological demonstrator development',
          revenue: {
            hardware: 2.24,
            software: 0.56,
            softwarePercent: '20.00%',
            total: 2.80
          },
          badges: [
            { text: 'Demonstrator', type: 'technical' },
            { text: 'T3/T5/T7', type: 'phase' }
          ],
          ganttData: {
            progress: 20
          }
        },
        {
          year: 4,
          phase: 'First institutional contracts',
          title: 'CNES, ESA, DGA',
          phaseType: 'institutional',
          description: 'First contracts with space agencies and institutions',
          revenue: {
            hardware: 3.20,
            software: 1.26,
            softwarePercent: '28.25%',
            total: 4.46
          },
          badges: [
            { text: 'Contracts', type: 'commercial' },
            { text: 'Institutional', type: 'client' }
          ],
          ganttData: {
            progress: 30
          }
        },
        {
          year: 5,
          phase: 'First NewSpace contracts',
          title: 'Entry into NewSpace market',
          phaseType: 'newspace',
          description: 'First contracts with NewSpace players (startups, constellations)',
          revenue: {
            hardware: 7.20,
            software: 2.84,
            softwarePercent: '28.25%',
            total: 10.00
          },
          badges: [
            { text: 'NewSpace', type: 'market' },
            { text: 'Commercial', type: 'commercial' }
          ],
          ganttData: {
            progress: 40
          }
        },
        {
          year: 6,
          phase: 'Commercial structuring',
          title: 'Sales team setup',
          phaseType: 'commercial',
          description: 'Sales force structuring and distribution channels',
          revenue: {
            hardware: 12.80,
            software: 5.64,
            softwarePercent: '30.57%',
            total: 18.44
          },
          badges: [
            { text: 'Team', type: 'structure' },
            { text: 'Strategy', type: 'business' }
          ],
          ganttData: {
            progress: 50
          }
        },
        {
          year: 7,
          phase: 'Acceleration',
          title: 'Growth phase',
          phaseType: 'growth',
          description: 'Rapid growth and market expansion',
          revenue: {
            hardware: 20.80,
            software: 10.20,
            softwarePercent: '32.87%',
            total: 31.00
          },
          badges: [
            { text: 'Growth', type: 'milestone' },
            { text: 'Scaling', type: 'business' }
          ],
          ganttData: {
            progress: 60
          }
        },
        {
          year: 8,
          phase: 'Consolidation',
          title: 'Market consolidation',
          phaseType: 'consolidation',
          description: 'Portfolio consolidation and optimization',
          revenue: {
            hardware: 32.00,
            software: 17.20,
            softwarePercent: '34.94%',
            total: 49.20
          },
          badges: [
            { text: 'Optimization', type: 'technical' }
          ],
          ganttData: {
            progress: 70
          }
        },
        {
          year: 9,
          phase: 'Beginning of mega-constellations',
          title: 'Mega-constellation market entry',
          phaseType: 'megaconstellation',
          description: 'First deployments for mega-constellation projects',
          revenue: {
            hardware: 48.00,
            software: 27.70,
            softwarePercent: '36.58%',
            total: 75.70
          },
          badges: [
            { text: 'Mega-constellations', type: 'market' },
            { text: 'Massive', type: 'milestone' }
          ],
          ganttData: {
            progress: 80
          }
        },
        {
          year: 10,
          phase: 'Massive deployment',
          title: 'Industrial scale',
          phaseType: 'deployment',
          description: 'Large-scale industrial deployment',
          revenue: {
            hardware: 72.00,
            software: 43.40,
            softwarePercent: '37.63%',
            total: 115.00
          },
          badges: [
            { text: 'Industrial', type: 'milestone' },
            { text: 'Scale-up', type: 'business' }
          ],
          ganttData: {
            progress: 90
          }
        },

        {
          year: 11,
          phase: 'European Leader',
          title: 'European market leadership',
          phaseType: 'leader',
          description: 'Establishment as European leader in space RF technology',
          revenue: {
            hardware: 160.00,
            software: 103.00,
            softwarePercent: '39.15%',
            total: 263.00
          },
          badges: [
            { text: 'Market Leader', type: 'milestone' },
            { text: 'European', type: 'business' }
          ],
          ganttData: {
            progress: 100
          }
        }
      ]
    }
  },
  mounted() {
    this.initScrollListener();
  },
  methods: {
    initScrollListener() {
      window.addEventListener('scroll', this.handleScroll);
      const container = this.$refs.timelineContainer;
      if (container) {
        container.addEventListener('scroll', this.handleContainerScroll);
      }
    },
    handleScroll() {
      this.updateActiveStep();
    },
    handleContainerScroll() {
      this.updateActiveStep();
    },
    updateActiveStep() {
      for (let i = 0; i < this.stepRefs.length; i++) {
        const step = this.stepRefs[i];
        if (step) {
          const rect = step.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
            this.activeStep = i;
            break;
          }
        }
      }
    },
    formatRevenue(value) {
      return value.toFixed(2);
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    const container = this.$refs.timelineContainer;
    if (container) {
      container.removeEventListener('scroll', this.handleContainerScroll);
    }
  }
}
</script>

<style scoped>
.business-timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.timeline-container {
  position: relative;
  min-height: 100vh;
}

.timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
  z-index: 1;
}

.timeline-steps {
  position: relative;
  z-index: 2;
}

.timeline-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 120px;
  opacity: 0.5;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.timeline-step.active {
  opacity: 1;
  transform: scale(1.02);
}

.step-marker {
  flex: 0 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.step-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #3b82f6;
  transition: all 0.3s ease;
  z-index: 3;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.timeline-step.active .step-dot {
  transform: scale(1.5);
  box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.3);
}

/* Phase type colors */
.step-dot.prototype { background: #10b981; }
.step-dot.integration { background: #f59e0b; }
.step-dot.demonstrator { background: #f59e0b; }
.step-dot.institutional { background: #8b5cf6; }
.step-dot.newspace { background: #ec4899; }
.step-dot.commercial { background: #ef4444; }
.step-dot.growth { background: #14b8a6; }
.step-dot.consolidation { background: #6366f1; }
.step-dot.megaconstellation { background: #a855f7; }
.step-dot.deployment { background: #06b6d4; }
.step-dot.leader { background: #f97316; } 

.step-year {
  margin-top: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #64748b;
}

.step-content {
  flex: 1;
  max-width: 450px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-left: 40px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.timeline-step.active .step-content {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: #3b82f6;
}

.step-header {
  margin-bottom: 16px;
}

.step-phase {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.step-title {
  margin: 8px 0 0 0;
  color: #0f172a;
  font-size: 1.4rem;
  font-weight: 700;
}

.revenue-data {
  margin: 16px 0;
  padding: 16px;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.revenue-row {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 0.95rem;
  border-bottom: 1px dashed #e2e8f0;
}

.revenue-row:last-child {
  border-bottom: none;
}

.revenue-row.total {
  margin-top: 6px;
  padding-top: 10px;
  border-top: 2px solid #cbd5e1;
  font-weight: 700;
  color: #0f172a;
}

.revenue-row.software-percent {
  color: #2563eb;
  font-weight: 500;
}

.revenue-label {
  color: #475569;
}

.revenue-value {
  font-family: monospace;
  font-weight: 600;
  color: #0f172a;
}

.gantt-preview {
  margin: 16px 0 12px 0;
}

.gantt-bar {
  height: 6px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.step-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
}

.badge {
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.badge.technical { background: #dbeafe; color: #1e40af; }
.badge.commercial { background: #dcfce7; color: #166534; }
.badge.market { background: #fef3c7; color: #92400e; }
.badge.client { background: #f3e8ff; color: #6b21a8; }
.badge.structure { background: #ffe4e6; color: #9f1239; }
.badge.business { background: #cffafe; color: #155e75; }
.badge.milestone { background: #f1f5f9; color: #334155; }
.badge.phase { background: #ede9fe; color: #5b21b6; }

.step-description {
  margin: 12px 0 0 0;
  color: #475569;
  line-height: 1.5;
  font-size: 0.95rem;
}

/* Alternating layout */
.timeline-step:nth-child(even) .step-content {
  margin-left: auto;
  margin-right: 40px;
  text-align: right;
}

.timeline-step:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-step:nth-child(even) .step-badges {
  justify-content: flex-end;
}

.timeline-step:nth-child(even) .revenue-row {
  flex-direction: row-reverse;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-line {
    left: 40px;
  }
  
  .timeline-step {
    flex-direction: column !important;
    align-items: flex-start;
    margin-left: 60px;
    margin-bottom: 80px;
  }
  
  .step-marker {
    position: absolute;
    left: -60px;
  }
  
  .step-content {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100%;
    text-align: left !important;
  }
  
  .timeline-step:nth-child(even) .step-badges {
    justify-content: flex-start;
  }
  
  .timeline-step:nth-child(even) .revenue-row {
    flex-direction: row !important;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>