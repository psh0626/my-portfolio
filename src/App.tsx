import { useEffect } from "react";
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Footer from "./components/sections/footer";
import HomeSection from "./components/sections/home";
import BookCollector from "./components/sections/projects/bookcollector";
import PostnetPlus from "./components/sections/projects/postnet-plus";
import TrackPost from "./components/sections/projects/trackpost";
import ThumbnailSection from "./components/sections/thumanail";
import TopBar from "./components/sections/topbar";
import { Observer } from "tailwindcss-intersect/observer";


export const RESUME_URL =
    "https://drive.usercontent.google.com/download?id=1F0JOyF2b1uDi7pZkyt6Dii0e5eWIp9jk&export=download";

function App() {
    useEffect(() => {
        Observer.start();
        
        if (typeof window === "undefined" || typeof navigator === "undefined") {
            return;
        }

        const isIOSAgent = (userAgent: string) => /iphone|ipad|ipod/i.test(userAgent);

        const isKakaoTalkAgent = (userAgent: string) => /kakaotalk/i.test(userAgent);

        const closeKakaoTalkBrowser = (userAgent: string) => {
            if (isIOSAgent(userAgent)) {
                window.location.href = "kakaoweb://closeBrowser";
                return;
            }

            window.location.href = "kakaotalk://inappbrowser/close";
            return;
        };

        const openKakaoTalkOpenExernalBrowser = (url: string) => {
            window.location.href = "kakaotalk://web/openExternal?url=" + encodeURIComponent(url);
        };

        const userAgent = navigator.userAgent.toLowerCase();
        const currentUrl = window.location.href;

        if (isKakaoTalkAgent(userAgent)) {
            openKakaoTalkOpenExernalBrowser(currentUrl);
            setTimeout(() => {
                closeKakaoTalkBrowser(userAgent);
            }, 1);
            return;
        }
    }, []);

    return (
        <>
            <TopBar />
            <HomeSection />
            <About />
            <ThumbnailSection />
            <TrackPost />
            <PostnetPlus />
            <BookCollector />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
