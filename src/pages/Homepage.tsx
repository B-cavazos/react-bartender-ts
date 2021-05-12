import { useEffect, useContext, useState} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import HomepageCard from '../components/HomepageCard'

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
                                <HomepageCard drink={drink}/>
                            </div>   
                        )
                    }))
                }
            </div>
        </div>    
    )
}

export default Homepage

