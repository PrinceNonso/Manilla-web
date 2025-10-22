import { cn } from "@/app/lib/utils";
import React from "react";

type VerticalProgressBarProps = {
  progress: number;
  steps: number[];
  className: string;
};

export const VerticalProgressBar = ({
  progress,
  steps,
  className,
}: VerticalProgressBarProps) => {
  const stepCount = steps.length;
  const stepPositions = steps.map((_, i) => (i / (stepCount - 1)) * 100);

  // Find nearest step
  const activeStepIndex = stepPositions.findIndex(
    (pos) => progress <= pos + 2 && progress >= pos - 2
  );

  return (
    <div
      className={cn(
        "relative flex justify-center items-center z-50 ",
        className
      )}>
      {/* Track */}
      <div className="relative h-full w-2 bg-[#CECECE] rounded-full overflow-hidden ">
        {/* Filled portion */}
        <div
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-purple-400 via-blue-400 to-green-400 transition-[height] duration-500 ease-in-out"
          style={{ height: `${progress}%` }}
        />

        {/* Step markers */}
        {stepPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute left-1/2 h-1 w-6 bg-[#3F3F46] rounded"
            style={{
              top: `${pos}%`,
              transform: "translateX(-50%) translateY(-50%)",
            }}>
            {activeStepIndex === i && (
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-semibold rounded-md px-2 py-1 shadow">
                {i + 1}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
