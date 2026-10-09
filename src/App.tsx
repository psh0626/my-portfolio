import { cn } from "cn";
import HomeSection from "./components/sections/home";
import ThumbnailSection from "./components/sections/thumanail";
import TopBar from "./components/sections/topbar";
import { ProjectDescription, ProjectLayout, ProjectMedia } from "./components/ui/project-layout";

export const RESUME_URL = "https://1drv.ms/b/c/79782aecfec469b0/IQBNAwRubc9uR6d-CU8XM0tsAXf7lsVLEMHi7_7jMKbZyrw";

function Project1() {
    return (
        <section
            id="TrackPost"
            className={cn(
                "h-dvh w-full",
                "bg-[#DB9558]",
                "dark:bg-linear-to-b dark:from-[#1B1A55] dark:to-background",
                "flex justify-center items-center",
            )}
        >
            <ProjectLayout Title="TrackPost" SubTitle="Chrome Extension - TypeScript/React">
                <ProjectMedia src="https://github.com/user-attachments/assets/e6d02ac7-7d31-46fc-98d5-04eb1735c63a" />
                <ProjectDescription>
                    TrackPost is a Chrome extension that streamlines cross-border mail tracking and inquiry systems for
                    postal agents within the Universal Postal Union (UPU) and the Kahala Posts Group (KPG). <br />
                    Postal agents rely on platforms like GCSS and iCare to handle inter-agency communications including
                    item location tracking, address alteration requests, and status updates.
                </ProjectDescription>
                <ProjectMedia src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90" />
                <ProjectDescription></ProjectDescription>
                <ProjectMedia src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uscFfppLmTJva0TEX92zdhSlDaI6_6ORGvYLCCuzcf8ucQ3q6mtrt6Rg8wtWE7SeP-uk&s" />
                <ProjectDescription></ProjectDescription>
            </ProjectLayout>
        </section>
    );
}

function Project2() {
    return (
        <section
            id="PostnetPlus"
            className={cn("h-dvh w-full", "bg-[#DB9558] dark:bg-background", "flex justify-center items-center")}
        >
            <ProjectLayout Title="PostnetPlus" SubTitle="Chrome Extension - Javascript">
                <ProjectMedia src="https://github.com/user-attachments/assets/e6d02ac7-7d31-46fc-98d5-04eb1735c63a" />
                <ProjectDescription>
                    TrackPost is a Chrome extension that streamlines cross-border mail tracking and inquiry systems for
                    postal agents within the Universal Postal Union (UPU) and the Kahala Posts Group (KPG). <br />
                    Postal agents rely on platforms like GCSS and iCare to handle inter-agency communications including
                    item location tracking, address alteration requests, and status updates.
                </ProjectDescription>
                <ProjectMedia src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90" />
                <ProjectDescription></ProjectDescription>
                <ProjectMedia src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uscFfppLmTJva0TEX92zdhSlDaI6_6ORGvYLCCuzcf8ucQ3q6mtrt6Rg8wtWE7SeP-uk&s" />
                <ProjectDescription></ProjectDescription>
            </ProjectLayout>
        </section>
    );
}

function Project3() {
    return (
        <section
            id="BookCollector"
            className={cn("h-dvh w-full", "bg-[#DB9558] dark:bg-background", "flex justify-center items-center")}
        >
            <ProjectLayout Title="BookCollector" SubTitle="VBA macro PowerQuery M">
                <ProjectMedia src="https://github.com/user-attachments/assets/e6d02ac7-7d31-46fc-98d5-04eb1735c63a" />
                <ProjectDescription>
                    TrackPost is a Chrome extension that streamlines cross-border mail tracking and inquiry systems for
                    postal agents within the Universal Postal Union (UPU) and the Kahala Posts Group (KPG). <br />
                    Postal agents rely on platforms like GCSS and iCare to handle inter-agency communications including
                    item location tracking, address alteration requests, and status updates.
                </ProjectDescription>
                <ProjectMedia src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90" />
                <ProjectDescription></ProjectDescription>
                <ProjectMedia src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uscFfppLmTJva0TEX92zdhSlDaI6_6ORGvYLCCuzcf8ucQ3q6mtrt6Rg8wtWE7SeP-uk&s" />
                <ProjectDescription></ProjectDescription>
            </ProjectLayout>
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
