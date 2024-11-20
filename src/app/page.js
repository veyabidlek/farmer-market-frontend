"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { isAuthenticatedAtom } from "./atoms";

export default function Home() {
  const router = useRouter();
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin/dashboard");
    } else {
      router.push("/admin/login");
    }
  }, [isAuthenticated, router]);

  return <div>Loading...</div>;
}
