import { connectToDB } from "../../../utils/database";
import Movie from "../../../models/movie";

export const POST = async (req) => {
  const { title, image, rating, color } = await req.json();

  try {
    await connectToDB();
    const newMovie = new Movie({ creator: title, image, rating, color });

    await newMovie.save();
    return new Response(JSON.stringify(newMovie), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new movie", { status: 500 });
  }
};
