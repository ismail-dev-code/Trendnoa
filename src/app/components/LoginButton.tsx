"use client";

import { signIn } from "next-auth/react";
import { LogIn } from "lucide-react";
import React from "react";

interface LoginButtonProps {

  onSuccess?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onSuccess }) => {
  const handleLogin = async () => {
    const result = await signIn();
    if (onSuccess) onSuccess();
    return result;
  };

  return (
    <button
      type="button"
      onClick={handleLogin}
      className="flex items-center gap-2 px-3 py-2 rounded-md border border-slate-700 cursor-pointer text-slate-300 hover:text-amber-400 hover:bg-slate-800 text-sm font-medium"
    >
      <LogIn size={16} />
      Login
    </button>
  );
};

export default LoginButton;
