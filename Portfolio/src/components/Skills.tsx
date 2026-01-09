import { content } from '../data/content';
import { Section } from './Section';

export const Skills = () => {
    const { skills } = content;

    return (
        <Section id="skills">
            <div className="terminal-header">
                <span className="terminal-prompt">$</span> ls -la /skills/pkg
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => (
                    <div
                        key={index}
                        className="sys-panel group hover:bg-sys-surface transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6 border-b border-sys-border pb-4">
                            <div className="w-8 h-8 rounded bg-console-accent/10 flex items-center justify-center text-console-accent group-hover:bg-console-accent group-hover:text-sys-black transition-colors">
                                <span className="font-mono text-xs font-bold">./</span>
                            </div>
                            <h3 className="font-mono text-console-text font-bold text-sm uppercase tracking-wider">
                                {skillGroup.category}
                            </h3>
                        </div>

                        <div className="space-y-2">
                            {skillGroup.items.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between font-mono text-xs md:text-sm text-console-dim hover:text-console-text transition-colors px-2 py-1 rounded hover:bg-sys-black">
                                    <span>{item}</span>
                                    <span className="text-console-success opacity-0 group-hover:opacity-100 transition-opacity">v1.0</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
