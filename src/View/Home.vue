<template>
  <div
    :class="{ dark: isDarkMode }"
    class="min-h-screen bg-background text-foreground transition-colors duration-300"
  >
    <!-- Loading Screen (unchanged) -->
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div class="relative">
        <div
          class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"
        ></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="text-primary text-xl">{{ Strings.CK }}</span>
        </div>
      </div>
    </div>

    <!-- Navigation Bar -->
    <nav
      class="bg-background/80 backdrop-blur-xl p-4 fixed w-full z-10 border-b border-border"
    >
      <div class="container mx-auto flex justify-between items-center">
        <a href="" class="text-2xl font-bold text-primary"><chethankodenkiriAvatar /></a>
        <div class="flex items-center gap-4">
          <div class="hidden md:flex space-x-4">
            <Button
              v-for="item in menuItems"
              :key="item"
              variant="ghost"
              asChild
            >
              <a :href="`#${item.toLowerCase()}`">{{ item }}</a>
            </Button>
          </div>
          <Button
            @click="toggleDarkMode"
            variant="ghost"
            class="hidden md:flex"
          >
            <SunIcon v-if="isDarkMode" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </Button>
          <Button @click="toggleMenu" variant="ghost" class="md:hidden">
            <MenuIcon v-if="!isMenuOpen" class="w-6 h-6" />
            <XIcon v-else class="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-20 bg-background/95 backdrop-blur-sm md:hidden"
    >
      <div class="flex flex-col items-center justify-center h-full space-y-4">
        <Button
          v-for="item in menuItems"
          :key="item"
          variant="ghost"
          asChild
          @click="toggleMenu"
        >
          <a :href="`#${item.toLowerCase()}`">{{ item }}</a>
        </Button>
      </div>
    </div>

    <!-- Dark Mode Toggle for Mobile -->
    <Button
      @click="toggleDarkMode"
      variant="outline"
      class="md:hidden fixed top-1/2 -translate-y-1/2 right-0 p-2 z-30 rounded-l-md"
    >
      <SunIcon v-if="isDarkMode" class="w-5 h-5" />
      <MoonIcon v-else class="w-5 h-5" />
    </Button>

    <!-- First-time Dark Mode Message -->
    <div
      v-if="showDarkModeMessage && !isLoading"
      class="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-background border border-border rounded-md shadow-lg p-4 max-w-sm w-full text-center"
    >
      <p class="mb-2">{{ Strings.DARK_MODE_TOGGLE_WARNING }}</p>
      <div class="flex justify-center space-x-2"></div>
      <Button @click="closeDarkModeMessage" variant="ghost" class="mt-2">
        {{ Strings.DISSMISS }}
      </Button>
    </div>

    <main class="pt-16">
      <!-- Hero Section -->
      <section
        class="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div class="hero-bg-shapes absolute inset-0 z-0">
          <div
            class="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse"
          ></div>
          <div
            class="absolute bottom-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse delay-1000"
          ></div>
        </div>

        <div class="text-center">
          <h1
            class="hero-title text-4xl md:text-7xl font-bold mb-4 text-primary animate-fadeIn"
          >
            {{ Strings.CHETHAN_KODENKIRI }}
          </h1>
          <p
            class="hero-subtitle text-xl md:text-3xl text-muted-foreground animate-fadeIn animation-delay-200"
          >
            {{ Strings.SSE }}
          </p>
          <div
            class="mt-8 h-32 md:h-48 flex justify-center animate-fadeIn animation-delay-400"
          >
            <img
              src="./Adventure Time.gif"
              alt="GIF"
              class="h-full"
            />
          </div>
          <div
            class="mt-8 flex justify-center space-x-4 animate-fadeIn animation-delay-600"
          >
            <a
              href="https://github.com/ChethanKodenkiri"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon class="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              href="https://leetcode.com/u/chethan_kodenkiri/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted-foreground hover:text-primary transition-colors"
            >
              <SquareCode class="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              href="www.linkedin.com/in/chethan-kodenkiri"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedinIcon class="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a
              href="mailto:chethankodenkiri@gmail.com"
              class="text-muted-foreground hover:text-primary transition-colors"
            >
              <MailIcon class="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </section>

      <div class="container mx-auto px-4 py-16">
        <!-- About Section -->
        <section id="about" class="mb-16 scroll-mt-16">
          <Card>
            <CardHeader>
              <CardTitle class="text-3xl font-bold text-center"
                >{{ Strings.ABOUT_ME }}</CardTitle
              >
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground text-center max-w-2xl mx-auto">
               {{ Strings.DESCRIPTION }}
              </p>
            </CardContent>
          </Card>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="mb-32 scroll-mt-16">
          <h2 class="text-4xl font-bold mb-16 text-center text-primary">
            {{Strings.SKILLS}}
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="skill in skills" :key="skill.name" class="group">
              <Card
                class="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
              >
                <CardContent
                  class="p-6 flex flex-col items-center justify-center h-full relative"
                >
                  <h3 class="text-xl font-semibold mb-4">{{ skill.name }}</h3>
                  <div class="w-full h-4 bg-muted rounded-full overflow-hidden">
                    <div
                      :class="skill.color"
                      class="h-full rounded-full transition-all duration-1000 ease-out"
                      :style="{ width: `${skillLevels[skill.name]}%` }"
                    ></div>
                  </div>
                  <div
                    class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  ></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <!-- Experience Section -->
        <section id="experience" class="mb-16 scroll-mt-16">
          <h2 class="text-3xl font-bold mb-8 text-center text-primary">
            {{ Strings.EXP }}
          </h2>
          <div class="space-y-8">
            <Card
              v-for="(exp, index) in experiences"
              :key="index"
              class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <CardContent class="p-6">
                <div class="flex items-center mb-4">
                  <BriefcaseIcon class="w-6 h-6 mr-2 text-primary" />
                  <h3 class="text-xl font-semibold">
                    {{ exp.role }} at {{ exp.company }}
                  </h3>
                </div>
                <p class="text-muted-foreground mb-4">{{ exp.duration }}</p>
                <ul class="list-disc list-inside text-muted-foreground">
                  <li v-for="(highlight, hIndex) in exp.highlights" :key="hIndex" 
                      class="opacity-0 transform translate-y-4"
                      :class="{'animate-fadeIn': !isLoading}"
                      :style="{ animationDelay: `${hIndex * 100 + 200}ms` }">
                    {{ highlight }}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-20 scroll-mt-16">
          <h2 class="text-4xl font-bold text-center mb-16 text-primary">
            {{ Strings.PROJECTS }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              v-for="project in projects"
              :key="project.name"
              class="transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent class="p-6 flex flex-col h-full">
                <h3 class="text-2xl font-bold mb-4">{{ project.name }}</h3>
                <p class="text-muted-foreground mb-4 flex-grow">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tech in project.tech"
                    :key="tech"
                    class="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary"
                  >
                    {{ tech }}
                  </span>
                </div>
                <a
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-primary hover:underline mt-auto"
                >
                  {{ Strings.VIEW_PROJECT }}<LinkIcon class="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        <!-- Certifications Section -->
        <section id="certifications" class="mt-16 scroll-mt-16">
          <h2 class="text-3xl font-bold mb-8 text-center text-primary">
            {{ Strings.CERT }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              v-for="cert in certifications"
              :key="cert.name"
              class="transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent class="p-6">
                <div class="flex items-center mb-4">
                  <AwardIcon class="w-6 h-6 mr-2 text-primary" />
                  <h3 class="text-xl font-semibold">{{ cert.name }}</h3>
                </div>
                <p class="text-muted-foreground">
                   {{ Strings.ISSUED_BY }} {{ cert.issuer }}
                </p>
                <p class="text-muted-foreground mt-2">Date: {{ cert.date }}</p>
                <a
                  :href="cert.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-4 inline-flex items-center text-primary hover:underline"
                >
                   {{ Strings.VIEW_CERT }} <LinkIcon class="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer
      class="bg-background/80 backdrop-blur-xl p-8 mt-16 border-t border-border"
    >
      <div class="container mx-auto text-center">
        <p class="text-muted-foreground">
          &copy;  {{ Strings.FOOTER }}
          <span class="inline-block animate-pulse text-destructive"
            >&hearts;</span
          >
        </p>
      </div>
    </footer>

    <!-- Scroll to Top Button -->
    <Button
      @click="scrollToTop"
      variant="default"
      class="fixed bottom-4 right-4 p-2 transition-opacity duration-300"
      :class="{ 'opacity-0': !showScrollTop, 'opacity-100': showScrollTop }"
    >
      <ArrowUpIcon class="w-6 h-6" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  SunIcon,
  MoonIcon,
  BriefcaseIcon,
  AwardIcon,
  ArrowUpIcon,
  LinkIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MenuIcon,
  SquareCode,
  XIcon,
} from "lucide-vue-next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import chethankodenkiriAvatar from "@/components/chethankodenkiriAvatar.vue";
import {Strings} from "@/lib/Strings"

const isDarkMode = ref(false);
const isLoading = ref(true);
const showScrollTop = ref(false);
const isMenuOpen = ref(false);
const showDarkModeMessage = ref(false);
const menuItems = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Certifications",
];

