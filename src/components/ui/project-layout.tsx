import { isString } from "@tsparticles/engine";
import { cn } from "cn";
import React, { useState, type ReactElement, type ReactNode } from "react";
import { LuChevronLeft, LuChevronRight, LuDot } from "react-icons/lu";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./dialog";

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
    const [pageTransition, setPageTransition] = useState<{
        from: number;
        to: number;
        direction: "prev" | "next";
    } | null>(null);

    const childrenArr = React.Children.toArray(children) as ReactElement[];

    const titleElement = childrenArr.find((c) => c.type === ProjectTitle);

    const pageMedia = childrenArr.filter((c) => c.type === ProjectMedia);

    const pageDescs = childrenArr.filter((c) => c.type === ProjectDescription);

    const goToPage = (to: number, direction: "prev" | "next") => {
        if (pageTransition || pageMedia.length === 0 || to === currentPage) return;
        setPageTransition({ from: currentPage, to, direction });
    };

    const changePage = (where: "prev" | "next") => {
        if (pageTransition || pageMedia.length === 0) return;

        const to =
            where === "next"
                ? (currentPage + 1) % pageMedia.length
                : (currentPage - 1 + pageMedia.length) % pageMedia.length;

        goToPage(to, where);
    };

    const renderPage = (page: number, className: string, onAnimationEnd?: () => void) => (
        <div className={cn("absolute inset-0 flex flex-col md:flex-row", className)} onAnimationEnd={onAnimationEnd}>
            <div className={cn("flex-1", "p-4 bg-accent min-h-1/2 md:min-h-full", "flex justify-center")}>
                <Dialog>
                    <DialogTrigger>{pageMedia[page]}</DialogTrigger>
                    <DialogContent>
                        <DialogTitle>Photo viewer</DialogTitle>
                        <DialogDescription>{pageMedia[page]}</DialogDescription>
                    </DialogContent>
                </Dialog>
            </div>
            <div
                className={cn(
                    "flex-1 bg-amber-700 dark:bg-card",
                    "max-h-1/2 md:max-h-none p-4",
                    "flex md:items-center",
                )}
            >
                <span className="text-card p-4 dark:text-gray-200 whitespace-break-spaces">{pageDescs[page]}</span>
            </div>
        </div>
    );

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
            <div className="grow relative flex flex-col md:flex-row min-h-0 overflow-hidden animate-slide-distance-[100%] animate">
                {pageTransition ? (
                    <>
                        {renderPage(
                            pageTransition.from,
                            pageTransition.direction === "next"
                                ? "animate-slide-out-left pointer-events-none animate-duration-300 animate-bezier-quad-in-out"
                                : "animate-slide-out-right pointer-events-none animate-duration-300 animate-bezier-quad-in-out",
                        )}
                        {renderPage(
                            pageTransition.to,
                            pageTransition.direction === "next"
                                ? "animate-slide-in-right animate-duration-300 animate-bezier-quad-in-out"
                                : "animate-slide-in-left animate-duration-300 animate-bezier-quad-in-out",
                            () => {
                                setCurrentPage(pageTransition.to);
                                setPageTransition(null);
                            },
                        )}
                    </>
                ) : (
                    renderPage(currentPage, "")
                )}

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
                <div className="absolute size-full flex justify-center items-end pointer-events-none">
                    {Array.from({ length: pageMedia.length }, (_, idx) => {
                        const isCurrentPage = idx === (pageTransition?.to ?? currentPage);
                        return (
                            <button
                                key={idx}
                                type="button"
                                className="pointer-events-auto cursor-pointer p-1"
                                aria-label={`Go to page ${idx + 1}`}
                                aria-current={isCurrentPage ? "page" : undefined}
                                disabled={Boolean(pageTransition)}
                                onClick={() => goToPage(idx, idx > currentPage ? "next" : "prev")}
                            >
                                <LuDot className={cn("transition-all", isCurrentPage ? "size-8" : "size-6")} />
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
