import React, {useReducer, useEffect, useState, createContext} from 'react';
import instance from '../api/apiConfig'

const initialState = {
    drinks: [],
    getDrinks: () =>{},
    loading: false
};


const appReducer = (state:any, action:any) => {
    // console.log('top of reducer', action)
    switch (action.type) {
        case 'GET_PRODUCTS':
            console.log('in reducer', action.payload)
          // when a case matches, the return will update the state for us
            return { ...state, drinks: action.payload};
        default:
            return state;
    }
}

export const GlobalContext = createContext<InitialState>(initialState);

export const GlobalProvider: React.FC = ({children}) =>{

    const [state, dispatch] = useReducer(appReducer, initialState);
    const [loading, setLoading] = useState(false);


    const getDrinks = async() =>{
        // setLoading(true);
        try{
            let {data} = await instance.get('/api/json/v1/1/search.php?s=')
            console.log('the data:',data)            
            // setLoading(false);
            dispatch({type: 'GET_PRODUCTS', payload: data.drinks})


        }
        catch(e){
            console.log(e);
        }

    }


   

    return (
        <GlobalContext.Provider 
        value={{
             drinks: state.drinks,
             getDrinks,
             loading
        }}
        >
            {children}
        </GlobalContext.Provider>
    )

    }