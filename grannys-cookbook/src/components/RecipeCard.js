import React, { useState } from "react";
import styled from "styled-components"

export default function RecipeCard({recipe}) {
  console.log(recipe)
  return (
    // <CardWrapper>
      <div>
      <h1> {recipe.name}</h1>
      <img src = {recipe.image} alt = {recipe.name}/>
      <p> {recipe.brief}</p>


    {/* 
    <h1>Recipe Name</h1>
    <img src="" alt=""/> 
    <h3>description</h3>
    <h3>rating (double check)</h3>
    */}  
    </div>
    
    // </CardWrapper> 
  );

}


const CardWrapper = styled.div `
margin: 0;
display: flex;

& img {
max-height: 660px;
max-width: 720px;
}
`