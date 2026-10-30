import { ProjectDescription, ProjectLayout, ProjectMedia } from "@/components/ui/project-layout";
import { cn } from "cn";
export default function BookCollector() {
    return (
        <section
            id="BookCollector"
            className={cn("h-svh w-full", "bg-[#DB9558] dark:bg-background", "flex justify-center items-center")}
        >
            <ProjectLayout title="BookCollector" subTitle="VBA macro PowerQuery M">
                <ProjectMedia src="/BookCollector.webm" shrink />
                <ProjectDescription title="Project Overview">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>
                            Built an Excel-based ETL and reporting platform with VBA and Power Query, processing 3+
                            years of data from 40–50 workbooks.
                        </li>
                        <li>Reduced report generation time from one day to under a minute</li>
                        <li>Support centralized automatic updates through a shared network distribution system.</li>
                    </ul>
                </ProjectDescription>
                <ProjectMedia src="/excel.png" shrink />
                <ProjectDescription title="Tech Stack">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>Microsoft Excel</li>
                        <li>VBA (Visual Basic for Applications)</li>
                        <li>Power Query M</li>
                        <li>ETL Automation</li>
                        <li>Data Validation & Transformation</li>
                        <li>Network File Sharing</li>
                        <li>Automatic Update Distribution</li>
                    </ul>
                </ProjectDescription>
                <ProjectMedia src="/excel.png" shrink />
                <ProjectDescription title="Technical Challenges">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>
                            Processed and standardized data collected across multiple years and files with inconsistent
                            formats and structures.
                        </li>
                        <li>
                            Designed a maintainable VBA architecture that could be deployed and updated across multiple
                            workstations from a centralized location.
                        </li>
                        <li>
                            Implemented version management and automated distribution mechanisms using a shared network
                            drive to eliminate manual update procedures.
                        </li>
                    </ul>
                </ProjectDescription>
                <ProjectMedia src="/excel.png" shrink />
                <ProjectDescription title="Features">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>
                            Designed and developed an automated reporting pipeline that consolidates 40–50 Excel
                            workbooks spanning approximately 3+ years of operational data.
                        </li>
                        <li>
                            Built reusable Power Query transformation workflows to clean, normalize, and merge
                            heterogeneous datasets into a unified reporting structure.
                        </li>
                        <li>
                            Implemented VBA-based automation for report generation, data processing, and user
                            interactions.
                        </li>
                        <li>
                            Developed data validation and integrity checks to identify missing, duplicated, or
                            inconsistent records before report generation.
                        </li>
                        <li>
                            Created an automatic update system that distributes new script versions through a shared
                            network folder, enabling users to receive updates without manual installation.
                        </li>
                    </ul>
                </ProjectDescription>
                <ProjectMedia src="/excel.png" shrink />
                <ProjectDescription title="Business Impact">
                    <ul className="list-[square] list-insde pl-6 mb-3 text-left">
                        <li>Reduced report preparation time from one day to less than one minute.</li>
                        <li>Improved reporting accuracy through automated validation and data quality checks.</li>
                        <li>
                            Provided reliable, audit-ready reports used for management and executive decision-making.
                        </li>
                        <li>Eliminated manual deployment efforts by introducing centralized update management.</li>
                    </ul>
                </ProjectDescription>
            </ProjectLayout>
        </section>
    );
}
