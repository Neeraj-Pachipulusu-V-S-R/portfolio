import { Section } from './Section';
import { content } from '../data/content';
import { Terminal } from 'lucide-react';

export const Experience = () => {
    const { experience } = content;

    // 1. Flatten hierarchy: Host -> Roles -> Flat List
    // 2. Reverse to show Oldest -> Newest (Journey left to right)
    const distinctRoles = experience.flatMap((host, hostIdx) =>
        host.roles.map(role => ({
            ...role,
            hostName: host.host,
            hostIndex: hostIdx,
            // Extract roughly the start year for the timeline simplified view if needed
            year: role.period.split('–')[0].split(' ').pop() || '2023'
        }))
    ); //.reverse(); for reversing the order.

    // Color Palette for Hosts (Organization-based)
    const hostColors = [
        { bg: 'bg-emerald-500', border: 'border-emerald-500/50', glow: 'shadow-emerald-500/20', text: 'text-emerald-500' }, // Cognizant (Index 0)
        { bg: 'bg-cyan-500', border: 'border-cyan-500/50', glow: 'shadow-cyan-500/20', text: 'text-cyan-500' },       // Google (Index 1)
        { bg: 'bg-amber-500', border: 'border-amber-500/50', glow: 'shadow-amber-500/20', text: 'text-amber-500' },     // NIUM (Index 2)
        { bg: 'bg-fuchsia-500', border: 'border-fuchsia-500/50', glow: 'shadow-fuchsia-500/20', text: 'text-fuchsia-500' } // Fluentgrid (Index 3)
    ];

    return (
        <Section id="experience">
            <div className="terminal-header mb-8">
                <span className="terminal-prompt">$</span> ./trace_execution_path.sh
            </div>

            {/* Hide Scrollbar but allow scrolling */}
            <div className="w-full overflow-x-auto pb-12 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

                {/* Timeline Container */}
                <div className="min-w-[1200px] lg:w-full px-4 relative py-32 md:py-48">

                    {/* The Main System Bus Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-sys-border to-transparent -translate-y-1/2 rounded-full z-0"></div>

                    <div className="flex justify-between items-center relative z-10 w-full">
                        {distinctRoles.map((role, index) => {
                            const isTop = index % 2 === 0;
                            const isRunning = role.status === 'RUNNING';

                            // Cycle through colors based on Host Index
                            // Note: reversed array means indices are reversed too, but logic holds unique color per host
                            const colorTheme = hostColors[role.hostIndex % hostColors.length];

                            // Status Pill Style based on color theme or generic dimmed if not active
                            const statusStyle = isRunning
                                ? `bg-opacity-10 text-white ${colorTheme.bg.replace('bg-', 'text-')} ${colorTheme.border}`
                                : 'bg-console-dim/10 text-console-dim border-sys-border';

                            return (
                                <div key={index} className="relative flex flex-col items-center group flex-1">

                                    {/* THE NODE (Milestone) */}
                                    <div className={`w-3 h-3 rounded-full ${colorTheme.bg} shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 relative group-hover:scale-150 transition-transform duration-300 border border-sys-black ring-2 ring-sys-black`}>
                                        {isRunning && <div className={`absolute inset-0 rounded-full animate-ping ${colorTheme.bg} opacity-40`}></div>}
                                    </div>

                                    {/* CONTENT CARD */}
                                    <div className={`absolute ${isTop ? 'bottom-6' : 'top-6'} w-42 md:w-48 transition-all duration-300 group-hover:scale-105 z-10`}>

                                        {/* Connector Line */}
                                        <div className={`absolute left-1/2 -translate-x-1/2 ${isTop ? 'bottom-[-26px]' : 'top-[-26px]'} w-px h-6 bg-sys-border border-l border-dashed border-sys-border/50`}></div>

                                        <div className={`bg-sys-dark border ${colorTheme.border} p-3 rounded-lg shadow-xl relative backdrop-blur-sm bg-opacity-95 ${colorTheme.glow}`}>
                                            {/* Date Banner */}
                                            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-sys-black border border-sys-border text-console-dim text-[9px] font-mono px-2 py-0.5 rounded-full whitespace-nowrap">
                                                {role.period}
                                            </div>

                                            <div className="mt-1 text-center">
                                                <h4 className="text-console-light font-bold text-xs leading-tight mb-1">{role.title}</h4>
                                                <div className="text-console-text/60 text-[10px] font-mono mb-1.5 flex items-center justify-center gap-1">
                                                    <Terminal size={8} />
                                                    {role.hostName}
                                                </div>

                                                {/* Status Pill */}
                                                <div className={`inline-block text-[8px] font-mono px-1 py-0.5 rounded border ${statusStyle}`}>
                                                    {role.status}
                                                </div>

                                                <p className="text-[9px] text-console-text/70 mt-1.5 line-clamp-2 leading-relaxed">
                                                    {role.focus}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="text-center mt-4 text-console-dim text-[10px] font-mono animate-pulse opacity-50">
                {'< SCROLL TO NAVIGATE >'}
            </div>
        </Section>
    );
};
