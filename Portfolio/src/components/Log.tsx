import { useState } from 'react';
import { Section } from './Section';
import { logs } from '../data/logs';
import { Terminal, FileText, Calendar, Clock, ChevronDown, ChevronUp, X } from 'lucide-react';

export const Log = () => {
    const [expandedLogId, setExpandedLogId] = useState<string | null>(null);

    const toggleLog = (id: string) => {
        if (expandedLogId === id) {
            setExpandedLogId(null);
        } else {
            setExpandedLogId(id);
        }
    };

    return (
        <Section id="log">
            <div className="terminal-header mb-8">
                <span className="terminal-prompt">$</span> ./system_logs.sh --view-all
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
                {logs.map((log) => {
                    const isExpanded = expandedLogId === log.id;
                    const isDraft = log.status === 'DRAFT';

                    return (
                        <div
                            key={log.id}
                            className={`border ${isExpanded ? 'border-sys-border bg-sys-white/5' : 'border-sys-border/40 bg-sys-black/40'} rounded-lg overflow-hidden transition-all duration-300 hover:border-sys-border hover:bg-sys-white/5`}
                        >
                            {/* Log Header / Summary Card */}
                            <div
                                onClick={() => toggleLog(log.id)}
                                className="p-4 cursor-pointer flex flex-col md:flex-row gap-4 md:items-center justify-between group"
                            >
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-3 text-xs font-mono text-console-dim">
                                        <span className={isDraft ? 'text-yellow-500' : 'text-green-500'}>
                                            [{log.status}]
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} />
                                            {log.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} />
                                            {log.readTime}
                                        </span>
                                        <span className="text-console-accent">{log.category}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-console-text group-hover:text-console-light transition-colors flex items-center gap-2">
                                        <FileText size={16} className="text-console-dim" />
                                        {log.title}
                                    </h3>
                                </div>

                                <div className="text-console-dim group-hover:text-console-light">
                                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </div>

                            {/* Log Content (Expanded View) */}
                            {isExpanded && (
                                <div className="p-6 border-t border-sys-border/50 bg-sys-black/60 font-mono text-sm leading-relaxed text-console-text/80 whitespace-pre-wrap">
                                    {/* Simple markdown rendering (removing raw frontmatter if possible, or just displaying it as raw log) */}
                                    {log.content}

                                    <div className="mt-8 pt-4 border-t border-sys-border/30 flex justify-end">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setExpandedLogId(null); }}
                                            className="text-xs text-console-dim hover:text-console-light flex items-center gap-1"
                                        >
                                            <X size={12} /> CLOSE_LOG
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};
