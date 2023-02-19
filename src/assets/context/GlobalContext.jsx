import React from "react"; 
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";

const initialState = {
    menu:[]
}

export const GlobalContext = createContext();
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);



    const clickList = (e) => {
        switch (e) {
            case e = 'Home':
                dispatch({
                    type: 'CLICK_HOME',
                    payload: e
                })
            
            case e = 'List':
                dispatch({
                    type: 'CLICK_LIST',
                    payload: e
                })

            case e = 'Add News':
                dispatch({
                    type: 'CLICK_ADDNEWS',
                    payload: e
                })
            }

        }

    return (
        <GlobalContext.Provider 
        value={
            {
                menu: state.menu,
                clickList
            }
        }
        >
            {children}
        </GlobalContext.Provider>
    )
}