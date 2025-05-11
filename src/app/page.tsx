"use client";

import SmallCard from './components/SmallCard';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  // Example data for SmallCard components
  const projectCards = [
    {
      title: "Personal Website",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS featuring light/dark mode.",
      tags: [{ name: "Next.js" }, { name: "React" }, { name: "Tailwind CSS" }],
      icon: "file-icon-1.svg",
      link: "/projects/personal-website",
    },
    {
      title: "Weather App",
      description: "A weather application that shows current conditions and forecasts based on location.",
      tags: [{ name: "TypeScript" }, { name: "API" }, { name: "Next.js" }],
      icon: "file-icon-2.svg",
      link: "/projects/weather-app",
    },
    {
      title: "E-commerce Store",
      description: "An online shopping platform with product catalog, cart, and checkout features.",
      tags: [{ name: "React" }, { name: "Redux" }, { name: "Stripe" }],
      icon: "file-icon-3.svg",
      link: "/projects/ecommerce",
    },
  ];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCards.map((card, index) => (
            <SmallCard 
              key={index}
              title={card.title}
              description={card.description}
              tags={card.tags}
              icon={card.icon}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
