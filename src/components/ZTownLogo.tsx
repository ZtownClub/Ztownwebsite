interface ZTownLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const ZTownLogo = ({ className = "", size = "md" }: ZTownLogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-xl bg-primary flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3/4 h-3/4"
      >
        <path
          d="M8 10H32L12 30H32"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary-foreground"
        />
      </svg>
    </div>
  );
};

export default ZTownLogo;
