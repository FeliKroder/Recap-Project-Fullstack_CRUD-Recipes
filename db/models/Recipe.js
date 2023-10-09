import mongoose from "mongoose";
const { Schema } = mongoose;

const recipeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    cookingtime: { type: Number, required: true },
    image: { type: String, required: true },
    offerer: { type: String, required: true },
  },
  { timestamps: true }
);

const Recipe = mongoose.models.Joke || mongoose.model("Recipe", recipeSchema);
export default Recipe;
