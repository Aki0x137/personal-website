"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

interface Tag {
  name: string;
}

interface SmallCardProps {
  title: string;
  description: string;
  tags: Tag[];
  icon: string;
  link: string;
}

export default function SmallCard({ title, description, tags, icon, link }: SmallCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <Link href={link} passHref>
      <div 
        className="group relative rounded-[25px] p-6 transition-all duration-300 cursor-pointer h-full"
        style={{ 
          backgroundColor: `var(--card-bg${isHovered ? '-hover' : ''})`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card Content */}
        <div className="flex flex-col h-full">
          {/* Icon and Title Row */}
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-6 h-6 transition-colors duration-300"
              style={{ 
                color: `var(--card-icon${isHovered ? '-hover' : ''})`,
              }}
            >
              <Image 
                src={`/icons/${icon}`} 
                alt=""
                width={24} 
                height={24}
                className="w-6 h-6 object-contain transition-all duration-300"
                style={{
                  filter: theme === 'dark' ? (isHovered ? 'invert(88%) sepia(16%) saturate(1946%) hue-rotate(105deg) brightness(109%) contrast(103%)' : 'invert(100%)') : 'none'
                }}
              />
            </div>
            <h3 
              className="text-lg font-medium transition-colors duration-300"
              style={{ 
                color: `var(--card-title${isHovered ? '-hover' : ''})`,
              }}
            >
              {title}
            </h3>
          </div>

          {/* Description */}
          <p 
            className="text-base mb-6 transition-colors duration-300 flex-grow"
            style={{ 
              color: 'var(--card-text)',
            }}
          >
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-full transition-colors duration-300"
                style={{ 
                  color: `var(--card-text-light)`,
                  border: '1px solid currentColor',
                  backgroundColor: isHovered ? (theme === 'dark' ? 'rgba(83, 255, 193, 0.1)' : 'rgba(36, 73, 140, 0.1)') : 'transparent'
                }}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}