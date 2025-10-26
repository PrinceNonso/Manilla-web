import React from "react";

export default function NotchedCard() {
  return (
    <div className="relative">
      {/* Main Card with SVG Clip Path */}
      <div className="relative">
        <svg width="0" height="0">
          <defs>
            <clipPath id="notchClip" clipPathUnits="objectBoundingBox">
              <path
                d="M 0.05,0 
             L 0.95,0 
             Q 1,0 1,0.05 
             L 1,0.95 
             Q 1,1 0.95,1 
             L 0.45,1 
             Q 0.42,1 0.42,0.97
             L 0.42,0.85      
             Q 0.42,0.82 0.39,0.82 
             L 0.05,0.82      
             Q 0,0.82 0,0.77  
             L 0,0.05 
             Q 0,0 0.05,0 Z"
              />
            </clipPath>
          </defs>
        </svg>

        <div
          className="bg-white p-32 w-full px-4 md:w-96 shadow-xl"
          style={{
            clipPath: "url(#notchClip)",
            paddingBottom: "120px",
          }}>
          {/* Blogs Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900 text-white px-10 py-3 rounded-full text-sm font-medium">
              Blogs
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Manilla Blog
          </h2>

          {/* Description */}
          <p className="text-center text-gray-600 leading-relaxed">
            Stay informed with expert tips, product updates, and real-world
            stories designed to help you manage money better
          </p>
        </div>
      </div>

      {/* All Blogs Button - Positioned in the notch */}
      <button
        className="absolute bg-yellow-400 hover:bg-yellow-500 transition-colors text-gray-900 font-semibold px-6 sm:px-20  md:px-8 py-5 rounded-2xl flex items-center gap-3 shadow-lg"
        style={{
          bottom: "8px",
        }}>
        <svg
          className="w-0.5 sm:w-1.5 md:w-3 md:h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" strokeWidth="2" />
          <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
        </svg>
        All Blogs
      </button>
    </div>
  );
}
