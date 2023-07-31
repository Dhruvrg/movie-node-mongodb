import React from "react";

type Movie = {
  title: string;
  time_remaining?: string;
  image: string;
  color?: string;
};

const movies: Movie[] = [
  {
    title: "Interstellar",
    time_remaining: "1hr 8min",
    image: "interstellar.svg",
    color: "rgba(14, 42, 53, 0.6)",
  },
  {
    title: "Stranger Things",
    time_remaining: "1hr 8min",
    image: "strangerThings.svg",
    color: "rgba(83, 31, 38, 0.6)",
  },
  {
    title: "Spy x Family",
    time_remaining: "1hr 8min",
    image: "spyxfamily.svg",
    color: "rgba(68, 54, 50, 0.6)",
  },
];

export default function pop() {
  return (
    <div className="sm-bg-gradient lg:bg-black border-b-1 border-b-gray-700 sm:border-hidden">
      <h1 className="text-2xl font-bold pl-8 pt-5 md:text-left md:pl-2 lg:pl-80">
        Continue Watching
      </h1>
      <div className="flex flex-col items-end">
        <div className="flex flex-wrap justify-center">
          {movies.map((movie) => (
            <div
              key={movie?.title}
              className="flex flex-col items-center mx-4 sm:my-2 relative"
            >
              <img
                src={movie?.image}
                alt={movie?.title}
                className="h-72 w-96 rounded-xl"
              />
              <div
                className="absolute bottom-12 md:w-full rounded-3xl p-2 md:bottom-6 w-80"
                style={{ backgroundColor: movie?.color }}
              >
                <div className="flex items-center space-x-2">
                  <img
                    src="play.svg"
                    alt="play"
                    className="h-8 w-8 sm:h-10 sm:w-10"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      {movie?.title}
                    </h2>
                    <p className="text-sm font-semibold text-white">
                      {movie?.time_remaining} remaining
                    </p>
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
