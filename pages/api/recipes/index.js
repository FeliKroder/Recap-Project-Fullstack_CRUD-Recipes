import dbConnect from "../../../db/connect";
import Recipe from "../../../db/models/Recipe";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const recipes = await Recipe.find();

    // const recipes = await Recipe.find({})
    // .sort({ createdAt: -1 })
    // .limit(request.query.limit);

    return response.status(202).json(recipes);
    // response.status(200).json(recipes);
    // return;
  } else {
    return response.status(405).json({ message: "Method not allowed" });
    // when is "else ... (405 etc.)" recomannded?
  }
}
