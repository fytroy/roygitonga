import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sphere, Box, Torus } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Database, Globe, Phone, MapPin, Calendar, Briefcase, GraduationCap, Award, BookOpen } from 'lucide-react';
import './App.css';

// 3D Scene Component
const Scene3D = ({ scrollY }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 32, 32]} position={[-2, 0, 0]}>
          <meshStandardMaterial color="#00f5ff" wireframe />
        </Sphere>
      </Float>
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <Box args={[1.5, 1.5, 1.5]} position={[2, 0, 0]} rotation={[scrollY * 0.01, scrollY * 0.01, 0]}>
          <meshStandardMaterial color="#ff6b6b" wireframe />
        </Box>
      </Float>
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Torus args={[1, 0.3, 16, 100]} position={[0, 2, -1]} rotation={[scrollY * 0.005, 0, scrollY * 0.01]}>
          <meshStandardMaterial color="#4ecdc4" wireframe />
        </Torus>
      </Float>
    </>
  );
};

// Navigation Component
const Navigation = ({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
          >
            Rodney Roy Gitonga
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-cyan-400' 
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = ({ scrollY }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Scene3D scrollY={scrollY} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Rodney Roy Gitonga
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-4 font-semibold">
            Innovative IT Professional
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Software Development | System Administration | Cloud Technologies
          </p>
          <p className="text-md text-gray-400 mb-8 max-w-2xl mx-auto">
            Combining technical expertise with practical problem-solving to deliver exceptional IT solutions and user support.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Explore My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-cyan-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" ref={ref} className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1576272531110-2a342fe22342?w=600"
              alt="IT Professional workspace"
              className="rounded-2xl shadow-2xl border-2 border-cyan-500/20"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Innovative IT Solutions Expert
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I bring a strong mix of IT support, software development, and system design expertise. 
              I combine technical know-how with a practical, client-focused approach to problem-solving. 
              My background in software design includes user interface planning, system architecture, 
              and translating client needs into functional solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm skilled in network and system administration across Windows and Linux platforms, 
              and well-versed with cloud tools like Office 365, Google Workspace, Git, and Docker. 
              My passion lies in ensuring seamless technical operations and providing exceptional user support.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I thrive in dynamic environments where I can apply my expertise to diagnose and resolve 
              complex issues, optimize systems, and contribute to a productive technological ecosystem.
            </p>
            
            {/* Education & Certifications Quick Info */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-cyan-500/20">
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">Education & Certifications</h4>
              <div className="space-y-2">
                <p className="text-gray-300"><strong>BSc Information Technology</strong> - Zetech University (2024)</p>
                <p className="text-gray-300"><strong>15+ Professional Certifications</strong> including AWS, ITIL, Power BI, and Cisco</p>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a href="https://www.linkedin.com/in/rodney-gitonga" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-cyan-600 rounded-full transition-colors duration-300">
                <Linkedin className="text-white" size={24} />
              </a>
              <a href="https://github.com/rodneygitonga" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-cyan-600 rounded-full transition-colors duration-300">
                <Github className="text-white" size={24} />
              </a>
              <a href="mailto:rodneyroygitonga@gmail.com" className="p-3 bg-gray-800 hover:bg-cyan-600 rounded-full transition-colors duration-300">
                <Mail className="text-white" size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const experiences = [
    {
      title: "IT Support Specialist Intern",
      company: "GULF AFRICAN BANK",
      period: "January 2025 – Present",
      description: "Providing responsive end-user support and resolving technical issues to ensure smooth day-to-day operations across banking systems.",
      achievements: [
        "Delivered on-site and remote technical support for hardware, software, and peripheral devices",
        "Assisted in maintenance and monitoring of enterprise systems including core banking applications",
        "Supported IT Service Desk operations and improved resolution times",
        "Participated in system updates, patching, and maintenance tasks"
      ]
    },
    {
      title: "Office Accountant & IT Assistant",
      company: "VOI WINNERS HOUSING COOPERATIVE SOCIETY LIMITED",
      period: "May 2024 – January 2025",
      description: "Managed dual responsibilities in financial operations and IT infrastructure management.",
      achievements: [
        "Managed daily financial operations including ledger reconciliation and budgeting",
        "Led IT infrastructure management including network setup and administration",
        "Designed and implemented digital communication strategies",
        "Proactively troubleshot IT issues ensuring minimal downtime"
      ]
    },
    {
      title: "Junior Software Developer Intern",
      company: "NUMERAL IOT LIMITED",
      period: "June 2022 – October 2022",
      description: "Developed web applications and provided comprehensive technical support in a dynamic IoT environment.",
      achievements: [
        "Developed responsive web applications using AngularJS",
        "Installed and configured Windows Server environments",
        "Managed web hosting environments using cPanel",
        "Performed hardware diagnostics and system optimization"
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-cyan-400 font-semibold">{exp.company}</h4>
                </div>
                <div className="flex items-center text-gray-300 mt-2 lg:mt-0">
                  <Calendar className="mr-2" size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const projects = [
    {
      title: "Personal Automation Dashboard",
      description: "Streamlit-based application centralizing daily tasks with crypto tracking, weather updates, AI-powered news summarization, and Google Drive integration.",
      image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=600",
      tech: ["Python", "Streamlit", "Google Gemini", "APIs", "Google Drive"],
      github: "#",
      featured: true
    },
    {
      title: "E-Commerce Data Analysis & Customer Segmentation",
      description: "Comprehensive Python script for e-commerce analytics with RFM analysis, sales trends, and customer behavior insights using synthetic data generation.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600",
      tech: ["Python", "Data Analysis", "RFM Analysis", "Visualization", "Machine Learning"],
      github: "#",
      featured: true
    },
    {
      title: "Multi-Tool System Monitor",
      description: "Command-line application for monitoring network traffic, Wi-Fi signal strength, and clipboard history with cross-platform compatibility.",
      image: "https://images.unsplash.com/photo-1528921581519-52b9d779df2b?w=600",
      tech: ["Python", "System Monitoring", "Cross-platform", "CLI", "SQLite"],
      github: "#",
      featured: true
    },
    {
      title: "SHOP YETU3D - 3D Printing Platform",
      description: "Web application for ordering pre-designed 3D prints and submitting custom design requests with file upload capabilities.",
      tech: ["Web Development", "File Upload", "E-commerce", "Custom Orders"],
      github: "#"
    },
    {
      title: "Daily System Health Reporter",
      description: "Automated Windows system health monitoring with HTML report generation and email notifications for IT administrators.",
      tech: ["Python", "Windows Server", "HTML Reports", "Email Automation", "WMI"],
      github: "#"
    },
    {
      title: "Google Drive Sync Script",
      description: "Python script for automatic folder synchronization with Google Drive using OAuth 2.0 authentication and recursive directory mirroring.",
      tech: ["Python", "Google Drive API", "OAuth 2.0", "File Sync", "Automation"],
      github: "#"
    },
    {
      title: "Terminal REST Client",
      description: "Lightweight command-line REST API client supporting multiple HTTP methods, custom headers, and response formatting.",
      tech: ["Python", "REST API", "CLI", "HTTP Client", "JSON"],
      github: "#"
    },
    {
      title: "Catch the Falling Squares Online",
      description: "Real-time web-based game with WebSocket communication, featuring client-server architecture and Pygame backend.",
      tech: ["Python", "Pygame", "WebSockets", "Real-time", "Game Development"],
      github: "#"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.github}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.github}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const skillCategories = [
    {
      title: "Operating Systems",
      icon: <Code className="text-cyan-400" size={32} />,
      skills: [
        { name: "Windows 10/11", level: 95 },
        { name: "Windows Server", level: 90 },
        { name: "Linux (Ubuntu/CentOS)", level: 88 },
        { name: "macOS", level: 85 }
      ]
    },
    {
      title: "Development",
      icon: <Database className="text-purple-400" size={32} />,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "C#", level: 85 },
        { name: "AngularJS", level: 88 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Globe className="text-green-400" size={32} />,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 92 },
        { name: "Office 365", level: 95 }
      ]
    },
    {
      title: "System Administration",
      icon: <Palette className="text-pink-400" size={32} />,
      skills: [
        { name: "Active Directory", level: 90 },
        { name: "Network Administration", level: 88 },
        { name: "System Monitoring", level: 92 },
        { name: "ITIL Processes", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 border border-cyan-500/20"
            >
              <div className="text-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-white mt-2">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
            <Award className="mr-3 text-cyan-400" size={32} />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "AWS Technical Essentials",
              "Power BI for Beginners",
              "Introduction to ITIL® V4",
              "Data Analytics Essentials - Cisco",
              "Endpoint Security - Cisco",
              "CGRC Governance, Risk & Compliance",
              "Python Essentials 1 & 2 - Cisco",
              "JavaScript Essentials 2 - Cisco",
              "Networking Devices Configuration - Cisco"
            ].map((cert, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Blog Section
const BlogSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const blogPosts = [
    {
      title: "Building My Personal Automation Dashboard with Streamlit and Python",
      date: "June 13, 2025",
      category: "Python, Automation, AI",
      excerpt: "Walk through the creation of my Personal Automation Dashboard, showcasing how Python can be leveraged for powerful personal automation with Streamlit and Google Gemini.",
      tags: ["Python", "Streamlit", "API Integration", "Google Gemini", "Automation"]
    },
    {
      title: "Understanding Network Monitoring: My Multi-Tool System Monitor Project",
      date: "June 20, 2025",
      category: "Networking, Python, System Admin",
      excerpt: "Dive deep into system monitoring with my Multi-Tool System Monitor. Discover the challenges of cross-platform compatibility and network traffic analysis.",
      tags: ["Networking", "Python", "System Monitoring", "CLI"]
    },
    {
      title: "Automating Daily Health Checks: The Daily System Health Reporter",
      date: "June 25, 2025",
      category: "Automation, Windows, System Admin",
      excerpt: "Learn how I built an automated system health reporter for Windows, covering WMI queries to secure email configurations for proactive IT management.",
      tags: ["Automation", "Windows Server", "Python", "IT Operations"]
    }
  ];

  return (
    <section id="blog" ref={ref} className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, challenges, and solutions from my projects. Deep dives into technologies, problems I solve, and lessons learned.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <BookOpen size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300">
                Read More
                <ExternalLink size={16} className="ml-2" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="contact" ref={ref} className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 border border-cyan-500/20"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="mr-4 text-cyan-400" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:rodneyroygitonga@gmail.com" className="text-cyan-400 hover:text-cyan-300">
                      rodneyroygitonga@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Phone className="mr-4 text-cyan-400" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+254705762775" className="text-cyan-400 hover:text-cyan-300">
                      +254 705 762 775
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <MapPin className="mr-4 text-cyan-400" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/rodney-gitonga" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 hover:bg-cyan-600 rounded-full transition-colors duration-300">
                  <Linkedin className="text-white" size={24} />
                </a>
                <a href="https://github.com/rodneygitonga" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 hover:bg-cyan-600 rounded-full transition-colors duration-300">
                  <Github className="text-white" size={24} />
                </a>
                <a href="mailto:rodneyroygitonga@gmail.com" className="p-3 bg-gray-700 hover:bg-cyan-600 rounded-full transition-colors duration-300">
                  <Mail className="text-white" size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'blog', 'contact'];
    const observers = sections.map(section => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        { threshold: 0.3 }
      );
      
      const element = document.getElementById(section);
      if (element) observer.observe(element);
      
      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <div className="App bg-black text-white overflow-x-hidden">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-black">
          <div className="text-2xl text-cyan-400">Loading...</div>
        </div>
      }>
        <HeroSection scrollY={scrollY} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </Suspense>
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 border-t border-cyan-500/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Rodney Roy Gitonga. All rights reserved. Built with React, Three.js & Modern Web Technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;