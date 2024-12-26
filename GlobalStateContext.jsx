import { createContext, useReducer } from "react";

const initialState = {count :0} 
const reducer = (state, action)=>{
    switch(action.type){
        case 'inc':
            return {count: state.count + 1};
        case 'dec':
            return {count: state.count -1}
        default:
            return state
    }
}

export const GlobalStateContext = createContext();
export const 