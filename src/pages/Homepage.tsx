import { useEffect, useContext, useState, ChangeEvent} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import HomepageCard from '../components/HomepageCard'

const Homepage = () =>{
    
    const {getDrinks, drinks, loading} = useContext(GlobalContext);

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(drinks);


    /* Filter useEffect */
  useEffect(() => {
      
    //filter the data
    const searchData = drinks.filter(drink => {
      return (
        drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    //conditional to set state of filtered data
    searchTerm === ''
      ? setFilteredData(drinks)
      : setFilteredData(searchData);
  }, [searchTerm, drinks]);

 /* Handle Change */ 
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    };

/* API Grab useEffect */
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
        <form className="row">
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Find a beverage"
                />
            </div>
        </form>
    {/* Card */}
            <div className="row">
                {loading?
                    (<p>Data is loading...</p>):
                    (filteredData.map((drink,i)=>{
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

