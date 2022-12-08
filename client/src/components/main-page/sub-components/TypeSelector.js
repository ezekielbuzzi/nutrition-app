import NextButton from "./NextButton";

function TypeSelector() {
  return ( 
    <div className="type-selector">
      <label htmlFor="">
        <input type="checkbox" /> veggie
      </label>
      <label htmlFor="">
        <input type="checkbox" /> vegan
      </label>
      <label htmlFor="">
        <input type="checkbox" /> meat
      </label>
      <label htmlFor="">
        <input type="checkbox" /> fish
      </label>
      <NextButton/>
    </div>
   );
}

export default TypeSelector;