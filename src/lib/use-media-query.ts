import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
    return useSyncExternalStore(
        (onChange) => {
            const mql = window.matchMedia(query);
            mql.addEventListener("change", onChange);
            return () => mql.removeEventListener("change", onChange);
        },
        () => window.matchMedia(query).matches,
    );
}

export const useIsSm = () => useMediaQuery("(min-width: 640px)");
export const useIsMd = () => useMediaQuery("(min-width: 768px)"); // Most common for Shadcn Drawer/Dialog swaps
export const useIsLg = () => useMediaQuery("(min-width: 1024px)");
export const useIsXl = () => useMediaQuery("(min-width: 1280px)");