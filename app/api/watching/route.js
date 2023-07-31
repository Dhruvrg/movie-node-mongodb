import Watching from "../../../models/watching";
import { connectToDB } from "../../../utils/database";

export const GET = async () => {
  try {
    await connectToDB();
    const movies = await Watching.find({});
    return new Response(JSON.stringify(movies), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all", { status: 500 });
  }
};
