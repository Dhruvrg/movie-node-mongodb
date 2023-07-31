import { Schema, model, models } from "mongoose";

const WatchnowmoviesSchema = new Schema({
  title: {
    type: String,
    unique: [true, "name already exists!"],
    required: [true, "name is required!"],
  },
  image: {
    type: String,
    required: [true, "image is required!"],
  },
  color: {
    type: String,
  },
});

const Watchnowmovies =
  models.Watchnowmovies || model("Watchnowmovies", WatchnowmoviesSchema);

export default Watchnowmovies;
