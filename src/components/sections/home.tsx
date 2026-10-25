import { RESUME_URL } from "@/App";
import { cn } from "@/lib/utils";
import type { ISourceOptions } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { useMemo, useState } from "react";
import { LuGithub, LuLinkedin, LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../theme-provider";
import { Button } from "../ui/button";

const SET_PARTICLE_COUNT = 120;

export default function HomeSection() {
    const { theme, setTheme } = useTheme();
    const [transitionTheme, setTransitionTheme] = useState<"dark" | "light" | null>(null);

    const isDark =
        theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const computedFG = isDark ? "#FCF9EA" : "#070F2B";

    const particleOptions = useMemo(
        () =>
            ({
                fullScreen: { enable: false },
                background: {
                    color: "var(--background)",
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
                        color: computedFG,
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
                        color: computedFG,
                        opacity: 0.8,
                        width: 1,
                        triangles: {
                            enable: true,
                            color: computedFG,
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
        [computedFG],
    );

    const responsiveOptions = useMemo(
        () => ({
            ...particleOptions,
            // detectRetina: window.devicePixelRatio <= 2,
            fpsLimit: window.innerWidth < 768 ? 60 : 120,
        }),
        [particleOptions],
    );

    const toggleTheme = () => {
        if (transitionTheme) return;
        const change = theme === "dark" ? "light" : "dark";
        setTransitionTheme(change);
        setTimeout(() => setTheme(change), 300);
    };

    const finishThemeTransition = () => {
        if (!transitionTheme) return;
        // setTheme(transitionTheme);
        setTransitionTheme(null);
    };

    return (
        <section id="Home" className="h-svh w-full bg-background">
            {transitionTheme && (
                <div
                    aria-hidden="true"
                    className={cn(
                        "fixed inset-0 pointer-events-none",
                        transitionTheme === "dark" ? "bg-dark-bg" : "bg-light-bg",
                        "theme-swipe",
                        "transition-colors",
                    )}
                    onAnimationEnd={finishThemeTransition}
                />
            )}
            <Button
                variant="outline"
                onClick={toggleTheme}
                disabled={transitionTheme !== null}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                className={cn("absolute top-5 right-5 z-1")}
            >
                {theme === "dark" ? <LuSun /> : <LuMoon />}
            </Button>
            <Particles id="bg-particles" options={responsiveOptions} className="w-full h-svh" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-center select-none transition-all intersect:animate-slide-in-bottom">
                    Sunghoon Park
                </h1>
                <label className="text-2xl font-semibold text-center select-none transition intersect:animate-slide-up-fade intersect:animate-delay-400">
                    a Web Developer
                </label>
                <div className="flex gap-2 mt-6">
                    <Button
                        variant="outline"
                        size="lg"
                        className="px-4 py-1"
                        onClick={() => window.open("#Projects", "_self", "noopener,noreferrer")}
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
                    <Button
                        variant="default"
                        size="lg"
                        className="px-4 py-1"
                        onClick={() => window.open("#Contact", "_self")}
                    >
                        Contact
                    </Button>
                </div>
                <div className="flex gap-1 mt-4">
                    <a href="https://github.com/psh0626" target="_blank" rel="noopener noreferrer">
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
