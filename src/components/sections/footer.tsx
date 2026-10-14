import { cn } from "@/lib/utils";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#About" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#Contact" },
];

export default function Footer() {
    return (
        <footer id="Footer" className={cn("w-full bg-background px-2 py-4 sm:px-4 sm:py-8")}>
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
                <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
                    <a
                        href="#home"
                        className="w-fit text-sm font-black uppercase tracking-[0.2em] transition-opacity hover:opacity-70 cursor-default select-none"
                    >
                        Sunghoon Park
                    </a>

                    <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3 select-none">
                        {navigation.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/65 transition-colors hover:text-primary cursor-default"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/psh0626"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="grid size-10 place-items-center rounded-full border border-foreground/20 text-primary/75 transition-colors hover:bg-foreground/10 hover:text-primary cursor-default"
                        >
                            <LuGithub aria-hidden="true" className="size-4" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/psh0626"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="grid size-10 place-items-center rounded-full border border-foreground/20 text-primary/75 transition-colors hover:bg-foreground/10 hover:text-primary cursor-default"
                        >
                            <LuLinkedin aria-hidden="true" className="size-4" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-2 border-t border-foreground/15 pt-5 text-xs text-primary/50 sm:flex-row sm:items-center">
                    <p>© {new Date().getFullYear()} Sunghoon Park</p>
                    <p>Thank you for visiting!</p>
                </div>
            </div>
        </footer>
    );
}
