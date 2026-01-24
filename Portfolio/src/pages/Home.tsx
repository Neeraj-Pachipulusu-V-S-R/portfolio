import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Education } from '../components/Education';
import { Certifications } from '../components/Certifications';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';

export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Certifications />
            <Skills />
            <Contact />
        </>
    );
};
