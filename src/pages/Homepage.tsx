import { useEffect, useContext, useState, ChangeEvent} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import HomepageCard from '../components/HomepageCard'
import HeaderVid from '../components/HeaderVid';

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
            <div className="col-12 py-3">
                <HeaderVid/>
            </div>
    {/* Search Bar */}
    <div className="row">
         <form id="search-box" className="col-8 offset-2">
            <div className="form-group d-flex align-items-end search-bar">
                <input 
                    type="text" 
                    className="form-control"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Find a beverage"
                />
            </div>
        </form>
        <div className="col-lg-8 offset-lg-2">
    {/* Card */}
            <div className="row">
                {loading?
                    (<p>Data is loading...</p>):
                    (filteredData.map((drink,i)=>{
                        return(
                            <div className="col-6 col-md-4 col-lg-4 mt-3" key={i}>
                                <HomepageCard drink={drink} loading={loading}/>
                            </div>   
                        )
                    }))
                }
            </div>            
        </div>       
    </div>


        </div>    
    )
}

export default Homepage

