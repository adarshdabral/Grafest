"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <main className="bg-black text-white">
      <Navbar isScrolled={isScrolled} />
      <Hero setScrolled={setIsScrolled} />
      <Events />
      <ThreeDCardDemo />
      <ThreeDCardDemo />
    </main>
  );
}
