import React, { useEffect, useState } from 'react';
import './index.css';

export default function Categories() {
    const [recipesData, setRecipesData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []); // Empty array ensures this runs only once

    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/recipes');
        const newData = await response.json();
        setRecipesData(newData.recipes); // Assuming the API returns an object with a 'recipes' array
    };

    return (
        <div className="container">
            {recipesData && recipesData.map(recipe => (
                <div key={recipe.id} className="card">
                    <div className="card-header">
                        <h5 className="no-margin">Recipe Name: {recipe.name}</h5>
                    </div>
                    <div className="card-description">
                        <h5 className="small hint-text no-margin">Cuisine: {recipe.cuisine}</h5>
                        <h5 className="small hint-text no-margin">Difficulty: {recipe.difficulty}</h5>
                        <h3 className="m-b-0">Calories: {recipe.caloriesPerServing}</h3>
                    </div>
                    <div className="card-footer">
                        <span className="text-success">Rating: {recipe.rating} ({recipe.reviewCount} reviews)</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

