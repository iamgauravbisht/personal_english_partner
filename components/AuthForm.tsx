"use client";
import React, { useState } from "react";

interface AuthFormProps {
  defaultValue: "login" | "signup";
}

const AuthForm: React.FC<AuthFormProps> = ({ defaultValue }) => {
  const [mode, setMode] = useState<"login" | "signup">(defaultValue);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "login" ? "signup" : "login"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-customprimary">
      <div className="p-8 rounded shadow-md bg-customsecondary">
        <div className="mb-4 flex justify-center items-center bg-customprimary rounded-3xl">
          <div className="flex items-center justify-center mx-4">
            <button
              className={`px-4 py-2 rounded ${
                mode === "login"
                  ? "bg-customprimary text-customsecondary"
                  : "bg-customsecondary border-2 "
              }`}
              onClick={() => setMode("login")}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 rounded ${
                mode === "signup"
                  ? "bg-customprimary text-customsecondary "
                  : "bg-customsecondary border-2 "
              }`}
              onClick={() => setMode("signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          {mode === "signup" && (
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
          )}
          <div>
            <button
              type="submit"
              className="w-full text-customsecondary py-2 rounded-md border-2 bg-customprimary hover:bg-blue-600"
            >
              {mode === "login" ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
