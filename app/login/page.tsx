"use client";

import type React from "react";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear errors when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }

    if (errors.general) {
      setErrors({ ...errors, general: "" });
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      rememberMe: checked,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({ ...errors, general: "" });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, let's simulate a successful login with specific credentials
      // and an error for other credentials
      if (
        formData.email === "demo@example.com" &&
        formData.password === "password123"
      ) {
        // Successful login
        router.push("/");
      } else {
        // Failed login
        setErrors({
          ...errors,
          general:
            "Invalid email or password. Try demo@example.com / password123",
        });
      }
    } catch {
      setErrors({
        ...errors,
        general: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1f2128] text-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-bold tracking-tight">
          Sign in to your account
        </h1>
        <p className="mt-2 text-center text-sm text-gray-400">
          Or{" "}
          <Link
            href="/signup"
            className="text-[rgb(4,206,250)] hover:underline"
          >
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 px-6 py-8 sm:rounded-xl sm:px-10">
          {errors.general && (
            <div className="mb-6 p-4 rounded-md bg-red-900/20 border border-red-800 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-300">{errors.general}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-200"
              >
                Email address
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-[#1f2128] border-gray-700 pl-10 focus:border-[rgb(4,206,250)] focus:ring-[rgb(4,206,250)] text-white ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-200"
                >
                  Password
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-[rgb(4,206,250)] hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`bg-[#1f2128] border-gray-700 pl-10 pr-10 focus:border-[rgb(4,206,250)] focus:ring-[rgb(4,206,250)] text-white ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500 hover:text-gray-300" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center">
              <Checkbox
                id="remember-me"
                checked={formData.rememberMe}
                onCheckedChange={handleCheckboxChange}
                className="border-gray-600 text-[rgb(4,206,250)]"
              />
              <Label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Remember me
              </Label>
            </div>

            <div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  "Sign in"
                )}
              </Button>
            </div>
          </form>

          {/* <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#282a33] text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <Button
                variant="outline"
                className="bg-[#1f2128] border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.0003 2C6.47731 2 2.00031 6.477 2.00031 12C2.00031 16.991 5.65731 21.128 10.4383 21.879V14.89H7.89831V12H10.4383V9.797C10.4383 7.291 11.9313 5.907 14.2153 5.907C15.3103 5.907 16.4543 6.102 16.4543 6.102V8.562H15.1923C13.9503 8.562 13.5623 9.333 13.5623 10.124V12H16.3363L15.8933 14.89H13.5623V21.879C18.3433 21.129 22.0003 16.99 22.0003 12C22.0003 6.477 17.5233 2 12.0003 2Z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="outline"
                className="bg-[#1f2128] border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.0003 2C6.47731 2 2.00031 6.477 2.00031 12C2.00031 17.523 6.47731 22 12.0003 22C17.5233 22 22.0003 17.523 22.0003 12C22.0003 6.477 17.5233 2 12.0003 2ZM12.0003 3.5C16.7053 3.5 20.5003 7.295 20.5003 12C20.5003 16.705 16.7053 20.5 12.0003 20.5C7.29531 20.5 3.50031 16.705 3.50031 12C3.50031 7.295 7.29531 3.5 12.0003 3.5ZM18.4703 6.872L15.0003 10.343V7H13.5003V13H19.5003V11.5H16.1573L19.6283 8.029L18.4703 6.872ZM8.00031 11.5C6.61931 11.5 5.50031 12.619 5.50031 14C5.50031 15.381 6.61931 16.5 8.00031 16.5C9.38131 16.5 10.5003 15.381 10.5003 14C10.5003 12.619 9.38131 11.5 8.00031 11.5Z" />
                </svg>
                <span className="sr-only">Google</span>
              </Button>
              <Button
                variant="outline"
                className="bg-[#1f2128] border-gray-700 hover:bg-[rgba(4,206,250,0.1)] text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div> */}
        </Card>
      </div>
    </div>
  );
}
