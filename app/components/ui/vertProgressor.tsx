import React from "react";

type VerticalProgressBarProps = {
  progress: number;
  steps: number[];
};

export const VerticalProgressBar = ({
  progress,
  steps,
}: VerticalProgressBarProps) => {
  const stepCount = steps.length;
  const stepPositions = steps.map((_, i) => (i / (stepCount - 1)) * 100);

  // Find nearest step
  const activeStepIndex = stepPositions.findIndex(
    (pos) => progress <= pos + 2 && progress >= pos - 2
  );

  return (
    <div className="relative h-72 w-6 flex justify-center items-center z-50">
      {/* Track */}
      <div className="relative h-full w-1 bg-gray-200 rounded-full overflow-hidden">
        {/* Filled portion */}
        <div
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-purple-400 via-blue-400 to-green-400 transition-[height] duration-500 ease-in-out"
          style={{ height: `${progress}%` }}
        />

        {/* Step markers */}
        {stepPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-gray-400"
            style={{ top: `${pos}%`, transform: "translate(-50%, -50%)" }}>
            {activeStepIndex === i && (
              <div className="absolute left-5 top-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-semibold rounded-md px-2 py-1 shadow">
                {i + 1}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
