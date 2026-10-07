import type { Engine } from "@tsparticles/engine";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "./index.css";

async function initParticles(engine: Engine) {
    await loadSlim(engine);
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="color-theme">
            <ParticlesProvider init={initParticles}>
                <App />
            </ParticlesProvider>
        </ThemeProvider>
    </StrictMode>,
);
