import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../api';
import '../styles/RecipeList.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchRecipes().then((res) => setRecipes(res.data.meals));
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <header>
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <a href={`/recipe/${recipe.idMeal}`}>{recipe.strMeal}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
