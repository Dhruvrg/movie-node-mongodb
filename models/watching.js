import { Schema, model, models } from "mongoose";

const WatchingSchema = new Schema({
  title: {
    type: String,
    unique: [true, "name already exists!"],
    required: [true, "name is required!"],
  },
  image: {
    type: String,
    required: [true, "image is required!"],
  },
  time_remaining: {
    type: String,
  },
  color: {
    type: String,
  },
});

const Watching = models.Watching || model("Watching", WatchingSchema);

export default Watching;
