import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome-page/Welcome";
import MainPage from "./components/main-page/MainPage";
import RecipeListPage from "./components/recipe-list-page/RecipeListPage";
import RecipePage from "./components/recipe-page/RecipePage";
import NutritionFactPage from "./components/nutrition-fact-page/NutritionFactPage";
import Navigate from "./components/title/Navigate";

function App() {
  return (
    <BrowserRouter>
      <Navigate />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/recipe-list-page" element={<RecipeListPage />} />
        <Route path="/recipe-page" element={<RecipePage />} />
        <Route path="/nutrition-facts" element={<NutritionFactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
