import agenticAi from '../content/posts/agentic-ai.md?raw';
import minimalism from '../content/posts/minimalism.md?raw';

export type LogEntry = {
    id: string;
    title: string;
    date: string;
    category: string;
    readTime: string;
    status: 'PUBLISHED' | 'DRAFT';
    content: string;
};

export const logs: LogEntry[] = [
    {
        id: 'log_001',
        title: 'The Rise of Agentic AI',
        date: '2025-01-15',
        category: 'AI / Engineering',
        readTime: '4 min read',
        status: 'PUBLISHED',
        content: agenticAi
    },
    {
        id: 'log_002',
        title: 'Digital Minimalism in UI',
        date: '2024-12-10',
        category: 'Design / Psychology',
        readTime: '3 min read',
        status: 'DRAFT',
        content: minimalism
    }
];
