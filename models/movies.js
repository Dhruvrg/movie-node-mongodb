import { Schema, model, models } from "mongoose";

const MoviesSchema = new Schema({
  title: {
    type: String,
    unique: [true, "name already exists!"],
    required: [true, "name is required!"],
  },
  image: {
    type: String,
    required: [true, "image is required!"],
  },
  time_remaining:{
    type: String
  },
  rating: {
    type: Number,
  },
  color: {
    type: String,
  },
});

const Movies = models.Movies || model("Movies", MoviesSchema);

export default Movies;
