import type { Engine } from "@tsparticles/engine";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "./index.css";
import { Toaster } from "./components/ui/toast.tsx";

async function initParticles(engine: Engine) {
    await loadSlim(engine);
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="system" storageKey="color-theme">
            <ParticlesProvider init={initParticles}>
                <App />
                <Toaster />
            </ParticlesProvider>
        </ThemeProvider>
    </StrictMode>,
);
