import React, { useState } from 'react';
import { Mail, Github, Linkedin, Download, ExternalLink, Award, Code, Briefcase, Star, GitBranch } from 'lucide-react';

export default function NetflixPortfolio() {
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    const portfolioData = {
        name: "Your Name Here",
        headline: "Full Stack Developer | Data Scientist | ML Enthusiast",
        aboutMe: "Passionate developer with expertise in full-stack development, data science, and machine learning. I love building scalable applications and solving complex problems with innovative solutions.",
        email: "your.email@example.com",
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        resumeLink: "https://yourresume.com/resume.pdf",

        experience: [
            {
                title: "Senior Software Engineer",
                company: "Company Name",
                duration: "Jan 2023 - Present",
                description: "Led development of scalable microservices architecture. Improved system performance by 40%. Mentored junior developers and conducted code reviews."
            },
            {
                title: "Full Stack Developer",
                company: "Previous Company",
                duration: "Jun 2021 - Dec 2022",
                description: "Developed responsive web applications using React and Spring Boot. Implemented RESTful APIs and integrated third-party services."
            },
            {
                title: "Junior Developer",
                company: "First Company",
                duration: "Jan 2020 - May 2021",
                description: "Built frontend components and collaborated with backend team. Participated in agile development processes and sprint planning."
            }
        ],

        projects: [
            {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce application with payment integration, inventory management, and real-time analytics dashboard. Built using React, Spring Boot, and MongoDB.",
                tech: ["React", "Spring Boot", "MongoDB", "Docker"],
                link: "https://github.com/yourusername/project1"
            },
            {
                title: "ML-Powered Recommendation System",
                description: "Machine learning model for product recommendations using collaborative filtering and content-based approaches. Achieved 85% accuracy in user preference prediction.",
                tech: ["Python", "PyTorch", "Pandas", "Flask"],
                link: "https://github.com/yourusername/project2"
            },
            {
                title: "Real-Time Chat Application",
                description: "WebSocket-based chat application with group messaging, file sharing, and emoji support. Supports 1000+ concurrent users.",
                tech: ["React", "Node.js", "Socket.io", "MongoDB"],
                link: "https://github.com/yourusername/project3"
            },
            {
                title: "Data Visualization Dashboard",
                description: "Interactive dashboard for business analytics with real-time data updates. Includes custom charts and export functionality.",
                tech: ["React", "D3.js", "Power BI", "Python"],
                link: "https://github.com/yourusername/project4"
            },
            {
                title: "Task Management System",
                description: "Kanban-style task management with drag-and-drop, team collaboration, and deadline tracking features.",
                tech: ["React", "Firebase", "Material-UI"],
                link: "https://github.com/yourusername/project5"
            },
            {
                title: "Weather Forecasting App",
                description: "Mobile-responsive weather application with 7-day forecast, location-based alerts, and historical data visualization.",
                tech: ["JavaScript", "React", "OpenWeather API"],
                link: "https://github.com/yourusername/project6"
            },
            {
                title: "Blockchain Voting System",
                description: "Secure and transparent voting platform using blockchain technology. Ensures vote integrity and anonymity.",
                tech: ["Solidity", "React", "Web3.js", "Ethereum"],
                link: "https://github.com/yourusername/project7"
            },
            {
                title: "Image Classification Model",
                description: "Deep learning model for multi-class image classification with 92% accuracy on test dataset.",
                tech: ["Python", "TensorFlow", "OpenCV", "NumPy"],
                link: "https://github.com/yourusername/project8"
            },
            {
                title: "Social Media Analytics Tool",
                description: "Automated tool for tracking social media metrics, sentiment analysis, and engagement insights.",
                tech: ["Python", "Pandas", "Matplotlib", "Twitter API"],
                link: "https://github.com/yourusername/project9"
            },
            {
                title: "Portfolio CMS",
                description: "Content management system for developers to showcase their work with customizable themes and SEO optimization.",
                tech: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
                link: "https://github.com/yourusername/project10"
            }
        ],

        openSource: [
            {
                title: "React Component Library",
                description: "Contributed 15+ reusable components to popular UI library. Fixed critical accessibility issues.",
                repo: "https://github.com/library/components",
                contributions: "45 commits, 12 PRs merged"
            },
            {
                title: "Python Data Science Toolkit",
                description: "Added new statistical analysis functions and improved documentation. Maintained backward compatibility.",
                repo: "https://github.com/toolkit/datascience",
                contributions: "28 commits, 8 PRs merged"
            },
            {
                title: "Open Source API Framework",
                description: "Implemented authentication middleware and rate limiting features. Improved API response time by 30%.",
                repo: "https://github.com/framework/api",
                contributions: "32 commits, 10 PRs merged"
            },
            {
                title: "Machine Learning Models Repository",
                description: "Contributed pre-trained models for NLP tasks and created comprehensive tutorials.",
                repo: "https://github.com/ml/models",
                contributions: "20 commits, 6 PRs merged"
            }
        ],

        technicalCertifications: [
            { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", link: "https://cert-link.com/1" },
            { name: "Google Cloud Professional Developer", issuer: "Google Cloud", link: "https://cert-link.com/2" },
            { name: "MongoDB Certified Developer", issuer: "MongoDB University", link: "https://cert-link.com/3" },
            { name: "Oracle Certified Java Programmer", issuer: "Oracle", link: "https://cert-link.com/4" },
            { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", link: "https://cert-link.com/5" },
            { name: "TensorFlow Developer Certificate", issuer: "TensorFlow", link: "https://cert-link.com/6" },
            { name: "React Advanced Certification", issuer: "Meta", link: "https://cert-link.com/7" },
            { name: "Docker Certified Associate", issuer: "Docker", link: "https://cert-link.com/8" },
            { name: "Kubernetes Administrator", issuer: "CNCF", link: "https://cert-link.com/9" },
            { name: "Data Science Professional", issuer: "IBM", link: "https://cert-link.com/10" }
        ],

        participationCertificates: [
            { name: "Global Hackathon 2024 - Winner", event: "TechCrunch Disrupt", link: "https://cert-link.com/11" },
            { name: "AI/ML Challenge - 2nd Place", event: "Google DevFest", link: "https://cert-link.com/12" },
            { name: "Code Marathon 2023", event: "GitHub Universe", link: "https://cert-link.com/13" },
            { name: "Cyber Security CTF - Top 10", event: "DEF CON", link: "https://cert-link.com/14" },
            { name: "Innovation Challenge Finalist", event: "Microsoft Ignite", link: "https://cert-link.com/15" }
        ],

        skills: {
            webDevelopment: [
                { name: "HTML5", icon: "🌐" },
                { name: "CSS3", icon: "🎨" },
                { name: "JavaScript", icon: "⚡" },
                { name: "Bootstrap", icon: "🅱️" },
                { name: "React", icon: "⚛️" }
            ],
            backendFrameworks: [
                { name: "Spring Boot", icon: "🍃" },
                { name: "Firebase", icon: "🔥" }
            ],
            dataAnalysis: [
                { name: "Python", icon: "🐍" },
                { name: "Pandas", icon: "🐼" },
                { name: "NumPy", icon: "🔢" },
                { name: "Matplotlib", icon: "📊" },
                { name: "Excel", icon: "📈" },
                { name: "Power BI", icon: "📉" },
                { name: "Tableau", icon: "📱" }
            ],
            mlDataScience: [
                { name: "Scikit Learn", icon: "🤖" },
                { name: "PyTorch", icon: "🔥" },
                { name: "R", icon: "📊" }
            ],
            databases: [
                { name: "MongoDB", icon: "🍃" },
                { name: "MySQL", icon: "🐬" }
            ],
            devOps: [
                { name: "Git", icon: "📦" },
                { name: "Docker", icon: "🐳" },
                { name: "Postman", icon: "📮" }
            ],
            ides: [
                { name: "VS Code", icon: "💻" },
                { name: "IntelliJ", icon: "🧠" }
            ]
        }
    };

    return (
        <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-black bg-opacity-95 z-50 border-b border-red-900">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-red-600 font-bold text-3xl" style={{ fontFamily: 'Impact, sans-serif' }}>
                        PORTFOLIO
                    </div>
                    <div className="flex gap-8">
                        {['home', 'about', 'experience', 'projects', 'opensource', 'skills', 'certifications', 'competitions'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-white hover:text-red-600 transition-colors capitalize font-medium"
                            >
                                {item === 'opensource' ? 'Open Source' : item === 'certifications' ? 'Tech Certs' : item === 'competitions' ? 'Competitions' : item}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Home Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-red-900 to-black opacity-50"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-7xl font-bold mb-4 text-red-600" style={{ fontFamily: 'Impact, sans-serif' }}>
                        {portfolioData.name}
                    </h1>
                    <p className="text-2xl mb-8 text-gray-300">{portfolioData.headline}</p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mb-8">
                        <a href={`mailto:${portfolioData.email}`} className="transform hover:scale-110 transition-transform">
                            <div className="bg-red-600 p-4 rounded-full hover:bg-red-700">
                                <Mail size={32} />
                            </div>
                        </a>
                        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                            <div className="bg-red-600 p-4 rounded-full hover:bg-red-700">
                                <Github size={32} />
                            </div>
                        </a>
                        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                            <div className="bg-red-600 p-4 rounded-full hover:bg-red-700">
                                <Linkedin size={32} />
                            </div>
                        </a>
                    </div>

                    {/* Download Resume Button */}
                    <a href={portfolioData.resumeLink} download className="block mb-6">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg flex items-center gap-2 mx-auto transform hover:scale-105 transition-transform font-bold text-lg">
                            <Download size={24} />
                            Download Resume
                        </button>
                    </a>

                    {/* View My Work Button */}
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="block mx-auto bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-transform"
                    >
                        View My Work
                    </button>

                </div>
            </section>

            {/* About Me Section */}
            <section id="about" className="min-h-screen flex items-center py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-bold mb-8 text-red-600 border-b-4 border-red-600 pb-4">About Me</h2>
                    <div className="bg-gray-900 p-8 rounded-lg border-2 border-red-900 transform hover:scale-105 transition-transform">
                        <p className="text-xl leading-relaxed text-gray-300">
                            {portfolioData.aboutMe}
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-12 text-red-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <Briefcase size={48} />
                        Experience
                    </h2>
                    <div className="space-y-6">
                        {portfolioData.experience.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900 transition-all"
                            >
                                <h3 className="text-2xl font-bold text-red-500">{exp.title}</h3>
                                <p className="text-lg text-gray-400 mb-2">{exp.company} | {exp.duration}</p>
                                <p className="text-gray-300">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-12 text-red-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <Code size={48} />
                        Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {portfolioData.projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800 hover:border-red-600 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900 transition-all"
                            >
                                <h3 className="text-2xl font-bold mb-3 text-red-500">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="bg-red-900 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-500 hover:text-red-400 flex items-center gap-2 font-semibold"
                                >
                                    View Project <ExternalLink size={18} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Source Contributions */}
            <section id="opensource" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-12 text-red-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <GitBranch size={48} />
                        Open Source Contributions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {portfolioData.openSource.map((contrib, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800 hover:border-red-600 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900 transition-all"
                            >
                                <h3 className="text-2xl font-bold mb-3 text-red-500">{contrib.title}</h3>
                                <p className="text-gray-300 mb-3">{contrib.description}</p>
                                <p className="text-sm text-gray-400 mb-4">📊 {contrib.contributions}</p>
                                <a
                                    href={contrib.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-500 hover:text-red-400 flex items-center gap-2 font-semibold"
                                >
                                    View Repository <ExternalLink size={18} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="min-h-screen py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-12 text-red-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <Star size={48} />
                        Languages & Tools
                    </h2>

                    <div className="space-y-8">
                        {/* Web Development */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-red-500">🌐 Web Development</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.webDevelopment.map((skill, i) => (
                                    <div key={i} className="bg-red-900 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                                        <span className="text-lg">{skill.icon} {skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend & Frameworks */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-red-500">⚙️ Backend & Frameworks</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.backendFrameworks.map((skill, i) => (
                                    <div key={i} className="bg-red-900 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                                        <span className="text-lg">{skill.icon} {skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Data Analysis Tools */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-red-500">🧮 Data Analysis Tools</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.dataAnalysis.map((skill, i) => (
                                    <div key={i} className="bg-red-900 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                                        <span className="text-lg">{skill.icon} {skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Machine Learning & Data Science */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-red-500">🧠 Machine Learning & Data Science</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.mlDataScience.map((skill, i) => (
                                    <div key={i} className="bg-red-900 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                                        <span className="text-lg">{skill.icon} {skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Databases */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-red-500">🛢️ Databases</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.databases.map((skill, i) => (
                                    <div key={i} className="bg-red-900 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                                        <span className="text-lg">{skill.icon} {skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DevOps, Version Control & API Tools */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-red-500">🧩 DevOps, Version Control & API Tools</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.devOps.map((skill, i) => (
                                    <div key={i} className="bg-red-900 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                                        <span className="text-lg">{skill.icon} {skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* IDEs & Editors */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-red-500">💻 IDEs & Editors</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.ides.map((skill, i) => (
                                    <div key={i} className="bg-red-900 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                                        <span className="text-lg">{skill.icon} {skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Certifications */}
            <section id="certifications" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-12 text-red-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <Award size={48} />
                        Technical Certifications
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolioData.technicalCertifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800 hover:border-red-600 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900 transition-all"
                            >
                                <div className="text-4xl mb-3">🏆</div>
                                <h3 className="text-xl font-bold mb-2 text-red-500">{cert.name}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{cert.issuer}</p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-500 hover:text-red-400 flex items-center gap-2 font-semibold text-sm"
                                >
                                    View Certificate <ExternalLink size={16} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Participation Certificates */}
            <section id="competitions" className="min-h-screen py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-12 text-red-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <Award size={48} />
                        Competition Participation
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolioData.participationCertificates.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800 hover:border-red-600 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900 transition-all"
                            >
                                <div className="text-4xl mb-3">🎖️</div>
                                <h3 className="text-xl font-bold mb-2 text-red-500">{cert.name}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{cert.event}</p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-500 hover:text-red-400 flex items-center gap-2 font-semibold text-sm"
                                >
                                    View Certificate <ExternalLink size={16} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black border-t border-red-900 py-8 text-center">
                <p className="text-gray-500">© 2026 {portfolioData.name}. All rights reserved.</p>
                <p className="text-gray-600 text-sm mt-2">Built with React & Tailwind CSS</p>
            </footer>
        </div>
    );
}