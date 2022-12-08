import NextButton from "./NextButton";

function RecipeNumber() {
  return ( 
    <div className="recipe-number">
      <label htmlFor="">how many recipes?
      <select name="" id="">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      </label>
      <NextButton/>
    </div>
   );
}

export default RecipeNumber;