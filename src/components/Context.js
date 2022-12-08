import { createContext, useReducer } from "react";

export const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    //example
    case "DARK MODE":
      return { ...state, dark: !state.dark };

    default:
      return state;
  }
};

function ContextProvider({ children }) {
  const initialState = {
    //example
    dark: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={{ state }}>{children}</Context.Provider>;
}

export default ContextProvider;
