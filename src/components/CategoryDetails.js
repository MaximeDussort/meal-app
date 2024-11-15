import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/CategoryDetails.css';

const API_BASE = 'https://www.themealdb.com/api/json/v1/1';

const CategoryDetails = () => {
  const { name } = useParams(); // Get category name from URL
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Fetch meals by category
    axios.get(`${API_BASE}/filter.php?c=${name}`).then((res) => {
      setMeals(res.data.meals);
    });
  }, [name]);

  if (!meals.length) return <div>Loading...</div>;

  return (
    <div>
      <h1>Meals in Category: {name}</h1>
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

export default CategoryDetails;
