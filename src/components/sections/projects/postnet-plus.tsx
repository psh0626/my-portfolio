import { Button } from "@/components/ui/button";
import { ProjectDescription, ProjectLayout, ProjectMedia } from "@/components/ui/project-layout";
import { cn } from "cn";
import { LuGithub } from "react-icons/lu";

export default function PostnetPlus() {
    return (
        <section
            id="PostnetPlus"
            className={cn("h-svh w-full", "bg-[#DB9558] dark:bg-background", "flex justify-center items-center")}
        >
            <ProjectLayout title="PostnetPlus" subTitle="Chrome Extension - Javascript">
                <ProjectMedia src="/PostnetPlus.webm" shrink />
                <ProjectDescription title="Project Overview">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>
                            Built a Chrome extension that automates repetitive tasks within a legacy postal
                            investigation and claims management system.
                        </li>
                        <li>
                            integrated directly with a proprietary framework and streamlines workflows that previously
                            required extensive manual input.
                        </li>
                        <li>
                            Reverse-engineered a proprietary exBuilder-based system without source code access to
                            interact with internal runtime objects.
                        </li>
                    </ul>

                    <a href="https://github.com/psh0626/PostnetPlus#--postnet-plus--" target="_blank">
                        <Button variant="outline" className={"w-full"}>
                            <LuGithub className="size-5" />
                            Explore More on GitHub
                        </Button>
                    </a>
                </ProjectDescription>
                <ProjectMedia src="/postnet-plus.png" shrink />
                <ProjectDescription title="Tech Stack">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>JavaScript (ES5 / ES6+)</li>
                        <li>Chrome Extension API (Manifest V3)</li>
                        <li>Service Worker</li>
                        <li>Content Scripts</li>
                        <li>DOM Manipulation</li>
                        <li>AJAX / HTTP Requests</li>
                        <li>Local Storage</li>
                        <li>HTML / CSS</li>
                        <li>Reverse Engineering (exBuilder 6)</li>
                        <li>Legacy System Integration</li>
                    </ul>
                </ProjectDescription>
                <ProjectMedia src="/postnet-plus.png" shrink />
                <ProjectDescription title="Technical Challenges">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>
                            Worked with a closed-source government system where no API documentation or source code was
                            available.
                        </li>
                        <li>
                            Bypassed limitations of traditional DOM automation by accessing internal framework objects
                            exposed by the runtime environment.
                        </li>
                        <li>
                            Maintained compatibility with legacy Internet Explorer-based source code while introducing
                            Chromium-based extension features.
                        </li>
                    </ul>
                </ProjectDescription>
                <ProjectMedia
                    src={[
                        "https://github.com/user-attachments/assets/1b41ff87-ef76-4e7b-8a81-e9d9b34170b2",
                        "https://github.com/user-attachments/assets/c370aef0-748d-4ba7-a34a-77cbec06456a",
                        "https://github.com/user-attachments/assets/f5dd44cf-d328-420b-b6e2-938e8f73e8bd",
                        "https://github.com/user-attachments/assets/17295f9a-5268-4a2c-b04b-a5ce94cc9765",
                        "https://github.com/user-attachments/assets/5dc8dc92-e9f3-4b14-ab02-124c16f70d8d",
                    ]}
                />
                <ProjectDescription title="Features">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>
                            Implemented workflow automation for claims, inquiries, complaint handling, and tracking
                            operations.
                        </li>
                        <li>
                            Built background notification services for pending approvals, compensation registrations,
                            and unprocessed cases.
                        </li>
                        <li>
                            Designed configurable settings, search-bars, alert elements, helper labels, and
                            task-launching interfaces to improve user productivity.
                        </li>
                    </ul>
                </ProjectDescription>
            </ProjectLayout>
        </section>
    );
}
