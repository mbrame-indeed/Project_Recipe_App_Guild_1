import React, { useState } from "react";
import "./App.css";

function RecipeCreate({ createRecipe }) {
  
  const [name, setName] = useState("");
  const handleNameChange = (event) => setName(event.target.value);

  const [cuisine, setCuisine] = useState("");
  const handleCuisineChange = (event) => setCuisine(event.target.value);

  const [photo, setPhoto] = useState("");
  const handlePhotoChange = (event) => setPhoto(event.target.value);

  const [rating, setRating] = useState("");
  const handleRatingChange = (event) => setRating(event.target.value);

  const [ingredients, setIngredients] = useState("");
  const handleIngredientChange = (event) => setIngredients(event.target.value);

  const [preparation, setPreparation] = useState("");
  const handlePreparationChange = (event) => setPreparation(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", name);
    createRecipe({name, cuisine, photo, ingredients, preparation});
    event.target.reset();
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table id="input-table">
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
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleNameChange}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleCuisineChange}
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                onChange={handlePhotoChange}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleIngredientChange}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                onChange={handlePreparationChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
