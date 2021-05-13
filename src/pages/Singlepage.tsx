import {GlobalContext} from '../context/GlobalContext';
import {useContext,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import SingleCardDrink from '../components/SinglePageCard';

const SinglePage = () =>{
    const {getSingleDrink, drink,loading} = useContext(GlobalContext);

    const {cocktailId} = useParams<{cocktailId: string}>();

    useEffect(() =>{
            getSingleDrink(+cocktailId)
    },[cocktailId])

    console.log(drink)

    return (
        <div>
           {drink.map((drinkInfo, i) =>{
               return (
                <SingleCardDrink key={i} drinkInfo ={drinkInfo} loading={loading}/>
               )         
           })}
        </div>
    )
}

export default SinglePage