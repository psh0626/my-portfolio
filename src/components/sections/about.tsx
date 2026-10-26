import { RESUME_URL } from "@/App";
import { cn } from "@/lib/utils";
import {
    LuArrowDownRight,
    LuCode,
    LuCompass,
    LuDatabase,
    LuHammer,
    LuLanguages,
    LuLightbulb,
    LuMapPin,
    LuNetwork,
    LuPuzzle,
    LuWorkflow,
} from "react-icons/lu";
import { Separator } from "../ui/separator";

export default function About() {
    return (
        <section
            id="About"
            className={cn(
                "relative w-full overflow-hidden bg-background py-20 sm:py-28 timeline-view animate-blurred-fade-in animate-range-entry",
            )}
        >
            <div className="pointer-events-none absolute -right-24 top-24 size-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                            About me
                        </p>
                        <h2 className="font-heading text-4xl font-bold tracking-tight text-primary/60 sm:text-5xl">
                            I turn curiosity <span className="text-primary">into solutions.</span>
                        </h2>
                    </div>
                    <a
                        href={RESUME_URL}
                        target="_blank"
                        className="group inline-flex w-fit items-center gap-2 pb-1 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                        Resume
                        <LuArrowDownRight
                            aria-hidden="true"
                            className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                        />
                    </a>
                </div>

                <div className="grid auto-rows-[minmax(150px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <article className="relative flex min-h-72 flex-col justify-between overflow-hidden border border-border bg-linear-to-br from-primary/10 via-secondary to-accent/20 p-6 sm:col-span-2 sm:row-span-2 sm:p-8">
                        <div className="pointer-events-none absolute -right-8 -top-8 size-48 rounded-full border-28 border-background/20" />
                        <div className="relative flex items-start justify-between gap-4">
                            <div className="group relative flex size-20 items-center overflow-hidden rounded-2xl border border-border/80 bg-background shadow-lg">
                                <img
                                    src="/my-pfp.jpg"
                                    alt="Sunghoon Park"
                                    className="size-full object-cover
                                    transition-transform duration-600 ease-out group-hover:-translate-x-full"
                                />
                                <img
                                    src="/my-pfp-2.jpg"
                                    alt="Sunghoon Park"
                                    className="absolute inset-0 size-full translate-x-full object-cover transition-transform duration-600 ease-out group-hover:translate-x-0"
                                />
                            </div>
                            <span className="border border-border/80 bg-background/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                Software developer
                            </span>
                        </div>
                        <div className="relative mt-10">
                            <p className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Sunghoon Park
                            </p>
                            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
                                <span className="inline-flex items-center gap-2">
                                    <LuMapPin aria-hidden="true" className="size-4 text-primary" />
                                    Toronto, Canada
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <LuLanguages aria-hidden="true" className="size-4 text-primary" />
                                    English · Korean
                                </span>
                            </div>
                        </div>
                        <Separator className="mt-5" />
                        <div className="relative mt-5 flex justify-between">
                            {[
                                { name: "JavaScript", icon: LuCode },
                                { name: "TypeScript", icon: LuCode },
                                { name: "React", icon: LuPuzzle },
                                { name: "C#", icon: LuCode },
                                { name: ".NET", icon: LuWorkflow },
                                { name: "Python", icon: LuCode },
                                { name: "SQL", icon: LuDatabase },
                            ].map(({ name, icon: Icon }) => (
                                <div
                                    key={name}
                                    className="flex h-10 w-20 pr-2 flex-col items-center justify-center gap-2 text-center"
                                >
                                    <Icon aria-hidden="true" className="size-5 text-primary" />
                                    <span className="text-[11px] font-semibold text-foreground/80">{name}</span>
                                </div>
                            ))}
                        </div>
                    </article>

                    {[
                        {
                            color: "bg-card",
                            icon: LuCompass,
                            label: "Mindset",
                            title: "Curious",
                            description: "Constant desire to learn, explore, and understand.",
                        },
                        {
                            color: "bg-secondary/70",
                            icon: LuNetwork,
                            label: "Drive",
                            title: "Self-Starter",
                            description: "Take initiative, adapt quickly, and move forward.",
                        },
                        {
                            color: "bg-card",
                            icon: LuLightbulb,
                            label: "Attitude",
                            title: "Persistent",
                            description: "Enjoy the challenge of problems and improving the project",
                        },
                        {
                            color: "bg-secondary/70",
                            icon: LuHammer,
                            label: "Approach",
                            title: "Builder",
                            description: "Create things from scratch and bring ideas to life.",
                        },
                    ].map((item) => {
                        return (
                            <article
                                key={item.title}
                                className={cn(
                                    "group flex flex-col justify-between border border-border p-5 transition-transform hover:-translate-y-1 sm:p-6",
                                    item.color,
                                    "intersect:animate-blurred-fade-in",
                                )}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="grid size-10 place-items-center rounded-xl text-primary">
                                        <item.icon aria-hidden="true" className="size-5" />
                                    </span>
                                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                        {/* {item.label} */}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-4xl font-black tracking-tight text-foreground">{item.title}</p>
                                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
