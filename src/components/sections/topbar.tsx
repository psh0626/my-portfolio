import { RESUME_URL } from "@/App";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

export default function TopBar() {
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
            className={cn([
                "fixed top-0 z-10",
                "w-full border-b",
                "bg-background/90",
                "opacity-0 -translate-y-20 transition-all duration-700",
                "px-3 md:px-5",
            ])}
        >
            <div className="container min-w-full h-14 grid grid-cols-3 items-center ">
                {/* 왼쪽: 로고 및 브랜드 이름 */}

                <div
                    className="flex items-center gap-1.5 md:gap-10 w-fit h-fit px-2 py-1 hover:text-primary/80"
                    onClick={() => {
                        window.open("#home", "_self");
                    }}
                >
                    <span
                        className={cn(
                            "relative block",
                            "text-muted-foreground text-md font-bold  select-none text-nowrap",
                            "transition-all hover:text-foreground",
                            "hover:animate-pulse hover:animate-iteration-count-infinite",
                            "hover:shadow-[0_0_22px] hover:shadow-pink-500",
                            "before:absolute before:-inset-1 before:-inset-x-2 before:-skew-y-3 before:bg-pink-500 before:duration-300",
                        )}
                    >
                        <span className="inline-block sm:hidden relative -skew-y-3 text-white">SP</span>
                        <span className="hidden sm:inline-block relative -skew-y-3 text-white">SUNGHOON PARK</span>
                    </span>
                </div>

                {/* 가운데 타이틀 */}
                <div className="flex items-center justify-center gap-6"></div>

                {/* 오른쪽: 액션 버튼 및 유틸리티 */}
                <div className="h-full flex items-center gap-1 justify-end">
                    <div className="relative group">
                        <Button
                            variant="secondary"
                            size="xs"
                            className="px-2 bg-background/10"
                            onClick={() => window.open("#projects", "_self")}
                        >
                            Projects
                        </Button>
                        <div
                            className={cn(
                                "absolute top-full left-1/2 -translate-x-1/2 z-10 pt-1",
                                "invisible opacity-0 pointer-events-none",
                                "group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto",
                                "transition-[opacity,visibility] duration-300 delay-300 group-hover:delay-0",
                            )}
                        >
                            <ul className="w-fit bg-background border shadow-lg px-1 py-2 flex flex-col gap-y-1 text-xs text-center select-none">
                                {["TrackPost", "Postnet Plus", "BookCollector"].map((project, idx) => (
                                    <li
                                        key={idx}
                                        className={cn(
                                            "hover:text-shadow-lg hover:text-accent-foreground hover:bg-accent",
                                            "px-2 py-1 transition-all duration-200",
                                        )}
                                    >
                                        {project}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Button
                        variant="secondary"
                        size="xs"
                        className="px-2 bg-background/10"
                        onClick={() => window.open(RESUME_URL, "_blank")}
                    >
                        Resume
                    </Button>
                    <a href="mailto:pshsh0626@gmail.com">
                        <Button variant="default" size="xs" className="">
                            Contact
                        </Button>
                    </a>
                </div>
            </div>
        </header>
    );
}
