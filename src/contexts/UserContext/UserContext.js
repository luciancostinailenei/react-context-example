import React, { useReducer, createContext } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_USER":
      return { ...state, user: action.payload };
    default:
      return;
  }
};

const initialState = { user: "Alex" };

const UserContext = createContext(initialState);

function UserProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

// global context for user prof, .. .etc fetched from ext. services


// USER PROFIEL CONTEXT
// 1. initialState -> 1 render

// 2. dispatch initialState fetched from SERVER -> 1 render

// 3. dispatch another SAVE -> 1 render
