// import "./App.css";
import { useState, type MouseEventHandler } from "react";
import HomeSection from "./components/sections/home";
import TopBar from "./components/sections/topbar";
import { useMediaQuery } from "./lib/use-media-query";
import { cn } from "./lib/utils";
import "/trackpost.png";

export const RESUME_URL = "https://1drv.ms/b/c/79782aecfec469b0/IQBNAwRubc9uR6d-CU8XM0tsAXf7lsVLEMHi7_7jMKbZyrw";

function ThumbnailCard({
    frontTitle,
    frontDescription,
    backTitle,
    backDescription,
    imageUrl,
    className,
    onClick,
}: {
    frontTitle: string;
    frontDescription: string;
    backTitle?: string;
    backDescription?: string;
    imageUrl: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}) {
    const [isTouched, setIsTouched] = useState(false);
    const isMobileDevice = useMediaQuery("(pointer: coarse)");
    const clickFunc: MouseEventHandler<HTMLDivElement> = (event) => {
        if (onClick) {
            if (isMobileDevice) {
                if (isTouched) onClick(event);
            } else {
                onClick(event);
            }
        }
    };
    return (
        <div
            className={cn("group relative h-28 sm:h-72 w-full perspective-midrange", className)}
            onClick={clickFunc}
            onTouchStart={() => setIsTouched(true)}
            onTouchEnd={() => setTimeout(() => setIsTouched(false), 2000)}
        >
            <div
                className={cn(
                    "relative h-full w-full",
                    "transition-transform duration-700 transform-3d group-hover:-rotate-y-180 group-hover:scale-110",
                    isTouched ? "-rotate-y-180 scale-110" : "",
                )}
            >
                {/* Front */}
                <div className="absolute inset-0 flex flex-row sm:flex-col items-center justify-start sm:justify-center overflow-hidden bg-gray-200 p-4 shadow-md dark:bg-gray-800 backface-hidden">
                    <img src={imageUrl} alt={frontTitle} className="my-4 sm:mt-0 mr-4 sm:mr-0 w-20" />
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left sm:text-center">
                            {frontTitle}
                        </h3>
                        <p className="text-left sm:text-center text-gray-600 dark:text-gray-400">{frontDescription}</p>
                    </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-start sm:items-center justify-center bg-gray-200 p-4 shadow-md dark:bg-gray-800 backface-hidden -rotate-y-180">
                    <div className="inline text-justify sm:flex sm:flex-wrap">
                        <span className="inline text-lg font-semibold text-gray-800 dark:text-gray-200 mr-1">
                            {backTitle || frontTitle}
                        </span>
                        <p className="inline w-full overflow-clip text-left text-gray-600 dark:text-gray-400">
                            {backDescription || frontDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ThumbnailSection() {
    return (
        <section
            id="projects"
            className={cn(
                "relative min-h-dvh w-full",
                "flex items-center justify-center",
                "bg-linear-to-b from-background to-[#DB9558] dark:to-[#1B1A55]",
            )}
        >
            <h1 className="timeline-view animate-range-[entry_0%_contain_30%] animate-slide-in-left animate-slide-distance-[100%] absolute top-15 sm:top-20 left-4 sm:left-10 text-7xl sm:text-9xl text-foreground/80 select-none uppercase font-black tracking-tighter opacity-100">
                Projects
            </h1>
            <div
                className={cn(
                    "w-4/5 h-2/5",
                    "flex flex-col sm:flex-row items-center justify-center",
                    "gap-4 py-10",
                    "select-none z-1",
                )}
            >
                <ThumbnailCard
                    className="timeline-view animate-slide-in-bottom animate-slide-distance-[200%] animate-range-[entry_30%_cover_40%]"
                    frontTitle="TrackPost"
                    frontDescription="Chrome Extension TypeScript/React"
                    imageUrl="/trackpost.png"
                    backDescription="extracts and analyzes postal data, populates required forms, and enhances workflow efficiency through additional utility functions."
                    onClick={() => window.open("#TrackPost", "_self")}
                />
                <ThumbnailCard
                    className="timeline-view animate-slide-in-bottom animate-slide-distance-[100%] animate-range-[entry_35%_cover_40%]"
                    frontTitle="Postnet Plus"
                    frontDescription="Chrome Extension Javascript"
                    imageUrl="/postnet-plus.png"
                    backDescription="enhances the legacy Postnet system by automating repetitive tasks and adding streamlined productivity features."
                    onClick={() => window.open("#PostnetPlus", "_self")}
                />
                <ThumbnailCard
                    className="timeline-view animate-slide-in-bottom animate-slide-distance-[100%] animate-range-[entry_0%_cover_30%]"
                    frontTitle="BookCollector"
                    frontDescription="VBA macro PowerQuery M"
                    imageUrl="/excel.png"
                    backDescription="consolidates and validates daily report data, transforming hours of manual work into accurate, audit‑ready outputs."
                    onClick={() => window.open("#BookCollector", "_self")}
                />
            </div>
        </section>
    );
}

function Project1() {
    return (
        <>
            <section id="TrackPost" className="min-h-dvh w-full bg-[#DB9558] dark:bg-[#1B1A55]">
                <span>Project 1</span>
            </section>
        </>
    );
}

function Project2() {
    return (
        <section id="PostnetPlus" className="min-h-dvh w-full bg-[#97A87A] dark:bg-gray-900">
            <span>Project 2</span>
        </section>
    );
}

function Project3() {
    return (
        <section id="BookCollector" className="min-h-dvh w-full bg-[#A8BBA3] dark:bg-[#A8BBA3]">
            <span>Project 3</span>
        </section>
    );
}
function App() {
    return (
        <>
            <TopBar />
            <HomeSection />
            <ThumbnailSection />
            <Project1 />
            <Project2 />
            <Project3 />
        </>
    );
}

export default App;
