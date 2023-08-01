import Movies from "../../../models/movies";
import { connectToDB } from "../../../utils/database";

export const GET = async () => {
  try {
    await connectToDB();
    const movies = await Movies.find({$and:[{ 'time_remaining' : { $exists: false } },{ 'rating' : { $exists: false } }]});
    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all", { status: 500 });
  }
};
