import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "solid";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "outline",
  className = "",
  ...props
}) => {
  const baseClass =
    "rounded-[50px] text-base font-semibold leading-[19.2px] px-[22px] py-[12px] border border-[#04CEFA] transition duration-[0.3s]";

  const variants = {
    outline:
      "text-[#04CEFA] hover:text-black hover:bg-[linear-gradient(94.02deg,_#04CEFA_25.52%,_#A1DBEA_102.01%)]",
    solid:
      "text-black bg-[linear-gradient(94.02deg,_#04CEFA_25.52%,_#A1DBEA_102.01%)]",
  };

  return (
    <button
      className={`${baseClass} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
