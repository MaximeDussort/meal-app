import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import CategoryDetails from './components/CategoryDetails';
import IngredientDetails from './components/IngredientDetails';
import RandomMeal from './components/RandomMeal';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/category/:name" element={<CategoryDetails />} />
        <Route path="/ingredient/:name" element={<IngredientDetails />} />
        <Route path="/random" element={<RandomMeal />} />
      </Routes>
    </Router>
  );
}

export default App;
