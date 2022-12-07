import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome-page/Welcome";
<<<<<<< HEAD
import MainPage from "./components/welcome-page/MainPage";
import RecipeListPage from "./components/welcome-page/RecipeListPage";
import RecipePage from "./components/welcome-page/RecipePage";
import NutritionFactPage from "./components/welcome-page/NutritionFactPage";
import Title from "./components/title/Title";
=======
import MainPage from "./components/main-page/MainPage";
import RecipeListPage from "./components/recipe-list-page/RecipeListPage";
import RecipePage from "./components/recipe-page/RecipePage";
import NutritionFactPage from "./components/nutrition-fact-page/NutritionFactPage";
import Navigate from "./components/title/Navigate";
>>>>>>> 5a14fa0f5dd45b849f360b903310bdfe7728df5e

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Title />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/recipe-list" element={<RecipeListPage />} />
=======
      <Navigate />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/recipe-list-page" element={<RecipeListPage />} />
>>>>>>> 5a14fa0f5dd45b849f360b903310bdfe7728df5e
        <Route path="/recipe-page" element={<RecipePage />} />
        <Route path="/nutrition-facts" element={<NutritionFactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
