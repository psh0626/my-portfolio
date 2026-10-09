import { isString } from "@tsparticles/engine";
import { cn } from "cn";
import React, { useState, type ReactElement, type ReactNode } from "react";
import { LuChevronLeft, LuChevronRight, LuDot } from "react-icons/lu";

interface BaseLayoutProps {
    children?: ReactNode;
}

interface WithTitleProps extends BaseLayoutProps {
    Title: string; // Title이 있으면
    SubTitle: string; // SubTitle도 무조건 있어야 함! (선택형 '?' 제거)
}

interface WithoutTitleProps extends BaseLayoutProps {
    Title?: never;
    SubTitle?: never;
}
type ProjectLayoutProps = WithTitleProps | WithoutTitleProps;
export function ProjectMedia({ src, children }: BaseLayoutProps & { src: string }) {
    if (src && isString(src)) return <img src={src} className="object-contain max-h-full max-w-full" />;
    return <>{children}</>;
}
export function ProjectDescription({ children }: BaseLayoutProps) {
    return <>{children}</>;
}

export function ProjectTitle({ children }: BaseLayoutProps) {
    return <>{children}</>;
}

export function ProjectLayout({ Title, SubTitle, children }: ProjectLayoutProps) {
    const [currentPage, setCurrentPage] = useState(0);

    const childrenArr = React.Children.toArray(children) as ReactElement[];

    const titleElement = childrenArr.find((c) => c.type === ProjectTitle);

    const pageMedia = childrenArr.filter((c) => c.type === ProjectMedia);

    const pageDescs = childrenArr.filter((c) => c.type === ProjectDescription);

    const [currentMedia, currentDescription] = [pageMedia.at(currentPage), pageDescs.at(currentPage)];

    const changePage = (where: "prev" | "next") => {
        setCurrentPage((p) => {
            if (where === "next") {
                if (p >= pageMedia.length - 1) return 0;
                return p + 1;
            } else {
                if (p <= 0) return pageMedia.length - 1;
                return p - 1;
            }
        });
    };

    return (
        <div className="relative size-4/5 bg-card shadow-2xl flex flex-col">
            {/* TITLE */}
            <div className="relative col-span-4 bg-amber-600 w-full h-30 shrink-0 flex items-end p-4">
                {titleElement ? (
                    titleElement
                ) : (
                    <>
                        <span className="text-sm absolute top-4 text-gray-300 dark:text-gray-300 select-none">
                            {SubTitle}
                        </span>
                        <h2 className="text-4xl font-black tracking-tight text-card">{Title}</h2>
                    </>
                )}
            </div>

            {/* CONTENT */}
            <div className="grow relative flex flex-col md:flex-row min-h-0">
                {/* MEDIA */}
                <div className={cn("flex-1", "p-4 bg-accent min-h-0 md:min-h-full", "flex justify-center")}>
                    {isString(currentMedia) ? (
                        <img src={currentMedia} className="object-contain max-h-full max-w-full" />
                    ) : (
                        currentMedia
                    )}
                </div>

                {/* DESCRIPTION */}
                <div className={cn("flex-1 bg-amber-700 dark:bg-card", "p-4", "flex md:items-center")}>
                    <span className="text-card p-4 dark:text-gray-200">{currentDescription}</span>
                </div>

                {/* LEFT ARROW */}
                <div
                    className={cn(
                        "absolute h-full w-10 left-0 top-0",
                        "flex justify-center items-center",
                        "hover:bg-background/10",
                        "transition-colors",
                    )}
                    onClick={() => changePage("prev")}
                >
                    <LuChevronLeft className="text-white/70 text-4xl" />
                </div>
                {/* RIGHT ARROW */}
                <div
                    className={cn(
                        "absolute h-full w-10 right-0 top-0",
                        "flex justify-center items-center",
                        "hover:bg-gray-400/40",
                        "transition-colors",
                    )}
                    onClick={() => changePage("next")}
                >
                    <LuChevronRight className="text-white/70 text-4xl" />
                </div>
                {/* PAGE INDICATOR */}
                <div className="absolute size-full flex justify-center items-end pointer-events-none transition-all">
                    {Array.from({ length: pageMedia.length }, (_, idx) =>
                        idx === currentPage ? (
                            <LuDot key={idx} className="text-3xl" />
                        ) : (
                            <LuDot key={idx} className="text-2xl" />
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}
