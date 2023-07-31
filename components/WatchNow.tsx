"use client";
import React, { useEffect, useState } from "react";

type Movie = {
  title: string;
  image: string;
  color?: string;
};

export default function pop() {
  const initialMovies: Movie[] = [];
  const [movies, setMovies] = useState(initialMovies);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch("/api/watchnowmovies");
      const data = await response.json();
      setMovies(data);
    };
    getMovies();
  }, []);
  return (
    <div className="sm-bg-gradient lg:bg-black ">
      <h1 className="text-2xl font-bold pl-5 pt-5 md:text-left md:pl-0 lg:pl-80">
        Watch Now
      </h1>
      <div className="flex flex-col items-end">
        <div className="flex flex-wrap justify-center">
          {movies.map((movie) => (
            <div
              key={movie.title}
              className="flex flex-col items-center mx-4 my-2 relative"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="h-72 w-96 rounded-xl"
              />
              <div
                className="absolute bottom-12 md:w-full rounded-3xl p-2 md:bottom-6 w-80"
                style={{ backgroundColor: movie.color }}
              >
                <div className="flex items-center justify-between px-2">
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      {movie.title}
                    </h2>
                  </div>
                  <img
                    src="info.svg"
                    alt="info"
                    className="h-5 w-5 sm:h-10 sm:w-6 "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
