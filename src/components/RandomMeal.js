import React, { useEffect, useState } from 'react';
import { fetchRandomMeal } from '../api';

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchRandomMeal().then((res) => setMeal(res.data.meals[0]));
  }, []);

  if (!meal) return <div>Loading...</div>;

  return (
    <div>
      <h1>Random Meal</h1>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default RandomMeal;
