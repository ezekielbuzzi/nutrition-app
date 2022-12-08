import NextButton from '../sub-components/NextButton'

function IngredientInput() {
    return ( 
        <div className="ingredient-input">
            <label htmlFor="">
                <input type="text" />
            </label>
            <button className="add-btn">add</button>
            <NextButton/>
        </div>
     );
}

export default IngredientInput;