const skills = [
  { name: "React Js", color: "bg-green-500" },
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "TypeScript", color: "bg-blue-500" },
  { name: "Node Js", color: "bg-green-600" },
  { name: "Java", color: "bg-purple-500" },
  { name: "Python", color: "bg-blue-600" },
  { name: "DSA", color: "bg-blue-100" },
];

const skillLevels: any = ref({
  TypeScript: 90,
  JavaScript: 90,
  "React Js":90,
  "Node Js": 80,
  Java:80,
  Python: 20,
  DSA: 70,
});

const projects = [
  {
    name: "Developer Roadmap",
    description:
      "Interactive roadmaps, guides and other educational content to help developers grow in their careers.",
    tech: [
      "TypeScript",
      "Astro",
      "JavaScript",
      "HTML/CSS",
      "Shell"
    ],
    link: "https://roadmap.sh/",
  },
  {
    name: "AI Chat Bot",
    description:
      "The chatbot is user-friendly with a clean and intuitive interface and features responsive design, ensuring seamless functionality across devices.",
    tech: ["React", "Open AI", "GenAI", "TypeScript", "Node Js", "HTML/CSS", "JavaScript","Express","Mongo DB"],
    link: "https://github.com/ChethanKodenkiri/AI_ChatBot",
  },
  {
    name: "Jogger E-Commerce Website",
    description: "The Jogger E-commerce Website is an e-commerce platform for selling sports and gym wear",
    tech: ["React js", "TypeScript", "Node js","Express js","Mongo DB", "Strip API"],
    link: "https://github.com/ChethanKodenkiri/Jogger-Ecommerce-Website",
  },
  {
    name: "Memorize Game",
    description: "An interactive game built with JavaScript, where players memorize and replicate sequences of displayed colors. It features dynamic sequence generation, real-time input validation, and responsive design.",
    tech: ["Javascript","JQuery","HTML","CSS"],
    link: "https://chethankodenkiri.github.io/Memorize_Game/",
  },
];

