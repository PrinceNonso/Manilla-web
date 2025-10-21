import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItemProps {
  image: string;
  date: string;
  title: string;
}

interface CarouselItem {
  image: string;
  date: string;
  title: string;
}

const CarouselItemComponent: React.FC<CarouselItemProps> = ({
  image,
  date,
  title,
}) => (
  <div className="bg-red-500 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 w-1/2 lg:w-[calc(50%-12px)]">
    <div className="aspect-square relative overflow-hidden">
      <img src={image} alt={title} className="md:w-full md:h-full object-cover" />
    </div>
    <div className="p-4 sm:p-6">
      <p className="text-gray-500 text-xs sm:text-sm mb-2">{date}</p>
      <h3 className="text-gray-900 text-lg sm:text-xl font-semibold">
        {title}
      </h3>
    </div>
  </div>
);

const BlogCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const items: CarouselItem[] = [
    {
      image:
        "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&h=300&fit=crop",
      date: "April 18, 2022",
      title: "Few Reasons to Sell NFTs on Nico",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      date: "April 18, 2022",
      title: "Few Reasons to Sell NFTs on Nico",
    },
    {
      image:
        "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&h=300&fit=crop",
      date: "April 18, 2022",
      title: "Few Reasons to Sell NFTs on Nico",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      date: "April 18, 2022",
      title: "Few Reasons to Sell NFTs on Nico",
    },
  ];

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-7xl relative">
        {/* Carousel Container */}
        <div className="overflow-hidden px-6 sm:px-8 md:px-4">
          <div
            className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}>
            {items.map((item, index) => (
              <CarouselItemComponent key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Navigation Container */}
        <div className="mt-6 sm:mt-8 px-2 sm:px-4 flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-end gap-4">
          {/* Navigation Dots */}
          <div className="flex gap-1.5 sm:gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 sm:w-8 bg-white"
                    : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center transition-colors shadow-lg"
              aria-label="Previous slide">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center transition-colors shadow-lg"
              aria-label="Next slide">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
