import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

async function initParticles(engine: Engine) {
  await loadSlim(engine);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParticlesProvider init={initParticles}>
      <App />
    </ParticlesProvider>
  </StrictMode>,
)
