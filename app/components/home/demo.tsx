// "use client";

// import React, { useState } from "react";
// import { VerticalProgressBar } from "../ui/vertProgressor";

// const StepProgressDemo = () => {
//   const steps = [0, 33, 66, 100]; // Step positions
//   const [activeStep, setActiveStep] = useState(0);

//   const progress = (activeStep / (steps.length - 1)) * 100;

//   return (
//     <div className="min-h-screen flex items-center justify-center gap-8">
//       <VerticalProgressBar progress={progress} steps={steps} />

//       <div className="flex flex-col gap-4">
//         {steps.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveStep(index)}
//             className={`px-6 py-3 rounded-xl border-2 text-lg font-semibold transition-all duration-300 ${
//               activeStep === index
//                 ? "bg-blue-500 text-white border-blue-500 scale-105 shadow-md"
//                 : "bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:scale-105"
//             }`}>
//             Step {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StepProgressDemo;
