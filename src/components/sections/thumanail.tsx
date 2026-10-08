import { cn } from "cn";
import { ThumbnailCard } from "../ui/thumbnail-card";

export default function ThumbnailSection() {
    return (
        <section
            id="projects"
            className={cn(
                "relative min-h-dvh w-full",
                "flex items-center justify-center",
                "bg-linear-to-b from-background to-[#DB9558] dark:to-[#1B1A55]",
            )}
        >
            <h1 className="timeline-view animate-range-[entry_0%_contain_20%] animate-slide-in-left animate-slide-distance-[100%] absolute top-15 sm:top-20 left-4 sm:left-10 text-7xl sm:text-9xl text-foreground/80 select-none uppercase font-black tracking-tighter opacity-100">
                Projects
            </h1>
            <div
                className={cn(
                    "w-4/5 h-2/5",
                    "flex flex-col sm:flex-row items-center justify-center",
                    "gap-4 pt-15 sm:py-10",
                    "select-none z-1",
                )}
            >
                <ThumbnailCard
                    className="timeline-view animate-slide-in-bottom animate-slide-distance-[100%] animate-range-[entry_0%_cover_20%]"
                    frontTitle="TrackPost"
                    frontDescription="Chrome Extension TypeScript/React"
                    imageUrl="/trackpost.png"
                    backDescription="extracts and analyzes postal data, populates required forms, and enhances workflow efficiency through additional utility functions."
                    onClick={() => window.open("#TrackPost", "_self")}
                />
                <ThumbnailCard
                    className="timeline-view animate-slide-in-bottom animate-slide-distance-[100%] animate-range-[entry_20%_cover_30%]"
                    frontTitle="Postnet Plus"
                    frontDescription="Chrome Extension JavaScript"
                    imageUrl="/postnet-plus.png"
                    backDescription="enhances the legacy Postnet system by automating repetitive tasks and adding streamlined productivity features."
                    onClick={() => window.open("#PostnetPlus", "_self")}
                />
                <ThumbnailCard
                    className="timeline-view animate-slide-in-bottom animate-slide-distance-[200%] animate-range-[entry_20%_cover_30%]"
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
