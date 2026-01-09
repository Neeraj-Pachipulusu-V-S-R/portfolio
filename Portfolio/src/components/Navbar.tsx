import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const timer = setInterval(() => setTime(new Date()), 1000);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: '~/about', id: 'about' },
        { name: '~/skills', id: 'skills' },
        { name: '~/projects', id: 'projects' },
        { name: './contact', id: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                    ? 'bg-sys-black/95 backdrop-blur-sm border-sys-border py-3'
                    : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="container-terminal flex items-center justify-between font-mono text-sm">
                <div
                    className="flex items-center gap-2 cursor-pointer text-console-text hover:text-console-accent transition-colors"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <span className="text-console-success">➜</span>
                    <span className="font-bold">neeraj@system</span>
                    <span className="text-console-muted">:</span>
                    <span className="text-console-accent">~</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-console-dim hover:text-console-accent transition-colors tracking-tight hover:underline decoration-console-accent/50 underline-offset-4"
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="h-4 w-px bg-sys-border"></div>

                    <div className="text-console-muted text-xs">
                        UPTIME: {time.toLocaleTimeString([], { hour12: false })}
                    </div>
                </div>
            </div>
        </nav>
    );
};
