import { useState } from "react";
import MealList from "./MealList";

export default function Home() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const api = "1df0cf3cfcff4d48b3f22b30ba7965b4";

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  const getMealData = (e) => {
    e.preventDefault();
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${api}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <section className="controls">
        <h1>Type your meal</h1>
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
      </section>
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData && <MealList mealData={mealData} api={api} />}
    </div>
  );
}
