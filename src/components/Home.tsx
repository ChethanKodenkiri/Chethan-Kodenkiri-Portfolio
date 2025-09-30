import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Briefcase,
  Award,
  ArrowUp,
  Link as LinkIcon,
  Github,
  Linkedin,
  Mail,
  Menu,
  SquareCode,
  X,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import ChethanKodenkiriAvatar from './ChethanKodenkiriAvatar';
import { Strings } from '../lib/Strings';
import adventureTimeGif from '../assets/Adventure Time.gif';

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDarkModeMessage, setShowDarkModeMessage] = useState(false);
  const [skillLevels, setSkillLevels] = useState({
    TypeScript: 0,
    JavaScript: 0,
    'React Js': 0,
    'Node Js': 0,
    Java: 0,
    Python: 0,
    DSA: 0,
  });

  const menuItems = [
    'About',
    'Skills',
    'Experience',
    'Projects',
    'Certifications',
  ];

  const skills = [
    { name: 'React Js', color: 'bg-green-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'TypeScript', color: 'bg-blue-500' },
    { name: 'Node Js', color: 'bg-green-600' },
    { name: 'Java', color: 'bg-purple-500' },
    { name: 'Python', color: 'bg-blue-600' },
    { name: 'DSA', color: 'bg-blue-100' },
  ];

  const projects = [
    {
      name: 'Developer Roadmap',
      description:
        'Interactive roadmaps, guides and other educational content to help developers grow in their careers.',
      tech: ['TypeScript', 'Astro', 'JavaScript', 'HTML/CSS', 'Shell'],
      link: 'https://roadmap.sh/',
    },
    {
      name: 'AI Chat Bot',
      description:
        'The chatbot is user-friendly with a clean and intuitive interface and features responsive design, ensuring seamless functionality across devices.',
      tech: ['React', 'Open AI', 'GenAI', 'TypeScript', 'Node Js', 'HTML/CSS', 'JavaScript', 'Express', 'Mongo DB'],
      link: 'https://github.com/ChethanKodenkiri/AI_ChatBot',
    },
    {
      name: 'Jogger E-Commerce Website',
      description: 'The Jogger E-commerce Website is an e-commerce platform for selling sports and gym wear',
      tech: ['React js', 'TypeScript', 'Node js', 'Express js', 'Mongo DB', 'Strip API'],
      link: 'https://github.com/ChethanKodenkiri/Jogger-Ecommerce-Website',
    },
    {
      name: 'Memorize Game',
      description: 'An interactive game built with JavaScript, where players memorize and replicate sequences of displayed colors. It features dynamic sequence generation, real-time input validation, and responsive design.',
      tech: ['Javascript', 'JQuery', 'HTML', 'CSS'],
      link: 'https://chethankodenkiri.github.io/Memorize_Game/',
    },
  ];

  const experiences = [
    {
      company: 'Persistent Systems Limited',
      role: 'Senior Software Engineer',
      duration: 'April 2024 – Present',
      highlights: [
        'Frontend lead for CARE Ratings\' Rating Module using React, TypeScript, Redux Toolkit, MUI, and RTK Query.',
        'Built modular and reusable UI components aligned with financial domain standards.',
        'Integrated RTK Query to streamline API interactions, reducing boilerplate code and improving maintainability.',
        'Collaborated with backend and QA teams to deliver seamless and high-quality user experiences.',
      ],
    },
    {
      company: 'Persistent Systems Limited',
      role: 'Software Engineer',
      duration: 'Jan 2022 – March 2024',
      highlights: [
        'Developed the Digital Savings Platform (DSP) for Hodge Bank enabling clients to open and manage financial accounts.',
        'Improved operational efficiency by 30% through reusable React components and microservices-based architecture.',
        'Achieved 95% unit test coverage with over 300 Jest tests, ensuring robust code quality.',
        'Reduced application load times by 15% and minimized production issues by 40% through optimization and debugging.',
        'Integrated AWS services for secure authentication, storage, and notification handling.',
      ],
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services (AWS)',
      date: 'February 2024',
      link: 'https://www.credly.com/badges/a1452847-7326-48e7-b153-7c8c1b3d5901/linked_in_profile',
    },
    {
      name: 'Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'June 2023',
      link: 'https://www.credly.com/badges/f9a23c74-aece-4261-b4e1-1c56fe2f3df0/public_url',
    },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    applyTheme();
  };

  const applyTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 500);
  };

  const animateSkills = () => {
    const targetLevels = {
      TypeScript: 90,
      JavaScript: 90,
      'React Js': 90,
      'Node Js': 80,
      Java: 80,
      Python: 20,
      DSA: 70,
    };

    skills.forEach((skill) => {
      const targetLevel = targetLevels[skill.name as keyof typeof targetLevels];
      const interval = setInterval(() => {
        setSkillLevels((prev) => {
          if (prev[skill.name as keyof typeof prev] < targetLevel) {
            return {
              ...prev,
              [skill.name]: prev[skill.name as keyof typeof prev] + 1,
            };
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 20);
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeDarkModeMessage = () => {
    setShowDarkModeMessage(false);
    localStorage.setItem('darkModeMessageShown', 'true');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'visible';
      animateSkills();
    }, 2000);

    // Check if dark mode message has been shown before
    const darkModeMessageShown = localStorage.getItem('darkModeMessageShown');
    if (!darkModeMessageShown) {
      setShowDarkModeMessage(true);
    }

    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const shouldBeDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);
    setIsDarkMode(shouldBeDark);
    applyTheme();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    applyTheme();
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${
        isDarkMode ? 'dark' : ''
      }`}
    >
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-primary text-xl">{Strings.CK}</span>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="bg-background/80 backdrop-blur-xl p-4 fixed w-full z-10 border-b border-border">
        <div className="container mx-auto flex justify-between items-center">
          <a href="" className="text-2xl font-bold text-primary">
            <ChethanKodenkiriAvatar />
          </a>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex space-x-4">
              {menuItems.map((item) => (
                <Button key={item} variant="ghost" asChild>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </Button>
              ))}
            </div>
            <Button
              onClick={toggleDarkMode}
              variant="ghost"
              className="hidden md:flex"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button onClick={toggleMenu} variant="ghost" className="md:hidden">
              {!isMenuOpen ? <Menu className="w-6 h-6" /> : <X className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-20 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            {menuItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                asChild
                onClick={toggleMenu}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Dark Mode Toggle for Mobile */}
      <Button
        onClick={toggleDarkMode}
        variant="outline"
        className="md:hidden fixed top-1/2 -translate-y-1/2 right-0 p-2 z-30 rounded-l-md"
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>

      {/* First-time Dark Mode Message */}
      {showDarkModeMessage && !isLoading && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-background border border-border rounded-md shadow-lg p-4 max-w-sm w-full text-center">
          <p className="mb-2">{Strings.DARK_MODE_TOGGLE_WARNING}</p>
          <div className="flex justify-center space-x-2"></div>
          <Button onClick={closeDarkModeMessage} variant="ghost" className="mt-2">
            {Strings.DISSMISS}
          </Button>
        </div>
      )}

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
          <div className="hero-bg-shapes absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="text-center">
            <h1 className="hero-title text-4xl md:text-7xl font-bold mb-4 text-primary animate-fadeIn">
              {Strings.CHETHAN_KODENKIRI}
            </h1>
            <p className="hero-subtitle text-xl md:text-3xl text-muted-foreground animate-fadeIn animation-delay-200">
              {Strings.SSE}
            </p>
            <div className="mt-8 h-32 md:h-48 flex justify-center animate-fadeIn animation-delay-400">
              <img src={adventureTimeGif} alt="GIF" className="h-full" />
            </div>
            <div className="mt-8 flex justify-center space-x-4 animate-fadeIn animation-delay-600">
              <a
                href="https://github.com/ChethanKodenkiri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a
                href="https://leetcode.com/u/chethan_kodenkiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SquareCode className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/chethan-kodenkiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a
                href="mailto:chethankodenkiri@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* About Section */}
          <section id="about" className="mb-16 scroll-mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">
                  {Strings.ABOUT_ME}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                  {Strings.DESCRIPTION}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-32 scroll-mt-16">
            <h2 className="text-4xl font-bold mb-16 text-center text-primary">
              {Strings.SKILLS}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full relative">
                      <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                      <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skillLevels[skill.name as keyof typeof skillLevels]}%` }}
                        ></div>
                      </div>
                      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-16 scroll-mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">
              {Strings.EXP}
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-6 h-6 mr-2 text-primary" />
                      <h3 className="text-xl font-semibold">
                        {exp.role} at {exp.company}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.duration}</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className={`opacity-0 transform translate-y-4 ${
                            !isLoading ? 'animate-fadeIn' : ''
                          }`}
                          style={{ animationDelay: `${hIndex * 100 + 200}ms` }}
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 scroll-mt-16">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">
              {Strings.PROJECTS}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.name}
                  className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline mt-auto"
                    >
                      {Strings.VIEW_PROJECT}
                      <LinkIcon className="w-4 h-4 ml-2" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="mt-16 scroll-mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">
              {Strings.CERT}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert) => (
                <Card
                  key={cert.name}
                  className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Award className="w-6 h-6 mr-2 text-primary" />
                      <h3 className="text-xl font-semibold">{cert.name}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {Strings.ISSUED_BY} {cert.issuer}
                    </p>
                    <p className="text-muted-foreground mt-2">Date: {cert.date}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-primary hover:underline"
                    >
                      {Strings.VIEW_CERT} <LinkIcon className="w-4 h-4 ml-2" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background/80 backdrop-blur-xl p-8 mt-16 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; {Strings.FOOTER}
            <span className="inline-block animate-pulse text-destructive">
              &hearts;
            </span>
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        variant="default"
        className={`fixed bottom-4 right-4 p-2 transition-opacity duration-300 ${
          showScrollTop ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default Home;
