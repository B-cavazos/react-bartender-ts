import { useEffect, useContext, useState} from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Homepage = () =>{
    
    const {getDrinks, drinks, loading} = useContext(GlobalContext);
   
    useEffect(() => {
        getDrinks();
        console.log('these are the drinks:', drinks)
    },[]);


    return(
        <div className="row">
    {/* Header */}
            <div className="text-center col-12 py-3">
                <h1>DRINKSY HOMEPAGE</h1>
            </div>
    {/* Search Bar */}
    {/* Card */}
            <div className="row">
                {loading?
                    (<p>Data is loading...</p>):
                    (drinks.map((drink,i)=>{
                        return(
                            <div className="col-6 col-md-4 col-lg-2 mt-3" key={i}>
                                <div className="card">
                                    <img className="card-img-top" src="https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt={drink.strDrink}/>
                                    <div className="card-body">
                                        <h5 className="">{drink.strDrink}</h5>
                                        <small className="card-subtitle mb-2 text-muted">{drink.strCategory}</small>                        
                                        <p className="card-text">{drink.strAlcoholic}</p>
                                        <a href="#" className="btn btn-secondary">How to Make</a>
                                    </div>                
                                </div>
                            </div>   
                        )
                    }))
                }
            </div>
        </div>    
    )
}

export default Homepage

