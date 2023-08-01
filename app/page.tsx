import React from "react";
import PopularMovies from "../components/PopularMovies";
import Footer from "../components/Footer";
import Watching from "../components/Watching";
import WatchNow from "../components/WatchNow";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      <WatchNow />
      <Watching />
      <PopularMovies />
      </main>
      <Footer />
    </div>
  );
}