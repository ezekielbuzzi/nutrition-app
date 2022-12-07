import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome-page/Welcome";
import MainPage from "./components/welcome-page/MainPage";
import RecipeListPage from "./components/welcome-page/RecipeListPage";
import RecipePage from "./components/welcome-page/RecipePage";
import NutritionFactPage from "./components/welcome-page/NutritionFactPage";
import Title from "./components/title/Title";

function App() {
  return (
    <BrowserRouter>
      <Title />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/recipe-list" element={<RecipeListPage />} />
        <Route path="/recipe-page" element={<RecipePage />} />
        <Route path="/nutrition-facts" element={<NutritionFactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
