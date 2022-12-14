import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
      <section className="nutrients">
        <h2>Macros</h2>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)} kcal</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}g</li>
          <li>Fat: {nutrients.fat.toFixed(0)}g</li>
          <li>Protein: {nutrients.protein.toFixed(0)}g</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
