"use client";

import React, { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  variant?: "outline" | "solid" | "none";
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", variant = "outline", ...props }, ref) => {
    const variants = {
      outline: "w-full py-2 px-1 rounded",
      solid: "w-full",
      none: "",
    };
    return (
      <input
        ref={ref}
        type={type}
        className={clsx(
          `border-none focus:outline-none focus:border-none outline-0 ,
          ${variants[variant]}
          ${className} `
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
