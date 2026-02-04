import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape, onClick, children }) => {
  // Mapping sizes to Tailwind padding and text classes
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-5 py-2 text-md",
    large: "px-8 py-3 text-lg",
  };

  // Mapping shapes to Tailwind border-radius classes
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white transition-all hover:bg-blue-700 active:scale-95 ${sizeClasses[size]} ${shapeClasses[shape]}`}
    >
      {children}
    </button>
  );
};

export default Button;