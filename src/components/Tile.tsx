import React from "react";

interface TileProps {
  children: React.ReactNode;
  className?: string;
}

const Tile: React.FC<TileProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-gray-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default Tile;
