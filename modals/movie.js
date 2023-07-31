import { Schema, model, models } from "mongoose";

const MovieSchema = new Schema({
  title: {
    type: String,
    unique: [true, "name already exists!"],
    required: [true, "name is required!"],
  },
  image: {
    type: String,
    required: [true, "image is required!"],
  },
  rating: {
    type: Number,
    required: [true, "rating is required!"],
  },
  color: {
    type: String,
  },
});

const Movie = models.Movie || model("Movie", MovieSchema);

export default Movie;
