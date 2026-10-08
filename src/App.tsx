// import "./App.css";
import HomeSection from "./components/sections/home";
import ThumbnailSection from "./components/sections/thumanail";
import TopBar from "./components/sections/topbar";

export const RESUME_URL = "https://1drv.ms/b/c/79782aecfec469b0/IQBNAwRubc9uR6d-CU8XM0tsAXf7lsVLEMHi7_7jMKbZyrw";

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
