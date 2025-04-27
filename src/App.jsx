import React, { useState } from "react";
import "./App.css";

function App() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate a more detailed recipe generation
    setTimeout(() => {
      const ingredientsList = ingredients.split(",").map(item => item.trim());
      
      // Generate a more detailed recipe
      const recipeTitle = `Mediterranean ${ingredientsList[0]} with ${ingredientsList[1]} and ${ingredientsList[2]}`;
      
      const recipeSteps = `
1. Preheat your oven to 375°F (190°C) and prepare a baking dish.
2. In a large bowl, combine the ${ingredientsList[0]} with 2 tablespoons of olive oil.
3. Add chopped ${ingredientsList[1]}, minced garlic, and your preferred ${ingredientsList[4]}.
4. Season generously with ${ingredientsList[3]} and a pinch of black pepper.
5. If using ${ingredientsList[2]}, slice them and add to the mixture.
6. Transfer everything to the baking dish and arrange in a single layer.
7. Bake for 25-30 minutes, or until the ${ingredientsList[0]} is cooked through.
8. During the last 5 minutes, sprinkle with some fresh herbs if available.
9. Remove from oven and let rest for 5 minutes before serving.
10. Garnish with a squeeze of lemon juice for extra flavor.

Nutrition Information:
- Calories: Approximately 320 per serving
- Protein: 24g
- Carbohydrates: 12g
- Fat: 18g

Suggested Wine Pairing: Pinot Grigio or light Chardonnay

Cooking Tips:
- For extra flavor, marinate the ${ingredientsList[0]} for at least 1 hour before cooking.
- This dish pairs well with a side of steamed rice or roasted potatoes.
- Leftovers can be stored in the refrigerator for up to 3 days.
`;
      
      setRecipe(`Recipe using ${ingredients}:\n\n${recipeTitle}\n\n${recipeSteps}`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <h1 className="main-header">
          Meet Your Personal
          <br />
          <span className="highlight">Recipe AI</span>
        </h1>
        <h2 className="developer-credit">Created by Moses Ojo</h2>
        <p className="description">
          Simply type a few ingredients and Recipe AI will generate a recipe!
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="form-container">
        <div className="search-container">
          <input
            type="text"
            className="wide-input"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredient1, Ingredient2, Ingredient3, etc."
          />
          <button type="submit" className="search-button" disabled={loading}>
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      </form>
      
      {loading && <div className="loader-container">Loading...</div>}
      
      {recipe && (
        <div className="result-container">
          <pre className="result">{recipe}</pre>
        </div>
      )}

      <footer className="app-footer">
        <p>© 2025 Moses Ojo | AI Recipe Generator</p>
      </footer>
    </div>
  );
}

export default App;
