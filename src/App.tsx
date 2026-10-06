import { useEffect, useRef } from "react";
import { MdHome } from "react-icons/md";
// import "./App.css";
import { Button } from "./components/ui/button";
import HomeSection from "./components/sections/home";
import { cn } from "cn";

export const RESUME_URL =
    "https://onedrive.live.com/personal/79782aecfec469b0/_layouts/15/download.aspx?UniqueId=6e04034d%2Dcf6d%2D476e%2Da77e%2D094f17334b6c";

function TopBar() {
    const topBar = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (topBar.current) {
                if (window.scrollY > window.innerHeight * 0.6) {
                    topBar.current.classList.replace("opacity-0", "opacity-100");
                    topBar.current.classList.replace("-translate-y-20", "translate-y-0");
                } else {
                    topBar.current.classList.replace("opacity-100", "opacity-0");
                    topBar.current.classList.replace("translate-y-0", "-translate-y-20");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            ref={topBar}
            className={cn("fixed top-0 z-1 w-full border-b bg-background/95 opacity-0 -translate-y-20 transition-all duration-700 px-3 md:px-5")}
        >
            <div className="container min-w-full h-14 grid grid-cols-3 items-center ">
                {/* 왼쪽: 로고 및 브랜드 이름 */}

                <div
                    className="flex items-center gap-1.5 md:gap-10 w-fit h-fit px-2 py-1 hover:text-primary/80"
                    onClick={() => {
                        window.scroll({ top: 0, behavior: "smooth" });
                    }}
                >
                    <MdHome size={28} />
                </div>

                {/* 가운데 타이틀 */}
                <div className="flex items-center justify-center gap-6">
                    <span
                        className="relative hidden md:block text-muted-foreground text-lg font-bold transition-all hover:text-foreground select-none before:absolute before:-inset-1 before:-inset-x-2 before:-skew-y-3 before:bg-pink-500 hover:drop-shadow-lg before:duration-300"
                        onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
                    >
                        <span className="inline-block relative -skew-y-3 text-white">SUNGHOON PARK</span>
                    </span>
                </div>

                {/* 오른쪽: 액션 버튼 및 유틸리티 */}
                <div className="flex items-center gap-1 justify-end">
                    <div className="relative group">
                        <Button
                            variant="secondary"
                            size="xs"
                            className="px-1"
                            onClick={() => window.open("#projects", "_self", "noopener,noreferrer")}
                        >
                            Projects
                        </Button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 z-10 pt-1 invisible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto transition-[opacity,visibility] duration-300 delay-300 group-hover:delay-0">
                            <ul className="w-fit bg-background border shadow-lg px-1 py-2 flex flex-col gap-y-1 text-xs text-center select-none">
                                {["TrackPost", "Postnet Plus", "BookCollector"].map((project) => (
                                    <li className="hover:text-shadow-lg hover:text-accent hover:bg-zinc-800 px-2 py-1 transition-all duration-200">
                                        {project}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Button
                        variant="secondary"
                        size="xs"
                        className="px-1"
                        onClick={() => window.open(RESUME_URL, "_self")}
                    >
                        Resume
                    </Button>
                    <Button size="xs" className="" onClick={() => window.open("mailto:pshsh0626@gmail.com", "")}>
                        Contact
                    </Button>
                </div>
            </div>
        </header>
    );
}

function ThumbnailSection() {
    return (
        <section id="projects" className="relative min-h-dvh w-full bg-gray-700 flex items-center justify-center">
            <h1 className="timeline-view animate-range-[entry_0%_cover_60%] animate-slide-in-left animate-slide-distance-[100%] absolute top-25 left-10 text-7xl sm:text-9xl text-primary-foreground select-none uppercase font-black tracking-tighter opacity-50">
                Projects
            </h1>
            <div className="flex flex-col w-4/5 items-center justify-center gap-4 py-10 select-none"></div>
        </section>
    );
}

function Project1() {
    return (
        <>
            <div className="min-h-dvh w-full bg-gray-800">
                <span>Project 1</span>
            </div>
        </>
    );
}

function App() {
    return (
        <>
            <TopBar />
            <HomeSection />
            <ThumbnailSection />
            <Project1 />
        </>
    );
}

export default App;
