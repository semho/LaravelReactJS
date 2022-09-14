import React from "react";

type TSizes = 50 | 40 | 30 | 24 | 20 | 16 | 15 | 12 | 8;

interface ICloseProps {
  size?: TSizes;
  onClick: (value: React.SetStateAction<boolean>) => void;
}

export function CloseIcon({ size = 24, onClick }: ICloseProps) {
  const viewBoxString = `0 0 ${size} ${size}`;

  return (
    <div
      className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
      onClick={() => onClick(false)}
    >
      <svg
        className="h-8 w-8 text-gray-600"
        viewBox={viewBoxString}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
  );
}
