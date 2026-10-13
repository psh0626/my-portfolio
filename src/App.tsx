import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Footer from "./components/sections/footer";
import HomeSection from "./components/sections/home";
import BookCollector from "./components/sections/projects/bookcollector";
import PostnetPlus from "./components/sections/projects/postnet-plus";
import TrackPost from "./components/sections/projects/trackpost";
import ThumbnailSection from "./components/sections/thumanail";
import TopBar from "./components/sections/topbar";

export const RESUME_URL = "https://1drv.ms/b/c/79782aecfec469b0/IQBNAwRubc9uR6d-CU8XM0tsAXf7lsVLEMHi7_7jMKbZyrw";

function App() {
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
