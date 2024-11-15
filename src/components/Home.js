import React, { useEffect, useState } from 'react';
import { fetchRecipes, fetchCategories, fetchIngredients } from '../api';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchRecipes().then((res) => setRecipes(res.data.meals.slice(0, 6)));
    fetchCategories().then((res) => setCategories(res.data.categories.slice(0, 6)));
    fetchIngredients().then((res) => setIngredients(res.data.meals.slice(0, 6)));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Link to={`recipes`}><strong>Searching recipe</strong></Link>
      <Link to={`random`}><strong>Random meal</strong></Link>

      <h2>Top Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>{recipe.strMeal}</Link>
          </li>
        ))}
      </ul>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.idCategory}>
            <Link to={`/category/${category.strCategory}`}>{category.strCategory}</Link>
          </li>
        ))}
      </ul>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.idIngredient}>
            <Link to={`/ingredient/${ingredient.strIngredient}`}>{ingredient.strIngredient}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
