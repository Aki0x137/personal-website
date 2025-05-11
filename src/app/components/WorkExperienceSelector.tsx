"use client";

import { useState } from 'react';
import { useTheme } from './ThemeProvider';

// Types for our work experience data
interface TechStack {
  name: string;
}

interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  techStack: TechStack[];
  responsibilities: string[];
}

interface WorkExperienceSelectorProps {
  experiences: WorkExperience[];
}

export default function WorkExperienceSelector({ experiences }: WorkExperienceSelectorProps) {
  const [selectedExperience, setSelectedExperience] = useState<string>(experiences[0]?.id || '');
  const { theme } = useTheme();
  
  // Find the currently selected experience
  const currentExperience = experiences.find(exp => exp.id === selectedExperience);

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
      {/* Company Selection Column */}
      <div className="flex flex-col space-y-2 md:w-1/3">
        {experiences.map((experience) => (
          <button
            key={experience.id}
            onClick={() => setSelectedExperience(experience.id)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 
              ${experience.id === selectedExperience 
                ? 'bg-[var(--card-title-hover)] text-white dark:bg-[#53FFC1] dark:text-[#192E39] font-bold' 
                : 'bg-[var(--card-bg)] text-[var(--card-text)] hover:bg-[var(--card-bg-hover)]'}`}
          >
            <span className="text-md font-medium">{experience.company}</span>
            {experience.id === selectedExperience ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 9L12 16L19 9" 
                  stroke={theme === 'dark' ? '#192E39' : 'white'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" 
                  stroke={theme === 'dark' ? 'white' : 'black'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Experience Details Column */}
      {currentExperience && (
        <div className="bg-[var(--card-bg)] rounded-3xl p-6 flex-1 md:w-2/3 transition-all duration-300">
          <div className="space-y-4">
            {/* Role and Period */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#3186FF] dark:text-[#3186FF]">
                {currentExperience.role}
              </h3>
              <p className="text-[var(--card-text)]">
                {currentExperience.period}
              </p>
            </div>
            
            {/* Tech Stack */}
            <div>
              <p className="text-[var(--card-text)] font-bold mb-2">Tech-Stack: </p>
              <div className="flex flex-wrap gap-3">
                {currentExperience.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-sm px-3 py-1 rounded-full bg-opacity-10 font-bold
                      text-[var(--card-title-hover)] bg-[var(--card-title-hover)]
                      dark:text-[#53FFC1] dark:bg-[#53FFC1] dark:bg-opacity-10"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Responsibilities */}
            <div className="mt-4 space-y-3">
              {currentExperience.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1 w-4 h-4 rounded-full border-2 flex-shrink-0
                    border-[var(--card-title-hover)] dark:border-[#53FFC1]">
                  </div>
                  <p className="text-[var(--card-text)]">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}