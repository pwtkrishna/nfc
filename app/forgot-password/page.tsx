"use client";

import type React from "react";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, AlertCircle, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1f2128] text-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-bold tracking-tight">
          Reset your password
        </h1>
        <p className="mt-2 text-center text-sm text-gray-400">
          Enter your email address and we&apos;ll send you a link to reset your
          password.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="bg-[#282a33] border-none shadow-xl shadow-black/10 px-6 py-8 sm:rounded-xl sm:px-10">
          {!submitted ? (
            <>
              {error && (
                <div className="mb-6 p-4 rounded-md bg-red-900/20 border border-red-800 flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-300">{error}</p>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#1f2128] border-gray-700 pl-10 focus:border-[rgb(4,206,250)] focus:ring-[rgb(4,206,250)] text-white"
                      placeholder="you@example.com"
                    />
                  </div>
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
                        Sending...
                      </span>
                    ) : (
                      "Send reset link"
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <Link
                  href="/login"
                  className="text-sm text-[rgb(4,206,250)] hover:underline flex justify-center items-center"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to login
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[rgba(4,206,250,0.1)] flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-[rgb(4,206,250)]" />
                </div>
              </div>

              <h2 className="text-xl font-bold mb-4">Check your email</h2>
              <p className="text-gray-300 mb-6">
                We&apos;ve sent a password reset link to{" "}
                <span className="font-medium text-white">{email}</span>. Please
                check your inbox and follow the instructions to reset your
                password.
              </p>

              <div className="space-y-4">
                <Link href="/login">
                  <Button className="w-full bg-[rgb(4,206,250)] hover:bg-[rgb(4,186,230)] text-white">
                    Return to login
                  </Button>
                </Link>
              </div>

              <p className="mt-6 text-sm text-gray-400">
                Didn&apos;t receive the email?{" "}
                <button
                  className="text-[rgb(4,206,250)] hover:underline"
                  onClick={handleSubmit}
                >
                  Resend reset link
                </button>
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
