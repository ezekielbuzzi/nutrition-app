import SelectedList from "./sub-components/SelectedList";
import IngredientInput from './sub-components/IngredientInput'
import TypeSelector from './sub-components/TypeSelector'
import RecipeNumber from "./sub-components/RecipeNumber";

function MainPage() {

  return (
    <div className="container-main-page">
      <div className="container-main-page__left">
        <SelectedList 
        // value={something}
        // id={somethingId}
        />
      </div>
      <div className="container-main-page__right">
        <IngredientInput
        // value={something}
        // id={somethingId}
        />
        <TypeSelector/>
        <RecipeNumber/>
      </div>
    </div>
  )
}

export default MainPage;
