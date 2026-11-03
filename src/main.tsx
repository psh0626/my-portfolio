import type { Engine } from "@tsparticles/engine";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Resume from "./components/sections/resume.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toaster } from "./components/ui/toast.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import "./index.css";

async function initParticles(engine: Engine) {
    await loadSlim(engine);
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider defaultTheme="system" storageKey="color-theme">
                <ParticlesProvider init={initParticles}>
                    <TooltipProvider>
                        <Routes>
                            <Route index element={<App />} />
                            <Route path="resume" element={<Resume />} />
                        </Routes>
                        <Toaster />
                    </TooltipProvider>
                </ParticlesProvider>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
);
