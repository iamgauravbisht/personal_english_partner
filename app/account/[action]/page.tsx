"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import AuthForm from "@/components/AuthForm";

const AccountAction = () => {
  const pathname = usePathname();
  useEffect(() => {
    if (!["/account/login", "/account/register"].includes(pathname)) {
      window.location.assign("/not-found");
    }
  }, [pathname]);

  if (pathname == "/account/login") {
    return <AuthForm defaultValue="login" />;
  } else {
    return <AuthForm defaultValue="signup" />;
  }
};

export default AccountAction;
