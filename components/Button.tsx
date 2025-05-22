import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "solid" | "color" | "none";
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
      "rounded-[43px] text-base font-medium leading-[19.2px] text-center text-[#1F2128] w-full capitalize flex justify-center items-center border-none px-[30px] cursor-pointer  bg-[linear-gradient(94.02deg,_#04CEFA_25.52%,_#A1DBEA_102.01%)]",
    color:
      "bg-transparent border text-white rounded-[40px] py-[10px] px-[20px] tracking-[1px] leading-[1] text-center cursor-pointer relative transition-[border] duration-150 ease-in-out mt-[7px] mr-[5px] mb-[2px]",
    none: "",
  };

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
