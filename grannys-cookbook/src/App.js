import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import RecipeContainer from "./components/RecipeContainer";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <RecipeContainer />
    </div>
  );
}

export default App;
