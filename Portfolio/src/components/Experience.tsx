import { content } from '../data/content';
import { Section } from './Section';

export const Experience = () => {
    const { experience } = content;

    return (
        <Section id="experience">
            <div className="terminal-header">
                <span className="terminal-prompt">$</span> grep "HISTORY" system.status
            </div>

            <div className="max-w-3xl">
                <div className="space-y-0 relative border-l border-sys-border ml-3 pl-8 md:pl-16 py-4">
                    {experience.map((job, index) => (
                        <div key={index} className="relative group pb-12 last:pb-0">
                            {/* Timeline Dot */}
                            <span className="absolute -left-[37px] md:-left-[69px] top-1 w-3 h-3 rounded-full bg-sys-black border border-console-accent group-hover:bg-console-accent transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)]"></span>

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                                <h3 className="text-xl font-bold font-mono text-console-text group-hover:text-console-accent transition-colors cursor-default">
                                    {job.role}
                                </h3>
                                <span className="text-xs font-mono text-console-muted mt-2 sm:mt-0 bg-sys-surface px-2 py-1 rounded border border-sys-border">
                                    [{job.period}]
                                </span>
                            </div>

                            <div className="text-sm font-mono text-console-dim mb-4 border-l-2 border-sys-surface pl-3">
                                @ {job.company}
                            </div>

                            <p className="text-console-dim text-base leading-relaxed max-w-2xl font-sans opacity-80 group-hover:opacity-100 transition-opacity">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
