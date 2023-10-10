import Image from "next/image";

export default function RecipeCard({
  name,
  cookingtime,
  description,
  image,
  offerer,
}) {
  return (
    <>
      <h2>{name}</h2>
      <p>{cookingtime} minutes</p>
      <article>{description}</article>
      <Image src={image} alt={name} width={600} height={600} />
      <p>{offerer}</p>
    </>
  );
}
