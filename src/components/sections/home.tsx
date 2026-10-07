import { RESUME_URL } from "@/App";
import { cn } from "@/lib/utils";
import type { ISourceOptions } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { useMemo } from "react";
import { LuGithub, LuLinkedin, LuSun } from "react-icons/lu";
import { useTheme } from "../theme-provider";
import { Button } from "../ui/button";

const SET_PARTICLE_COUNT = 120;
export default function HomeSection() {
    const { theme, setTheme } = useTheme();

    const particleOptions = useMemo(
        () =>
            ({
                fullScreen: { enable: false },
                background: {
                    color: "hsl(var(--background))",
                    size: "100% 100%",
                },
                particles: {
                    number: {
                        value: SET_PARTICLE_COUNT,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    paint: {
                        color: theme === "dark" ? "#ffffff" : "#333333",
                    },
                    shape: {
                        type: "triangle",
                    },
                    opacity: {
                        value: 0.8,
                    },
                    size: {
                        value: 2,
                        random: true,
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: theme === "dark" ? "#ffffff" : "#333333",
                        opacity: 0.8,
                        width: 1,
                        triangles: {
                            enable: true,
                            color: theme === "dark" ? "#ffffff" : "#333333",
                            opacity: 0.1,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: { distance: 300, maxSpeed: 1 },
                        push: {
                            quantity: 4,
                            particles: {
                                life: {
                                    count: 1,
                                    delay: { value: 0.1 },
                                    duration: { value: 3 },
                                },
                            },
                        },
                    },
                },
                retina_detect: true,
            }) as ISourceOptions,
        [theme],
    );

    const responsiveOptions = useMemo(
        () => ({
            ...particleOptions,
            detectRetina: window.devicePixelRatio <= 2,
            fpsLimit: window.innerWidth < 768 ? 60 : 120,
        }),
        [particleOptions],
    );

    return (
        <section id="home" className="min-h-dvh w-full bg-background">
            <Button
                variant="outline"
                onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                }}
                className={cn("absolute top-5 right-5 z-10")}
            >
                <LuSun />
            </Button>
            <Particles id="bg-particles" options={responsiveOptions} className="w-full h-dvh" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-center select-none">Sunghoon Park</h1>
                <label className="text-2xl font-semibold text-center select-none">a Web Developer</label>
                <div className="flex gap-2 mt-6">
                    <Button
                        variant="outline"
                        size="lg"
                        className="px-4 py-1"
                        onClick={() => window.open("#projects", "_self", "noopener,noreferrer")}
                    >
                        Projects
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="px-4 py-1"
                        onClick={() => window.open(RESUME_URL, "_blank")}
                    >
                        Resume
                    </Button>
                    <a href="mailto:pshsh0626@gmail.com">
                        <Button variant="default" size="lg" className="px-4 py-1">
                            Contact
                        </Button>
                    </a>
                </div>
                <div className="flex gap-1 mt-4">
                    <a href="https://github.com/pshsh0626" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost">
                            <LuGithub />
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/psh0626" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost">
                            <LuLinkedin />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
