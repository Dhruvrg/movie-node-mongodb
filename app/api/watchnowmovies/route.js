import Watchnowmovies from "../../../models/watchnowmovies";
import { connectToDB } from "../../../utils/database";

export const GET = async () => {
  try {
    await connectToDB();
    const movies = await Watchnowmovies.find({});
    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all", { status: 500 });
  }
};
