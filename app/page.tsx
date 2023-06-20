import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@components/Footer";
import React from "react";
import AboutUs from "@components/AboutUs/AboutUs";
export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Header />
      <Hero />

      <Footer />
    </main>
  );
}