const experiences = [
  {
    company: "Persistent Systems Limited",
    role: "Senior Software Engineer",
    duration: "April 2024 – Present",
    highlights: [
      "Frontend lead for CARE Ratings' Rating Module using React, TypeScript, Redux Toolkit, MUI, and RTK Query.",
      "Built modular and reusable UI components aligned with financial domain standards.",
      "Integrated RTK Query to streamline API interactions, reducing boilerplate code and improving maintainability.",
      "Collaborated with backend and QA teams to deliver seamless and high-quality user experiences.",
    ],
  },
  {
    company: "Persistent Systems Limited",
    role: "Software Engineer",
    duration: "Jan 2022 – March 2024",
    highlights: [
      "Developed the Digital Savings Platform (DSP) for Hodge Bank enabling clients to open and manage financial accounts.",
      "Improved operational efficiency by 30% through reusable React components and microservices-based architecture.",
      "Achieved 95% unit test coverage with over 300 Jest tests, ensuring robust code quality.",
      "Reduced application load times by 15% and minimized production issues by 40% through optimization and debugging.",
      "Integrated AWS services for secure authentication, storage, and notification handling.",
    ],
  },
];


const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "February 2024",
    link: "https://www.credly.com/badges/a1452847-7326-48e7-b153-7c8c1b3d5901/linked_in_profile",
  },
  {
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    date: "June 2023",
    link: "https://www.credly.com/badges/f9a23c74-aece-4261-b4e1-1c56fe2f3df0/public_url",
  },
];

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
  applyTheme();
};

const applyTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500;
};

const animateSkills = () => {
  skills.forEach((skill) => {
    const targetLevel = Math.floor(Math.random() * 21) + 60; 
    const interval = setInterval(() => {
      if (skillLevels.value[skill.name] < targetLevel) {
        skillLevels.value[skill.name]++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  });
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeDarkModeMessage = () => {
  showDarkModeMessage.value = false;
  localStorage.setItem("darkModeMessageShown", "true");
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  setTimeout(() => {
    isLoading.value = false;
    document.body.style.overflow = "visible";
    animateSkills();
  }, 2000);

  // Check if dark mode message has been shown before
  const darkModeMessageShown = localStorage.getItem("darkModeMessageShown");
  if (!darkModeMessageShown) {
    showDarkModeMessage.value = true;
  }

  // Check system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");
  isDarkMode.value =
    savedTheme === "dark" || (savedTheme === null && prefersDark);
  applyTheme();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.perspective {
  perspective: 1000px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.scroll-mt-16 {
  scroll-margin-top: 4rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-subtitle {
    font-size: 1.25rem;
  }
}
</style>
