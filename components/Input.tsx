"use client";

import React, { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "border-none focus:outline-none focus:border-none outline-0",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
