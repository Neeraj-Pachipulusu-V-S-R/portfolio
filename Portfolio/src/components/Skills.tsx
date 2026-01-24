import { content } from '../data/content';
import { Section } from './Section';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const BinaryStream = () => {
    // Generate a long string of block characters for the animation
    const stream = "█-█-█-█-█-█-█-█-█-█-";

    return (
        <div className="overflow-hidden whitespace-nowrap mask-gradient opacity-60 font-mono text-[10px] w-32 select-none text-console-accent/80">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                }}
                className="flex gap-0"
            >
                <span>{stream}</span>
                <span>{stream}</span>
            </motion.div>
        </div>
    );
};

const SkillProcess = ({ category, items }: { category: string, items: any[] }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });
    const [status, setStatus] = useState("WAITING");

    useEffect(() => {
        if (inView) {
            setStatus("TRANSFERRING");
            const timer = setTimeout(() => {
                setStatus("COMPLETE");
            }, 800); // Quick sync
            return () => clearTimeout(timer);
        }
    }, [inView]);

    return (
        <div ref={ref} className="space-y-3 font-mono p-4 border border-sys-border/20 bg-sys-surface/20 rounded">
            {/* Compact Header Line */}
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm">
                <span className="text-console-text font-bold whitespace-nowrap">
                    ./{category.toLowerCase().replace(/\s+/g, '-')}
                </span>

                {/* Inline Binary Stream */}
                <div className="flex items-center gap-2 overflow-hidden">
                    <span className="text-console-dim hidden md:inline">{`>>`}</span>
                    <BinaryStream />
                </div>

                <span className={`${status === "COMPLETE" ? "text-console-success" : "text-console-accent"}`}>
                    [{status === "COMPLETE" ? "LIVE" : "SYNC"}]
                </span>
            </div>

            {/* Icons Reveal - Direct reveal under header */}
            <div className="min-h-[2rem] pl-4 md:pl-8">
                {status === "COMPLETE" && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ staggerChildren: 0.05 }}
                        className="flex flex-wrap gap-x-6 gap-y-3"
                    >
                        {items.map((skill: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-4 h-4 object-contain hover:scale-125 transition-all"
                                />
                                <span className="text-xs text-console-dim hover:text-console-text transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export const Skills = () => {
    const { skills } = content;

    return (
        <Section id="skills">
            <div className="terminal-header mb-8">
                <span className="terminal-prompt">$</span> tail -f /dev/skills_stream
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto px-4 md:px-8">
                {skills.map((skillGroup, idx) => (
                    <SkillProcess
                        key={idx}
                        category={skillGroup.category}
                        items={skillGroup.items}
                    />
                ))}
            </div>
        </Section>
    );
};
