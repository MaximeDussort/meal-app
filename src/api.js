import axios from 'axios';

const API_BASE = 'https://www.themealdb.com/api/json/v1/1';

export const fetchRecipes = () => axios.get(`${API_BASE}/search.php?s=`);
export const fetchCategories = () => axios.get(`${API_BASE}/categories.php`);
export const fetchIngredients = () => axios.get(`${API_BASE}/list.php?i=list`);
export const fetchRecipeDetails = (id) => axios.get(`${API_BASE}/lookup.php?i=${id}`);
export const fetchRandomMeal = () => axios.get(`${API_BASE}/random.php`);
