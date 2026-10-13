import { cn } from "cn";
import { LuGithub } from "react-icons/lu";
import HomeSection from "./components/sections/home";
import ThumbnailSection from "./components/sections/thumanail";
import TopBar from "./components/sections/topbar";
import { Button } from "./components/ui/button";
import { ProjectDescription, ProjectLayout, ProjectMedia } from "./components/ui/project-layout";

export const RESUME_URL = "https://1drv.ms/b/c/79782aecfec469b0/IQBNAwRubc9uR6d-CU8XM0tsAXf7lsVLEMHi7_7jMKbZyrw";

function Project1() {
    return (
        <section
            id="TrackPost"
            className={cn(
                "h-svh w-full",
                "bg-[#DB9558]",
                "dark:bg-linear-to-b dark:from-[#1B1A55] dark:to-background",
                "flex justify-center items-center",
            )}
        >
            <ProjectLayout Title="TrackPost" SubTitle="Chrome Extension - TypeScript/React">
                <ProjectMedia src="/trackpost.png" />
                <ProjectDescription Title="Highlights">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>Built a Chrome extension that automates repetitive workflows for postal service agents.</li>
                        <li>Integrated directly with legacy web systems using content scripts and DOM manipulation.</li>
                        <li>
                            Implemented background polling and notification services for unread inquiries and replies.
                        </li>
                        <li>
                            Analyzed and reproduced authenticated HTTP requests, including CSRF token refresh flows.
                        </li>
                        <li>
                            Designed a maintainable architecture separating background services, content scripts, and
                            shared modules.
                        </li>
                        <li>Automated release and update distribution processes to simplify maintenance.</li>
                    </ul>
                    <a href="https://github.com/psh0626/TrackPostCrxJS/tree/main#--trackpost--" target="_blank">
                        <Button variant="outline" className={"w-full"}>
                            <LuGithub className="size-5" />
                            Explore More on GitHub
                        </Button>
                    </a>
                </ProjectDescription>
                <ProjectMedia src="/trackpost.png" />
                <ProjectDescription Title="Tech Stack">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>
                            <strong>Frontend:</strong> React, TypeScript, CSS
                        </li>
                        <li>
                            <strong>Browser Extension:</strong> Chrome Extension API (Manifest V3), Service Worker,
                            Content Scripts
                        </li>
                        <li>
                            <strong>Web Integration:</strong> DOM Manipulation, AJAX/HTTP Requests, CSRF Token Handling
                        </li>
                        <li>
                            <strong>Storage & State:</strong> Chrome Storage API
                        </li>
                        <li>
                            <strong>Automation:</strong> Form Autofill, Browser Notifications, Page Injection
                        </li>
                        <li>
                            <strong>Build & Deployment:</strong> Node.js, npm, GitHub Releases, Automated Update
                            Pipeline
                        </li>
                        <li>
                            <strong>Tools:</strong> Git, GitHub
                        </li>
                    </ul>
                </ProjectDescription>
                <ProjectMedia
                    src={[
                        "https://github.com/user-attachments/assets/e6d02ac7-7d31-46fc-98d5-04eb1735c63a",
                        "https://github.com/user-attachments/assets/af2d252f-f803-4d5d-9936-251ad7c498ec",
                        "https://github.com/user-attachments/assets/b9c96e91-16b8-466d-8324-f6d664302290",
                        "https://github.com/user-attachments/assets/8cb8bb70-8d54-4da7-93b1-ac6479e852f5",
                    ]}
                />
                <ProjectDescription Title="Popup UI">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>
                            <strong>Real-time Message Monitoring</strong> - Monitor unread replies, inquiries, and
                            notifications from a unified popup interface.
                        </li>
                        <li>
                            <strong>Korea Post Lookup</strong> - Search tracking number for shipping details instantly
                            in a side panel.
                        </li>
                    </ul>
                </ProjectDescription>
                <ProjectMedia src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uscFfppLmTJva0TEX92zdhSlDaI6_6ORGvYLCCuzcf8ucQ3q6mtrt6Rg8wtWE7SeP-uk&s" />
                <ProjectDescription Title="Form autofill">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>
                            <strong>Investigation Request Automation</strong> - Automate field completion and SDR
                            exchange-rate calculations for international postal investigations.
                        </li>
                    </ul>
                </ProjectDescription>
                <ProjectMedia src="/trackpost.png" />
                <ProjectDescription Title="Productivity Features">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>
                            <strong>Enhancements for GCSS &amp; iCare</strong> - Added input-assistance tools, Personal
                            Remarks support, and editor-tracking features.
                        </li>
                        <li>
                            <strong>Mail Productivity Features</strong> - Prevent automatic logouts and display unread
                            email counts directly within the browser.
                        </li>
                    </ul>
                </ProjectDescription>
                <ProjectMedia
                    src={[
                        "https://github.com/user-attachments/assets/bad6941f-f444-47d6-ad58-0d18d4b960ad",
                        "https://github.com/user-attachments/assets/1c046255-725a-4cac-9ab0-497804060641",
                        "https://github.com/user-attachments/assets/c846d4b1-88ee-4f02-84fe-5e5fa5225d9d",
                        "https://github.com/user-attachments/assets/6be6e7b2-1852-420c-9d7d-142bc827c40d",
                    ]}
                />
                <ProjectDescription Title="Settings Page">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>
                            <strong>Centralized Configuration</strong> - Manage notifications, remarks, and
                            exchange-rate settings from a dedicated settings page.
                        </li>
                    </ul>
                </ProjectDescription>
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
