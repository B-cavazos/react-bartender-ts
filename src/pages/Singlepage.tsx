import {GlobalContext} from '../context/GlobalContext';
import {useContext,useEffect} from 'react';
import {useParams} from 'react-router-dom';

const SinglePage = () =>{
    const {getSingleDrink, drink} = useContext(GlobalContext);

    const {cocktailId} = useParams<{cocktailId: string}>();

    useEffect(() =>{
            getSingleDrink(+cocktailId)
    },[cocktailId])


    console.log(drink)

    return (
        <div></div>
    )
}

export default SinglePage