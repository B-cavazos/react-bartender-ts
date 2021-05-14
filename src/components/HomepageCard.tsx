import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import '../App.css';

interface cardProps {
    drink: Drinks
    loading: boolean;
}

const HomepageCard: React.FC<cardProps> = ({ drink, loading }) => {
    if (loading) {
        return <Loader />;
      }
   console.log(drink)
    return(
        <div className="card border border-secondary">
            <div className="card-img" style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}></div>
            <div className="card-body">
                <h5 className="logo sub-head" >{drink.strDrink}</h5>
                <small className="card-subtitle mb-2 text-muted">{drink.strAlcoholic}</small>                        
                <p className="card-text">{drink.strCategory}</p>
                <Link to={`/cocktails/${drink.idDrink.toLowerCase()}`}>
                    <a className="btn btn-secondary">How to Make</a>                
                </Link>

            </div>                
        </div>
    )
}


export default HomepageCard