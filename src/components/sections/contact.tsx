import { cn } from "@/lib/utils";
import { LuArrowUpRight, LuGithub, LuLinkedin, LuMail, LuMapPin } from "react-icons/lu";
import { toast } from "../ui/toast";

const contactLinks = [
    {
        label: "Email",
        detail: "pshsh0626@gmail.com",
        href: "mailto:pshsh0626@gmail.com",
        icon: LuMail,
    },
    {
        label: "GitHub",
        detail: "github.com/psh0626",
        href: "https://github.com/psh0626",
        icon: LuGithub,
    },
    {
        label: "LinkedIn",
        detail: "linkedin.com/in/psh0626",
        href: "https://www.linkedin.com/in/psh0626",
        icon: LuLinkedin,
    },
];

export default function Contact() {
    return (
        <section
            id="Contact"
            className={cn(
                "relative w-full overflow-hidden bg-[#DB9558] px-4 py-20 dark:bg-background sm:px-6 sm:py-28",
            )}
        >
            <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="max-w-xl">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">Contact</p>
                    <h2
                        className={cn(
                            "font-heading text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl",
                            "-translate-x-[100%] intersect:translate-x-0 transition duration-700",
                        )}
                    >
                        Are you
                        <br />
                        interested?
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-7 text-foreground/70">
                        Have a project, an idea, or just want to say hello?
                    </p>
                    <div className="mt-8 inline-flex items-center gap-2 border border-foreground/15 bg-background/30 px-4 py-2 text-sm font-medium text-foreground/75 dark:bg-card select-none">
                        <LuMapPin aria-hidden="true" className="size-4" />
                        Toronto, Canada
                    </div>
                </div>

                <div className="grid gap-3">
                    {contactLinks.map(({ label, detail, href, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={label === "Email" ? undefined : "_blank"}
                            rel={label === "Email" ? undefined : "noopener noreferrer"}
                            onClick={() => {
                                if (label === "Email") {
                                    navigator.clipboard.writeText(detail).then(() => {
                                        toast.add({
                                            type: "success",
                                            title: "Email Copied to Clipboard",
                                            description: "pshsh0626@gmail.com",
                                        });
                                    });
                                }
                            }}
                            className="group flex min-h-24 items-center gap-4 border border-foreground/10 bg-background/80 p-5 shadow-sm transition-all hover:-translate-y-1 hover:bg-background hover:shadow-lg dark:bg-card dark:hover:bg-secondary sm:gap-5 sm:p-6 select-none cursor-default"
                        >
                            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent/25 text-foreground transition-colors group-hover:bg-accent/50">
                                <Icon aria-hidden="true" className="size-5" />
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                    {label}
                                </span>
                                <span className="mt-1 block truncate text-sm font-semibold text-foreground sm:text-base">
                                    {detail}
                                </span>
                            </span>
                            <LuArrowUpRight
                                aria-hidden="true"
                                className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
