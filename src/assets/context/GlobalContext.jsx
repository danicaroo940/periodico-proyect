import React from "react"; 
import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer.js";

const initialState = {
    theme:'light'
}

export const GlobalContext = createContext();
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function handleTheme (e){
       if (e.target.checked === true){
        dispatch({
            type: 'CHANGE_THEME',
            payload: 'dark',
        })
    }
        if (e.target.checked === false){
            dispatch({
                type: 'CHANGE_THEME',
                payload: 'light',
            })
        }   

    }


    return (
        <GlobalContext.Provider 
        value={
            {
                theme: state.theme,
                handleTheme,
            }
        }
        >
            {children}
        </GlobalContext.Provider>
    )
}