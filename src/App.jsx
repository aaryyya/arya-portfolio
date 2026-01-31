// import React, { useState } from 'react';
import { Mail, Github, Linkedin, Download, ExternalLink, Award, Briefcase, BookOpen, GitBranch, GraduationCap, Code2 } from 'lucide-react';

export default function NetflixPortfolio() {
    // const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // setActiveSection(sectionId);
        }
    };

    const closeMenu = () => {
        const checkbox = document.getElementById("nav-toggle");
        if (checkbox) checkbox.checked = false;
    };


    const portfolioData = {
        name: "Arya Patil",
        headline: "Data Science and Analysis Enthusiast | Backend Developer ",
        aboutMe: "Passionate backend Java developer, with a flair for data science and machine learning. I thrive on turning data into insights and building scalable solutions that make an impact!",
        email: "aryampatil2005@gmail.com",
        github: "https://github.com/aaryyya",
        linkedin: "https://www.linkedin.com/in/arya--patil/",
        resumeLink: "https://yourresume.com/resume.pdf",

        experience: [
            {
                title: "Product Intern",
                company: "Erfindin",
                duration: "Jan 2025 - May 2025",
                description: "Developed VisionGuard, an innovative Android application and smart glasses system aimed at assisting blind individuals during emergencies. The application uses Firebase, ESP8266, and Node.js to provide SOS Notifications- Instantly alerts nearby responders. Real-Time Location Tracking: Continuously monitors user location for safety.Object DetectionEmploys YOLOv5 to identify obstacles in the environment."
            }
        ],

        projects: [

            {
                title: "Sleep Efficiency Prediction and Analysis",
                description: "Sleep Efficiency Prediction and Analysis analyzes and predicts Sleep Efficiency (ratio of time asleep to time in bed) using machine learning techniques on lifestyle and sleep-stage data, and deploys the final model as an interactive Shiny App.",
                tech: ["R", "Shiny"],
                link: "https://github.com/aaryyya/sleep-efficiency-analysis-using-R"
            },
            {
                title: "DineSync",
                description: "Developed a full-stack QR Ordering System with a real-time KDS using WebSockets, a Manager Dashboard for order management, and a mobile-first UI utilizing Redux Toolkit for live cart updates and location-based order validation.",
                tech: ["Java", "React", "Springboot", "JDBC"],
                link: "https://github.com/aaryyya/dinesync"
            },
            {
                title: "Decoding Data Careers: A Power BI Analysis",
                description: "Decoding Data Careers, provides an in-depth analysis of various data-related careers using Power BI. The analysis focuses on understanding career satisfaction, salary trends, and other key metrics across different countries📊.",
                tech: ["PowerBI", "DAX"],
                link: "https://github.com/aaryyya/decoding-data-careers-a-powerbi-analysis"
            },
            {
                title: "ReWear: Community Clothing Exchange",
                description: "ReWear is a web-based platform that enables users to exchange unused clothing through direct swaps or a point-based redemption system.",
                tech: ["HTML", "CSS", "JavaScript", "SQL", "React"],
                link: "https://github.com/aaryyya/ReWear"
            },
            {
                title: "QuizzIQ",
                description: "QuizzIQ is a dynamic and interactive web application designed for creating and playing engaging quizzes on various subjects.",
                tech: ["HTML", "CSS", "BootStrap", "JavaScript"],
                link: "https://projects-indol-six.vercel.app/home.html"
            },
            {
                title: "TCP-IP based Client-Server Food Ordering System",
                description: "Computer Networking ",
                tech: ["C", "TCP-IP Protocol"],
                link: "https://github.com/aaryyya/TCP-IP-based-Client-Server-Food-Ordering-System"
            }
        ],

        openSource: [
            {
                title: "jabref",
                description: "Contributed in 2+ issues ",
                repo: "https://github.com/JabRef/jabref/pull/14619",
                contributions: "45+ commits, 1 PR merged"
            },
            {
                title: "gofr",
                description: "GoFr is designed to simplify microservice development, with key focuses on Kubernetes deployment and out-of-the-box observability.",
                repo: "https://github.com/gofr-dev/gofr/pull/2525",
                contributions: "28+ commits, 1 PR merged"
            },
            {
                title: "Appledore",
                description: "Helped building a simple and efficient graph library in modern C++ which supports directed/undirected graphs with customizable edge type and vertices, designed for performance and ease of use.",
                repo: "https://github.com/SharonIV0x86/Appledore/issues?q=state%3Aclosed%20is%3Apr%20author%3A%40me",
                contributions: "100+ commits, 2 PRs merged"
            },
            // {
            //     title: "Machine Learning Models Repository",
            //     description: "Contributed pre-trained models for NLP tasks and created comprehensive tutorials.",
            //     repo: "https://github.com/ml/models",
            //     contributions: "20 commits, 6 PRs merged"
            // }
        ],

        technicalCertifications: [
            { name: " Generative AI: Enhance your Data Analytics Career", issuer: "IBM-Coursera", link: "https://coursera.org/share/7e05abb29ba8c2ad02879c756611b283" },
            { name: "Generative AI and LLMs: Architecture and Data Preparation", issuer: "IBM-Coursera", link: "https://coursera.org/share/9e8a0d37922ac389cbf2d154b012f30b" },
            { name: "IBM DevOps and Software Engineering", issuer: "MongoDB University", link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/OWBN43WXFL3C" },
            { name: "Machine Learning with Python", issuer: "IBM-Coursera", link: "https://www.coursera.org/account/accomplishments/certificate/W1UYSJW09P9Z" },
            { name: "GeeksforGeeks API Bootcamp: Summer Edition - Sponsored by Postman", issuer: "GeeksforGeeks", link: "https://media.geeksforgeeks.org/courses/certificates/c4aed87b815629b78ebc786d1eb91a35.pdf" },
            { name: "Fundamentals of Deep Learning", issuer: "NVIDIA", link: "https://learn.nvidia.com/certificates?id=uMz_XapsTCe_imUEgt_TEQ" },
            { name: "Java (Basics) by HackerRank", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/f3267a856144" },
            { name: "Master Microsoft Power BI", issuer: "LinkedIn", link: "https://www.linkedin.com/learning/certificates/30193738ea087489406e162bfe77e605986e24a55c6d1efc6d0a7c0aa23c5310?trk=share_certificate" },
            { name: "Advance Your Skills in Natural Language Processing", issuer: "LinkedIn", link: "https://www.linkedin.com/learning/certificates/07c07949a8e98497cf559e4fd45baa176c8f1993d56e7c04c0ead5abf799b304?trk=share_certificate" },
            // { name: "Data Science Professional", issuer: "IBM", link: "https://cert-link.com/10" }
        ],

        participationCertificates: [
            { name: "Tata Imagination Challenge 2024: Student Track", event: "Tata Imagination Challenge 2024", link: "https://unstop.com/certificate-preview/47d919ca-f886-4701-92e6-d2864e590769" },
            { name: "TVS Credit EPIC 6.0 - IT Track.", event: "Round 2 Qualifier", link: "https://unstop.com/certificate-preview/ca55dbf8-9a11-4c4d-859e-8715f6d59469" },
            { name: "Myntra: WeForShe HackerRamp 2025.", event: "Round 3 Qualifier", link: "https://unstop.com/certificate-preview/3736b1e3-079b-41b7-a062-34d266561698" },
            { name: "Adobe India Hackathon", event: "Round 2 Qulifier", link: "https://unstop.com/certificate-preview/4ab91358-4c04-4ae0-a1eb-e57a767cc275" },
            // { name: "Innovation Challenge Finalist", event: "Microsoft Ignite", link: "https://cert-link.com/15" }
        ],

        skills: {
            webDevelopment: [
                { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "Bootstrap", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
                { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
            ],
            backendFrameworks: [
                { name: "Spring Boot", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                { name: "Firebase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
            ],
            dataAnalysis: [
                { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "Pandas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
                { name: "NumPy", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
                { name: "Matplotlib", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
                { name: "Excel", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
                { name: "Power BI", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
                { name: "Tableau", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg" }
            ],


            mlDataScience: [
                { name: "Scikit Learn", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
                { name: "PyTorch", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                { name: "R", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" }
            ],

            databases: [
                { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
            ],

            devOps: [
                { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "Postman", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
            ],

            ides: [
                { name: "VS Code", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                { name: "IntelliJ", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
                { name: "RStudio", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg" }
            ]
        }
    };

    return (
        <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-black bg-opacity-95 z-50 border-b border-red-900">

                {/* 🔑 CHECKBOX — must be here */}
                <input type="checkbox" id="nav-toggle" className="hidden peer" />

                {/* TOP BAR */}
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                    {/* Logo */}
                    <div className="text-red-600 font-bold text-3xl">
                        Arya Patil
                    </div>

                    {/* Hamburger */}
                    <label
                        htmlFor="nav-toggle"
                        className="md:hidden text-white cursor-pointer"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8">
                        {[
                            "home",
                            "about",
                            "experience",
                            "projects",
                            "opensource",
                            "skills",
                            "certifications",
                            "competitions",
                        ].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="text-white hover:text-red-600 transition-colors capitalize font-medium"
                            >
                                {item === "opensource"
                                    ? "Open Source"
                                    : item === "certifications"
                                        ? "Certifications"
                                        : item === "competitions"
                                            ? "Competitions"
                                            : item}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ✅ MOBILE MENU — sibling of checkbox */}
                <div className="md:hidden max-h-0 peer-checked:max-h-[500px] overflow-hidden transition-all duration-500 border-t border-red-900 bg-black">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {[
                            "home",
                            "about",
                            "experience",
                            "projects",
                            "opensource",
                            "skills",
                            "certifications",
                            "competitions",
                        ].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={closeMenu}
                                className="text-white hover:text-red-600 transition-colors capitalize font-medium"
                            >
                                {item === "opensource"
                                    ? "Open Source"
                                    : item === "certifications"
                                        ? "Certifications"
                                        : item === "competitions"
                                            ? "Competitions"
                                            : item}
                            </a>
                        ))}
                    </div>
                </div>

            </nav>



            {/* Home Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-red-900 to-black opacity-50"></div>
                <div className="relative z-10 text-center px-4">
                    <p className="split-hover">
                        <span aria-hidden="true">ARYA PATIL</span>
                        <span aria-hidden="true">ARYA PATIL</span>
                        ARYA PATIL
                    </p>

                    <p className="text-2xl mb-8 text-gray-300">{portfolioData.headline}</p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mb-8">
                        <a href={`mailto:${portfolioData.email}`} className="transform hover:scale-110 transition-transform">
                            <div className="bg-white p-4 rounded-full hover:bg-gray-200">
                                <Mail size={32} className="text-red-600" />
                            </div>
                        </a>

                        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                            <div className="bg-white p-4 rounded-full hover:bg-gray-200">
                                <Github size={32} className="text-red-600" />
                            </div>
                        </a>

                        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                            <div className="bg-white p-4 rounded-full hover:bg-gray-200">
                                <Linkedin size={32} className="text-red-600" />
                            </div>
                        </a>
                    </div>


                    {/* Download Resume Button */}
                    <a href="/Arya_Patil_VIT_.pdf" download className="block mb-6">

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
                    <h2 className="text-5xl font-bold mb-8 text-white-600 border-b-4 border-red-600 pb-4">About Me</h2>
                    <div className="bg-gray-900 p-8 rounded-lg border-2 border-red-900 transform hover:scale-105 transition-transform">
                        <p className="text-xl leading-relaxed text-gray-300">
                            {portfolioData.aboutMe}
                        </p>
                    </div>
                </div>
            </section>

            {/* below is time line of education */}
            <section id="education" className="py-20 bg-black text-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-12 text-white-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <GraduationCap size={48} />
                        Education
                    </h2>


                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-transparent via-red-400/30 to-transparent"></div>

                        {/* Item 1 */}
                        <div className="mb-16 flex justify-between items-center w-full">
                            <div className="w-5/12"></div>

                            <div className="z-10 w-6 h-6 bg-red-600 rounded-full shadow-lg shadow-red-900"></div>

                            <div className="w-5/12 bg-gray-900 p-6 rounded-lg border border-gray-800 
        hover:border-red-600 transition-all duration-700 hover:scale-105
        hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                                <h3 className="text-xl font-bold text-red-500">10th Grade</h3>
                                <p className="text-gray-300 mt-2">Universal Knowledge School, Satara. </p>
                                <p className="text-gray-400 text-sm mt-1">
                                    Year: 2020 • Marks: 89.4%
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="mb-16 flex justify-between items-center w-full flex-row-reverse">
                            <div className="w-5/12"></div>

                            <div className="z-10 w-6 h-6 bg-red-600 rounded-full shadow-lg shadow-red-900"></div>

                            <div className="w-5/12 bg-gray-900 p-6 rounded-lg border border-gray-800 
        hover:border-red-600 transition-all duration-700 hover:scale-105
        hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                                <h3 className="text-xl font-bold text-red-500">12th Grade</h3>
                                <p className="text-gray-300 mt-2">Ligade Patil Junior College of Science, Karad.</p>
                                <p className="text-gray-400 text-sm mt-1">
                                    Year: 2022 • Marks: 84.17%
                                </p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="mb-16 flex justify-between items-center w-full">
                            <div className="w-5/12"></div>

                            <div className="z-10 w-6 h-6 bg-red-600 rounded-full shadow-lg shadow-red-900"></div>

                            <div className="w-5/12 bg-gray-900 p-6 rounded-lg border border-gray-800 
        hover:border-red-600 transition-all duration-700 hover:scale-105
        hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                                <h3 className="text-xl font-bold text-red-500">University</h3>
                                <p className="text-gray-300 mt-2">Vishwakarma Institute of Technology, Pune.</p>
                                <p className="text-gray-400 text-sm mt-1">
                                    Year: 2026 • 8.19
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Above is education timeline */}

            {/* Experience Section */}
            <section id="experience" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-12 text-white-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <Briefcase size={48} />
                        Experience
                    </h2>
                    <div className="space-y-6">
                        {portfolioData.experience.map((exp, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-600 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900 transition-all duration-700"
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
                    <h2 className="text-5xl font-bold mb-12 text-white-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <Code2 size={48} />
                        Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {portfolioData.projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800 hover:border-red-600 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900 transition-all duration-700"
                            >
                                <h3 className="text-2xl font-bold mb-3 text-white-500">{project.title}</h3>
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
                                    <Github size={18} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Source Contributions */}
            <section id="opensource" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-12 text-white-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <GitBranch size={48} />
                        Open Source Contributions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {portfolioData.openSource.map((contrib, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800 hover:border-red-600 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900 transition-all duration-700"
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
                                    View Repository <Github size={18} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="min-h-screen py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-12 text-white-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <Code2 size={48} />
                        Languages & Tools
                    </h2>

                    <div className="space-y-8">
                        {/* Web Development */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-white-500">🌐 Web Development</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.webDevelopment.map((skill, i) => (
                                    <div key={i} className="bg-red-950 px-4 py-2 rounded-lg hover:bg-red-900 transition-colors">
                                        <img
                                            src={skill.iconUrl}
                                            alt={skill.name}
                                            title={skill.name}
                                            className="w-10 h-10"
                                        />

                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend & Frameworks */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-white-500">⚙️ Backend & Frameworks</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.backendFrameworks.map((skill, i) => (
                                    <div key={i} className="bg-red-950 px-4 py-2 rounded-lg hover:bg-red-900 transition-colors">
                                        <img
                                            src={skill.iconUrl}
                                            alt={skill.name}
                                            title={skill.name}
                                            className="w-10 h-10"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Data Analysis Tools */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-white-500">🧮 Data Analysis Tools</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.dataAnalysis.map((skill, i) => (
                                    <div key={i} className="bg-red-950 px-4 py-2 rounded-lg hover:bg-red-900 transition-colors">
                                        <img
                                            src={skill.iconUrl}
                                            alt={skill.name}
                                            title={skill.name}
                                            className="w-10 h-10"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Machine Learning & Data Science */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-white-500">🧠 Machine Learning & Data Science</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.mlDataScience.map((skill, i) => (
                                    <div key={i} className="bg-red-950 px-4 py-2 rounded-lg hover:bg-red-900 transition-colors">
                                        <img
                                            src={skill.iconUrl}
                                            alt={skill.name}
                                            title={skill.name}
                                            className="w-10 h-10"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Databases */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-white-500">🛢️ Databases</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.databases.map((skill, i) => (
                                    <div key={i} className="bg-red-950 px-4 py-2 rounded-lg hover:bg-red-900 transition-colors">
                                        <img
                                            src={skill.iconUrl}
                                            alt={skill.name}
                                            title={skill.name}
                                            className="w-10 h-10"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DevOps, Version Control & API Tools */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-white-500">🧩 DevOps, Version Control & API Tools</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.devOps.map((skill, i) => (
                                    <div key={i} className="bg-red-950 px-4 py-2 rounded-lg hover:bg-red-900 transition-colors">
                                        <img
                                            src={skill.iconUrl}
                                            alt={skill.name}
                                            title={skill.name}
                                            className="w-10 h-10"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* IDEs & Editors */}
                        <div className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 text-white-500">💻 IDEs & Editors</h3>
                            <div className="flex flex-wrap gap-4">
                                {portfolioData.skills.ides.map((skill, i) => (
                                    <div key={i} className="bg-red-950 px-4 py-2 rounded-lg hover:bg-red-900 transition-colors">
                                        <img
                                            src={skill.iconUrl}
                                            alt={skill.name}
                                            title={skill.name}
                                            className="w-10 h-10"
                                        />
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
                    <h2 className="text-5xl font-bold mb-12 text-white-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <Award size={48} />
                        Technical Certifications
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolioData.technicalCertifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800 hover:border-red-600 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900 transition-all duration-700"
                            >
                                {/* <div className="text-4xl mb-3">🏆</div> */}
                                <h3 className="text-xl font-bold mb-2 text-white-500">{cert.name}</h3>
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

            {/* this is for the blogs section */}
            <section id="blogs" className="py-24 bg-gradient-to-b from-black to-gray-900 text-center">
                <h2 className="text-4xl font-bold text-red-600 mb-6">
                    My Blogs
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                    I write about technology, data science, cybersecurity, and my learning journey.
                    Check out my blogs where I share insights, tutorials, and experiences.
                </p>

                <a
                    href="https://your-blog-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg
               hover:bg-red-700 hover:scale-110 transition-all duration-700 shadow-lg shadow-red-900"
                >
                    Visit My Blogs →
                </a>
            </section>

            {/* Above is blog section */}

            {/* Participation Certificates */}
            <section id="competitions" className="min-h-screen py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-12 text-white-600 border-b-4 border-red-600 pb-4 flex items-center gap-3">
                        <Award size={48} />
                        Competition Participation
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolioData.participationCertificates.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg border-2 border-gray-800 hover:border-red-600 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-900 transition-all"
                            >
                                {/* <div className="text-4xl mb-3">🎖️</div> */}
                                <h3 className="text-xl font-bold mb-2 text-white-500">{cert.name}</h3>
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
            <footer className="bg-black border-t border-red-900 py-10 text-center">
                {/* Social Icons */}
                <div className="flex justify-center gap-6 mb-6">

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/arya--patil/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-500 transition-all"
                    >
                        <Linkedin
                            size={26}
                            className="hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.7)] transition-all"
                        />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/aaryyya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-500 transition-all"
                    >
                        <Github
                            size={26}
                            className="hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.7)] transition-all"
                        />
                    </a>

                    {/* Blogs */}
                    <a
                        href="/blogs"
                        className="text-gray-400 hover:text-red-500 transition-all"
                    >
                        <BookOpen
                            size={26}
                            className="hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.7)] transition-all"
                        />
                    </a>

                    {/* Email */}
                    <a
                        href="aryampatil2005@gmail.com"
                        className="text-gray-400 hover:text-red-500 transition-all"
                    >
                        <Mail
                            size={26}
                            className="hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.7)] transition-all"
                        />
                    </a>
                </div>

                {/* Footer Text */}
                <p className="text-gray-500">
                    © 2026 {portfolioData.name}. All rights reserved.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                </p>
            </footer>
        </div>
    );
}