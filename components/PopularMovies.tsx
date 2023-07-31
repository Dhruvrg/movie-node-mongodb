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
    color: "rgba(61, 71, 99, 0.6)",
  },
  {
    title: "Barbie: Reinventing the Dream",
    rating: 4.5,
    image: "barbie.svg",
    color: "rgba(253, 157, 209, 0.6)",
  },
  {
    title: "Mission: Impossible - Dead Reckoning",
    rating: 4.5,
    image: "missionimpossible.svg",
    color: "rgba(68, 54, 50, 0.6)",
  },
];

export default function pop() {
  return (
    <div className="sm-bg-gradient lg:bg-black ">
      <h1 className="text-2xl font-bold pl-5 pt-5 md:text-left md:pl-0 lg:pl-80">
        Popular Movies 2023
      </h1>
      <div className="flex flex-col items-end">
        <div className="flex flex-wrap justify-center">
          {movies.map((movie) => (
            <div key={movie.title} className="flex flex-col items-center mx-4 my-2 relative">
              <img src={movie.image} alt={movie.title} className="h-72 w-96 rounded-xl" />
              <div
                className="absolute bottom-12 md:w-full rounded-3xl p-2 md:bottom-6 w-80"
                style={{ backgroundColor: movie.color }}
              >
                <div className="flex items-center space-x-2 px-2">
                  <div>
                    <h2 className="text-lg font-bold text-white">{movie.title}</h2>
                    <div className="flex items-center space-x-1">
                      <p className="text-sm font-semibold text-white">{movie.rating}</p>
                      <img src="star.svg" alt="star" className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
