import { Schema, model, models } from "mongoose";

const MovieSchema = new Schema({
  name: {
    type: String,
    unique: [true, "name already exists!"],
    required: [true, "name is required!"],
  },
  image: {
    type: String,
    required: [true, "image is required!"],
  },
  type: {
    type: String,
    required: true,
    enum: ["Horror", "Action", "Thriller", "Comedy"],
  },
});

const Movie = models.Movie || model("Movie", MovieSchema);

export default Movie;
