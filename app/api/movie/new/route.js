import { connectToDB } from "@utils/database";
import Movie from "@models/prompt";

export const POST = async (req) => {
  const { name, image, type } = await req.json();

  try {
    await connectToDB();
    const newMovie = new Movie({ creator: name, image, type });

    await newMovie.save();
    return new Response(JSON.stringify(newMovie), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new movie", { status: 500 });
  }
};
