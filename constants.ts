import React from 'react';
import type { ProfileData } from './types';
import {
    IconCpp,
    IconPython,
    IconVerilog,
    IconReact,
    IconNode,
    IconExpress,
    IconZustand,
    IconSocketIO,
    IconChip,
    IconGit,
    IconDocker,
    IconGithub
} from './components/SkillIcons';

export const PROFILE_DATA: ProfileData = {
  main: {
    name: "Amandeep Tripathy",
    titles: [
      "Telecommunication Engineer",
      "Full-Stack Developer",
      "Business Analyst",
      "IoT Innovator",
    ],
    shortIntro: "I build tangible value by bridging the gap between advanced technology and real-world business needs.",
  },
  contact: {
    email: "amandeeptripathy2025@yahoo.com",
    phone: "+91 6370548129",
    linkedin: "https://www.linkedin.com/in/amandeep-tripathy-373a82291",
    github: "https://github.com/Instapark-star",
    whatsapp: "https://wa.me/916370548129",
  },
  about: {
    summary:
      "I am a dynamic and quick learner with a strong passion for exploring emerging technologies and business strategy. As a collaborative team player, I contribute with enthusiasm and dedication to drive projects forward. Highly motivated and ambitious, I aim to grow as a business analyst while enhancing my technical expertise. Committed to excelling in the ever-evolving IT industry, I thrive on challenges, innovation, and creating business value through technology.",
    languages: {
      fluent: ["English", "Hindi", "Odia", "Kannada"],
      limited: ["Bengali", "Punjabi", "French", "Kiswahili"],
    },
    leadership: [
      "Deputy Class Representative, BMSCE (2023-2024)",
      "Business Development Manager, Bytedocker",
      "Member, BMSMUNSOC",
      "Co-founder, Rootzeros",
      "Creator, YouTube & Beat Kingdom",
      "Founder, Instapark",
    ],
  },
  experience: [
    {
      role: "Deputy Class Representative",
      company: "BMSCE",
      period: "2023 - 2024",
      description: [
        "Coordinated academic activities and campus events for a class of over 100 students.",
      ],
    },
    {
      role: "Business Development Manager",
      company: "Bytedocker",
      period: "2025",
      description: [
        "Selected for a future role focusing on market research and client outreach.",
      ],
    },
    {
      role: "Co-founder",
      company: "Rootzeros",
      period: "Ongoing",
      description: [
        "Co-founded a financial content startup, successfully growing the platform to over 1,000 monthly visitors.",
      ],
    },
    {
      role: "Founder",
      company: "Instapark",
      period: "2023 - 2024",
      description: [
        "Led the design and implementation of an IoT-based smart parking system.",
        "Authored and published a research paper based on the project.",
      ],
      github: "https://github.com/Instapark-star",
    },
  ],
  projects: [
    {
      title: "Blurchat",
      description: [
        "A real-time social chat application featuring WebSockets for instant messaging.",
        "Includes anonymous chatrooms, message reactions, and interactive games.",
      ],
      tech: ["WebSocket", "React", "Node.js", "Express"],
      imageUrl: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "MohallaMart",
      description: [
        "A hyperlocal e-commerce platform with features like user tipping, delivery tracking, and ratings.",
        "Successfully deployed and hosted via GitHub Pages.",
      ],
      tech: ["React", "JavaScript", "Firebase", "GitHub Pages"],
      imageUrl: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Looped (Concept Project)",
      description: [
        "A social productivity platform designed to explore habit loops, gamification, and collaborative workflows.",
      ],
      tech: ["UI/UX Design", "Concept", "Product Strategy"],
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    },
  ],
  education: [
    {
      degree: "B.Tech in Electronics & Telecommunication Engineering",
      institution: "B.M.S. College of Engineering",
      location: "Bangalore, India",
      period: "2023 - Present",
      details: "GPA: 7.78/10.0 (till 2nd year)",
    },
    {
      degree: "Class XII (Science)",
      institution: "MEDHA PU Science College",
      location: "Hubli, India",
      period: "2023",
      details: "Percentage: 84.9%",
    },
    {
      degree: "Class X",
      institution: "B.J.E.M School",
      location: "Bhubaneswar, India",
      period: "2021",
      details: "Percentage: 91.8%",
    },
  ],
  skills: {
    programming: [
        { name: "C++", icon: React.createElement(IconCpp) },
        { name: "Python", icon: React.createElement(IconPython) },
        { name: "Verilog HDL", icon: React.createElement(IconVerilog) },
    ],
    web: [
        { name: "React", icon: React.createElement(IconReact) },
        { name: "Node.js", icon: React.createElement(IconNode) },
        { name: "Express", icon: React.createElement(IconExpress) },
        { name: "Zustand", icon: React.createElement(IconZustand) },
        { name: "Socket.IO", icon: React.createElement(IconSocketIO) },
    ],
    tools: [
      { name: "Vivado", icon: React.createElement(IconChip) },
      { name: "Keilvision (ARM)", icon: React.createElement(IconChip) },
      { name: "VLSI Design", icon: React.createElement(IconChip) },
      { name: "Git", icon: React.createElement(IconGit) },
      { name: "Docker", icon: React.createElement(IconDocker) },
      { name: "GitHub Pages", icon: React.createElement(IconGithub) },
    ],
  },
  research: [
    {
      title: "A Smart Parking System with IoT Sensors",
      description:
        "Designed and implemented an IoT-based parking system (Instapark), and co-authored the accompanying research publication.",
    },
    {
      title: "Enhanced Deepfake Detection through Temporal Analysis and Face Recognition",
      description:
        "Co-authored with Dr. Rajeshwari Hegde, this paper explores advanced techniques for identifying deepfake media.",
    },
  ],
};
