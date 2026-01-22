import auLogo from '../assets/AU-Logo.png';
import iitLogo from '../assets/IITM-Logo.png';
import azureAiLogo from '../assets/Azure AI Engineer Associate.png';
import azureDsLogo from '../assets/Azure Data Science Associate.png';
import gcpMlLogo from '../assets/GCP ML Engineer Professional.png';
import databricksLogo from '../assets/Databricks ML Engineer.png';

export const content = {
    hero: {
        name: "Neeraj",
        role: "AI/ML Engineer",
        tagline: "Building robust, scalable AI systems for real-world impact.",
        resumeLink: "/Neeraj_AIML_CTS.pdf",
        profileImage: "/Neeraj_LinkedIn.png",
    },
    about: {
        summary: [
            "I am a system-oriented AI/ML Engineer with a focus on building production grade AI / LLM / ML and scalable applications.",
            "My approach is grounded in engineering principles—valuing clarity, maintainability, and performance, reliability, and scalability. I enjoy solving complex structural problems and translating theoretical models into tangible solutions.",
            "Currently focusing on AI/ML applications and efficient model deployment strategies."
        ]
    },
    education: [
        {
            period: "2020–2024",
            institution: "ANDHRA UNIVERSITY",
            degree: "B.Tech — Computer Science Engineering",
            focus: "Focus: systems, DSA, CS fundamentals",
            logo: auLogo
        },
        {
            period: "2021–2026",
            institution: "IIT MADRAS",
            degree: "BSc — Data Science & Programming",
            focus: "Focus: machine learning, statistics, applied AI",
            logo: iitLogo
        }
    ],
    certifications: [
        {
            name: "Azure AI Engineer Associate",
            id: "AI-102",
            issuer: "Microsoft",
            date: "2024",
            style: "cyan",
            image: azureAiLogo,
            link: "https://learn.microsoft.com/en-us/users/pachipulusuvenkatasairatnaneeraj-3230/credentials/b0b6d74dec76d188"
        },
        {
            name: "Azure Data Science Associate",
            id: "DP-100",
            issuer: "Microsoft",
            date: "2024",
            style: "cyan",
            image: azureDsLogo,
            link: "https://learn.microsoft.com/en-us/users/pachipulusuvenkatasairatnaneeraj-3230/credentials/f37ca6db177b541e"
        },
        {
            name: "Professional Machine Learning Engineer",
            id: "GCP-MLE",
            issuer: "Google Cloud",
            date: "2024",
            style: "yellow",
            image: gcpMlLogo,
            link: "https://www.credly.com/badges/7cefd456-6e38-4a59-850a-32f2db055e2d"
        },
        {
            name: "Databricks Certified Machine Learning Professional",
            id: "DB-ML-PRO",
            issuer: "Databricks",
            date: "2024",
            style: "red",
            image: databricksLogo,
            link: "https://credentials.databricks.com/d6c6b3e0-d7be-4109-a1d1-d9dd81b5b47a"
        }
    ],
    skills: [
        {
            category: "Languages",
            items: ["Python", "C++", "TypeScript", "SQL"]
        },
        {
            category: "Machine Learning",
            items: ["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace", "OpenCV"]
        },
        {
            category: "Engineering & GenAI",
            items: ["Docker", "Kubernetes", "AWS / GCP", "RAG Pipelines", "LLM Fine-tuning"]
        },
        {
            category: "Web & Tools",
            items: ["React", "FastAPI", "Git", "CI/CD", "Linux"]
        }
    ],
    experience: [
        {
            host: "Cognizant (CTS)",
            roles: [
                {
                    title: "Jr. AI Engineer",
                    type: "Full-time",
                    period: "Jun 2025 – Present",
                    location: "Hybrid",
                    status: "RUNNING",
                    focus: "Agentic AI, RAG, BFSI document intelligence, GCP, Vertex AI"
                },
                {
                    title: "Responsible AI Champion",
                    type: "Part-time",
                    period: "Nov 2025 – Present",
                    location: "Remote",
                    status: "RUNNING",
                    focus: "AI ethics, governance, privacy, XAI"
                },
                {
                    title: "Jr. Data Engineer",
                    type: "Full-time",
                    period: "Mar 2025 – Jun 2025",
                    location: "Hyderabad, Telangana • Hybrid",
                    status: "EXIT_SUCCESS",
                    focus: "Data Warehouse Migration (BFSI), GCP, Informatica IICS"
                },
                {
                    title: "Programmer Analyst Trainee",
                    type: "Full-time",
                    period: "Nov 2024 – Feb 2025",
                    location: "Hyderabad, Telangana • Hybrid",
                    status: "EXIT_SUCCESS",
                    focus: "Data Science & ML Training, Python, SQL"
                }
            ]
        },
        {
            host: "Google Cloud Community India",
            roles: [
                {
                    title: "Google Cloud Jams Facilitator",
                    type: "Facilitator",
                    period: "Aug 2023 – Jul 2024",
                    location: "Remote",
                    status: "EXIT_SUCCESS",
                    focus: "Guided 150+ learners in GCP and GenAI"
                }
            ]
        },
        {
            host: "National Institute of Urban Management (NIUM)",
            roles: [
                {
                    title: "Full Stack Developer Intern",
                    type: "Internship",
                    period: "Jun 2023 – Aug 2023",
                    location: "On-site",
                    status: "EXIT_SUCCESS",
                    focus: "Web-GIS, AWS deployment"
                }
            ]
        },
        {
            host: "Fluentgrid Limited",
            roles: [
                {
                    title: "Software Engineer Intern",
                    type: "Internship",
                    period: "Jan 2023 – Feb 2023",
                    location: "On-site",
                    status: "EXIT_SUCCESS",
                    focus: "Enterprise integration, Java, Oracle DB"
                }
            ]
        }
    ],
    projects: [
        {
            title: "Guardian App",
            description: "A comprehensive women's safety application with real-time location tracking and emergency response features.",
            techStack: ["Flutter", "Firebase", "Google Maps API", "Dart"],
            link: "#"
        },
        {
            title: "Deepfake Detector",
            description: "A deep learning system to detect manipulated facial media using CNNs and frequency analysis.",
            techStack: ["Python", "PyTorch", "OpenCV"],
            link: "#"
        },
        {
            title: "Portfolio",
            description: "This minimal, performance-focused portfolio website.",
            techStack: ["React", "TypeScript", "Vite"],
            link: "#"
        }
    ],
    contact: {
        email: "neerajpachipulusuvsr@gmail.com", // Placeholder
        linkedin: "https://linkedin.com/in/neerajpvsr", // Placeholder
        github: "https://github.com/Neeraj-Pachipulusu-V-S-R" // Placeholder
    }
};
