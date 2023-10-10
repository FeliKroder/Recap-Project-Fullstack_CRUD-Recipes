import useSWR from "swr";
import RecipeCard from "../RecipeCard";

export default function Recipes() {
  const { data: recipes, isLoading } = useSWR(`/api/recipes`);

  if (!recipes || isLoading) {
    return "is Loading...";
  }
  return (
    <ul>
      {recipes.map((recipe) => {
        return (
          <li key={recipe._id}>
            <RecipeCard {...recipe} />
          </li>
        );
      })}
    </ul>
  );
}
