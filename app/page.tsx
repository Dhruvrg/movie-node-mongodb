import React from "react";
import PopularMovies from "../components/PopularMovies";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      {/* <Navbar /> */}
      <PopularMovies />
      </main>
      <Footer />
    </div>
  );
}