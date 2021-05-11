import React, {useReducer, useEffect, createContext} from 'react';
import instance from '../api/apiConfig'

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


    const getDrinks = async() =>{

        try{
            let {data} = await instance.get('/api/json/v1/1/search.php?s=')
            console.log(data)
            dispatch({action: 'GET_PRODUCTS', payLoad: data})

        }
        catch(e){
            console.log(e);
        }

       

    }


   

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