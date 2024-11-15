import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/IngredientDetails.css';

const API_BASE = 'https://www.themealdb.com/api/json/v1/1';

const IngredientDetails = () => {
  const { name } = useParams(); // Get ingredient name from URL
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Fetch meals by ingredient
    axios.get(`${API_BASE}/filter.php?i=${name}`).then((res) => {
      setMeals(res.data.meals);
    });
  }, [name]);

  if (!meals.length) return <div>Loading...</div>;

  return (
    <div>
      <h1>Meals with Ingredient: {name}</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <Link to={`/recipe/${meal.idMeal}`}>{meal.strMeal}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientDetails;
