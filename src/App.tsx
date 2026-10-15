import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Footer from "./components/sections/footer";
import HomeSection from "./components/sections/home";
import BookCollector from "./components/sections/projects/bookcollector";
import PostnetPlus from "./components/sections/projects/postnet-plus";
import TrackPost from "./components/sections/projects/trackpost";
import ThumbnailSection from "./components/sections/thumanail";
import TopBar from "./components/sections/topbar";

export const RESUME_URL = "https://drive.usercontent.google.com/download?id=1F0JOyF2b1uDi7pZkyt6Dii0e5eWIp9jk&export=download";

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
