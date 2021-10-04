import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import RecipeContainer from "./components/RecipeContainer";

function App() {

  const [recipeList, setRecipeList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
    .then(r => r.json())
    .then(recipes => setRecipeList(recipes))
  }, [])

  return (
    <div>
      <Header />

      <RecipeContainer recipeList = {recipeList}/>
    </div>
  );
}

export default App;
