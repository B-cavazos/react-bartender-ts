import React, {useReducer, useState, createContext} from 'react';

const initialState = {
    drinks: []
};

const appReducer = (action:any, state:any) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
          // when a case matches, the return will update the state for us
          return { ...state, products: action.payload, is_loading: false };

}

}

export const GlobalContext = createContext<InitialState>(initialState);

export const GlobalProvider: React.FC = ({children}) =>{

    const [state, dispatch] = useReducer(appReducer, initialState);


    dispatch({})

    return (
        <GlobalContext.Provider 
        value={{
             drinks: state.drinks
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}