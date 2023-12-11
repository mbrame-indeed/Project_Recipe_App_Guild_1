import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
          <RecipeView recipe={recipe} deleteRecipe={() => deleteRecipe(index)} index={index} key={index}/>
      ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
