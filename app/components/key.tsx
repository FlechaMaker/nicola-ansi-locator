import type React from "react";

const colorMap: { [key: string]: string } = {
  pink: "#FBCFE8",
  orange: "#FDBA74",
  yellow: "#FDE68A",
  green: "#BBF7D0",
  skyblue: "#7DD3FC",
  blue: "#BFDBFE",
  purple: "#E9D5FF",
  grey: "#D1D5DB",
};

const darkColorMap: { [key: string]: string } = {
  pink: "#BE185D", // darker pink
  orange: "#EA580C", // darker orange
  yellow: "#CA8A04", // darker yellow
  green: "#059669", // darker green
  skyblue: "#0284C7", // darker skyblue
  blue: "#1D4ED8", // darker blue
  purple: "#6B21A8", // darker purple
  grey: "#4B5563", // darker grey
};

interface KeyProps {
  label: string;
  spaceChar?: string;
  leftCmdChar?: string;
  plainChar?: string;
  isHighlighted?: boolean;
  width?: string;
  keyColor?: string; // Renamed property
}

export const Key: React.FC<KeyProps> = ({
  label,
  spaceChar,
  leftCmdChar,
  plainChar,
  isHighlighted = false,
  width = "w-12",
  keyColor, // Renamed property
}) => (
  <div
    className={`
      ${width} h-12 rounded-lg border-2 relative flex items-center justify-center
      ${
        isHighlighted
          ? "bg-primary text-primary-foreground" // border-primary no longer needed
          : "bg-background"
      }
      transition-colors duration-200
    `}
    style={{
      backgroundColor: keyColor
        ? isHighlighted
          ? darkColorMap[keyColor]
          : colorMap[keyColor]
        : undefined,
      borderColor:
        isHighlighted && keyColor ? darkColorMap[keyColor] : undefined,
    }}
  >
    {label === "space" ? (
      <div className="text-xs font-medium">{label}</div>
    ) : (
      <>
        <div className="absolute top-1 left-1 text-xs font-medium text-muted-foreground">
          {label}
        </div>
        {spaceChar && (
          <div
            className={`absolute top-1 right-1 text-sm ${
              isHighlighted
                ? "text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            {spaceChar}
          </div>
        )}
        {plainChar && (
          <div
            className={`absolute bottom-1 left-1 text-sm ${
              isHighlighted
                ? "text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            {plainChar}
          </div>
        )}
        {leftCmdChar && (
          <div
            className={`absolute bottom-1 right-1 text-sm ${
              isHighlighted
                ? "text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            {leftCmdChar}
          </div>
        )}
      </>
    )}
  </div>
);
