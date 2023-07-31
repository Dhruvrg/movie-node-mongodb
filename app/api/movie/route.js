import Movie from "../../../models/movie";
import { connectToDB } from "../../../utils/database";

export const GET = async () => {
  try {
    await connectToDB();
    const movies = await Movie.find({});
    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all", { status: 500 });
  }
};

export const POST = async (req) => {
  const { title, image, rating, color } = await req.json();

  try {
    await connectToDB();
    const newMovie = new Movie({ title, image, rating, color });
    await newMovie.save();
    return new Response(JSON.stringify(newMovie), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new movie", { status: 500 });
  }
};
