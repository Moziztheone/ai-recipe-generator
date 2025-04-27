import { FormEvent, useState, useEffect } from "react";
import { Loader, Placeholder, Alert } from "@aws-amplify/ui-react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

function App() {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const ingredients = formData.get("ingredients")?.toString() || "";
      
      // Simulate a response since we don't have backend connectivity yet
      setTimeout(() => {
        setResult(`Recipe using ${ingredients}:\n\n1. Preheat oven to 350°F.\n2. Mix ingredients in a bowl.\n3. Cook for 30 minutes.\n4. Enjoy your meal!`);
        setLoading(false);
      }, 2000);
      
    } catch (e: any) {
      console.error("Error:", e);
      setError(`An error occurred: ${e.message}`);
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <h1 className="main-header">
          Meet Your Personal
          <br />
          <span className="highlight">Recipe AI</span>
        </h1>
        <p className="description">
          Simply type a few ingredients using the format ingredient1,
          ingredient2, etc., and Recipe AI will generate an all-new recipe on
          demand...
        </p>
      </div>
      {error && (
        <Alert variation="error" isDismissible={true}>
          {error}
        </Alert>
      )}
      <form onSubmit={onSubmit} className="form-container">
        <div className="search-container">
          <input
            type="text"
            className="wide-input"
            id="ingredients"
            name="ingredients"
            placeholder="Ingredient1, Ingredient2, Ingredient3,...etc"
          />
          <button type="submit" className="search-button" disabled={loading}>
            Generate
          </button>
        </div>
      </form>
      <div className="result-container">
        {loading ? (
          <div className="loader-container">
            <p>Loading...</p>
            <Loader size="large" />
            <Placeholder size="large" />
            <Placeholder size="large" />
            <Placeholder size="large" />
          </div>
        ) : (
          result && <p className="result">{result}</p>
        )}
      </div>
    </div>
  );
}

export default App;
