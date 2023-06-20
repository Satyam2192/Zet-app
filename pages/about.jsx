import React from 'react'
import AboutUs from "../components/AboutUs/AboutUs"
import "./globals.css"
import Header from "../components/Header.tsx"
import Footer from "../components/Footer";

const about = () => {
  return (
    <>
    <Header />
    <AboutUs />
    <Footer />
    </>
  )
}

export default about