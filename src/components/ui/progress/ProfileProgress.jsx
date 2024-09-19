import React from "react";

const CircleProgress = ({ currentStep, totalSteps, size = 60, strokeWidth = 6 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (currentStep / totalSteps) * 100;
  const offset = circumference - (progress / 100) * circumference;

  // Calculate the position of the moving dot on the progress circle
  const angle = (progress / 100) * 360;
  const dotX = size / 2 + radius * Math.cos((angle - 90) * (Math.PI / 180));
  const dotY = size / 2 + radius * Math.sin((angle - 90) * (Math.PI / 180));

  return (
    <div
      className="flex justify-center items-center"
      style={{ backgroundColor: '#2b6b28', borderRadius: '50%', width: `${size}px`, height: `${size}px` }}
    >
      <svg
        width={size}
        height={size}
        className="transform rotate-[-90deg]" // Rotating to start progress from the top
      >
        {/* Background circle */}
        <circle
          stroke="#1f3f1f" // Dark green background circle
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          stroke="#16ef4d" // Light green progress circle
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500 ease-out"
        />
        {/* Moving dot */}
        {/* <circle
          cx={dotX}
          cy={dotY}
          r={strokeWidth / 2}
          fill="white"
          stroke="none"
        /> */}
      </svg>
      {/* Display current step over total steps */}
      <span className="absolute text-white font-bold text-sm">
        {currentStep}/{totalSteps}
      </span>
    </div>
  );
};

export default CircleProgress;