"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { slides } from "@/libs/slidesData";

export default function Hero({ isDarkMode }: { isDarkMode: boolean }) {  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});
  
  // Fixed: Removed unnecessary dependency
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  // Fixed: Removed unnecessary dependency
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleImageError = (slideId: number) => {
    setImageErrors(prev => ({ ...prev, [slideId]: true }));
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full">
      {/* Carousel Container - shows one full card and partial next */}
      <div className="flex overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(-${currentSlide * 75}%)`,
            width: '133.33%' // Allows showing 1 full + 1/3 of next
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 pr-4"
              style={{ width: '75%' }} // Each slide takes 75% of viewport
            >
              <div
                className={`relative overflow-hidden rounded-2xl h-full md:h-96 ${slide.backgroundImage}`}
                style={{
                  backgroundImage: !imageErrors[slide.id] ? `url('${slide.backgroundUrl}')` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Fixed: Using Next.js Image component */}
                <Image
                  src={slide.backgroundUrl}
                  alt={`Background for ${slide.heading}`}
                  fill
                  className="hidden"
                  onError={() => handleImageError(slide.id)}
                  priority={slide.id === 1} // Prioritize first image
                />

                {/* Background overlay for better contrast */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content positioned like in the image */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  
                  <div className="pt-4">
                    <h1 className={`text-6xl text-center md:text-8xl font-bold ${slide.textColor} leading-tight drop-shadow-lg`}>
                      {slide.heading}
                    </h1>
                  </div>

                  {/* Bottom content */}
                  <div className="flex justify-between items-end">
                    
                    <div className="max-w-md">
                      <h2 className={`text-2xl font-semibold ${slide.textColor} mb-2 drop-shadow-md`}>
                        {slide.subheading}
                      </h2>
                      <p className={`text-sm ${slide.textColor} opacity-90 leading-relaxed mb-4 drop-shadow-sm`}>
                        {slide.description}
                      </p>
                    </div>

                    
                    <div className="flex-shrink-0">
                      <button className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 shadow-lg ${slide.buttonStyle}`}>
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls: Pagination (center) + Navigation (right) */}
      <div className="flex items-center justify-between mt-5 mb-10">
        {/* Empty div for spacing */}
        <div className="w-20"></div>
        
        {/* Pagination bullets (centered) */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index
                  ? "bg-gray-800"
                  : isDarkMode
                  ? "bg-gray-600"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation buttons (right) */}
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-white shadow cursor-pointer flex items-center justify-center w-8 h-8 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-white shadow cursor-pointer flex items-center justify-center w-8 h-8 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}