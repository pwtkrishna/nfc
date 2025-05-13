import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "solid" | "color" | "none";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "outline",
  className = "",
  ...props
}) => {
  // const baseClass =
  //   "rounded-[50px] text-base font-semibold leading-[19.2px] px-[22px] py-[12px] border border-[#04CEFA] transition duration-[0.3s]";

  const variants = {
    outline:
      "text-[#04CEFA] hover:text-black hover:bg-[linear-gradient(94.02deg,_#04CEFA_25.52%,_#A1DBEA_102.01%)]",
    solid:
      "text-black bg-[linear-gradient(94.02deg,_#04CEFA_25.52%,_#A1DBEA_102.01%)]",
    color:
      "bg-transparent border-[1px]  text-white rounded-[40px] inline-block mt-[7px] mr-[5px] mb-[2px] ml-[0] py-[10px] px-[20px] tracking-[1px] leading-[1] text-center cursor-pointer relative transition-[border] duration-150 ease-in-out",
    none: "",
  };

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
