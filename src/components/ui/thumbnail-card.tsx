import { useMediaQuery } from "@/lib/use-media-query";
import { cn } from "cn";
import { useState, type MouseEventHandler } from "react";

export function ThumbnailCard({
    frontTitle,
    frontDescription,
    backTitle,
    backDescription,
    imageUrl,
    className,
    onClick,
}: {
    frontTitle: string;
    frontDescription: string;
    backTitle?: string;
    backDescription?: string;
    imageUrl: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}) {
    const [isTouched, setIsTouched] = useState(false);
    const [backDisplayed, setBackDisplayed] = useState(false);
    const isMobileDevice = useMediaQuery("(pointer: coarse)");
    const clickFunc: MouseEventHandler<HTMLDivElement> = (event) => {
        if (!onClick) return;

        if (isMobileDevice) {
            if (backDisplayed) {
                setIsTouched(false);
                onClick(event);
            }
        } else {
            onClick(event);
        }
    };
    return (
        <div
            className={cn(
                "group relative h-28 sm:h-72 w-full perspective-midrange",
                "transition-transform delay-200 duration-600",
                "hover:z-2 hover:scale-120",
                isTouched && "z-2 scale-120",
                className,
            )}
            onClick={clickFunc}
            onTouchStart={() => setIsTouched(true)}
            onTouchEnd={() => {
                setTimeout(() => setBackDisplayed(true), 1000);
                setTimeout(() => {
                    setBackDisplayed(false);
                    setIsTouched(false);
                }, 5000);
            }}
        >
            <div
                className={cn(
                    "relative h-full w-full",
                    "transition-transform duration-700 transform-3d",
                    "group-hover:-rotate-y-180",
                    isTouched && "-rotate-y-180",
                )}
            >
                {/* Front */}
                <div className="absolute inset-0 flex flex-row sm:flex-col items-center justify-start sm:justify-center overflow-hidden bg-gray-200 p-4 shadow-md dark:bg-gray-800 backface-hidden">
                    <img src={imageUrl} alt={frontTitle} className="my-4 sm:mt-0 mr-4 sm:mr-0 w-20" />
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left sm:text-center">
                            {frontTitle}
                        </h3>
                        <p className="text-left sm:text-center text-gray-600 dark:text-gray-400">{frontDescription}</p>
                    </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-start sm:items-center justify-center bg-gray-200 p-4 shadow-md dark:bg-gray-800 backface-hidden -rotate-y-180 @container">
                    <div className="text-[2cqh] w-full h-full inline sm:flex sm:flex-wrap">
                        <span className="inline text-lg font-semibold text-gray-800 dark:text-gray-200 mr-1 sm:self-end">
                            {backTitle || frontTitle}
                        </span>
                        <p
                            className="inline w-full overflow-hidden - text-ellipsis text-justify sm:text-left text-gray-600 dark:text-gray-400"
                            style={{ textJustify: "inter-character" }}
                        >
                            {backDescription || frontDescription}
                        </p>
                    </div>
                    <span className="mt-2 block w-full text-right text-sm font-medium">Click to see more</span>
                </div>
            </div>
        </div>
    );
}
