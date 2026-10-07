// import "./App.css";
import HomeSection from "./components/sections/home";
import TopBar from "./components/sections/topbar";
import { cn } from "./lib/utils";

export const RESUME_URL = "https://1drv.ms/b/c/79782aecfec469b0/IQBNAwRubc9uR6d-CU8XM0tsAXf7lsVLEMHi7_7jMKbZyrw";

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
            <h1 className="timeline-view animate-range-[entry_0%_cover_60%] animate-slide-in-left animate-slide-distance-[100%] absolute top-25 left-10 text-7xl sm:text-9xl text-foreground select-none uppercase font-black tracking-tighter opacity-100">
                Projects
            </h1>
            <div className="flex flex-col w-4/5 items-center justify-center gap-4 py-10 select-none"></div>
        </section>
    );
}

function Project1() {
    return (
        <>
            <div className="min-h-dvh w-full bg-[#DB9558] dark:bg-[#1B1A55]">
                <span>Project 1</span>
            </div>
        </>
    );
}

function Project2() {
    return (
        <div className="min-h-dvh w-full bg-[#97A87A] dark:bg-[#535C91]">
            <span>Project 2</span>
        </div>
    );
}

function Project3() {
    return (
        <div className="min-h-dvh w-full bg-[#A8BBA3] dark:bg-[#A8BBA3]">
            <span>Project 3</span>
        </div>
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
