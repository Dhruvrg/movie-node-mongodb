import React from "react";

type Movie = {
  title: string;
  rating: number;
  image: string;
  color?: string;
};

const movies: Movie[] = [
  {
    title: "Spider-Man: Across the Universe",
    rating: 4.7,
    image: "spider-man.svg",
    color: "#3D4763",
  },
  {
    title: "Barbie: Reinventing the Dream",
    rating: 4.5,
    image: "barbie.svg",
    color: "#FD9DD1",
  },
  {
    title: "Mission: Impossible - Dead Reckoning",
    rating: 4.5,
    image: "missionimpossible.svg",
    color: "#443632",
  },
];

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2 pl-5 pt-5 md:text-left md:pl-80 lg:pl-80">
        Popular Movies 2023
      </h1>
      <div className="flex flex-col items-end">
        <div className="flex flex-wrap justify-center">
          {movies.map((movie) => (
            <div key={movie.title} className="flex flex-col items-center mx-4 my-2 relative">
              <img src={movie.image} alt={movie.title} className="h-72 w-96 rounded-lg" />
              <div
                className="absolute bottom-0 bg-opacity-60 w-full rounded-xl p-2"
                style={{ backgroundColor: movie.color }}
              >
                <h2 className="text-lg font-bold text-white">{movie.title}</h2>
                <p className="text-sm font-semibold text-white">{movie.rating} stars</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
