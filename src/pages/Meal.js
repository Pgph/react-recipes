import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");
  const api = "1df0cf3cfcff4d48b3f22b30ba7965b4";

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${api}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch((err) => console.log(err));
  }, [meal.id]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <article>
      <h2>{meal.title}</h2>
      <img src={imageUrl} alt={meal.title} />
      <ul className="instructions">
        <li>Ready in: {meal.readyInMinutes} minutes</li>
        <li>Servings: {meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl}>Go to Recipe</a>
      <button onClick={handleClick}>Check Details</button>
    </article>
  );
}
