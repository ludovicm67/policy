"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const redirectUrl = "https://ludovic-muller.fr/";
  const router = useRouter();
  router.push(redirectUrl);
  return null;
}
