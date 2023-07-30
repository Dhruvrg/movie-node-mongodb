import { connectToDB } from "@utils/database";
import Movie from "@models/prompt";

export const GET = async () => {
  try {
    await connectToDB();
    const movies = await Movie.find({});
    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all", { status: 500 });
  }
};
