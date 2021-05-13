import React from 'react';
import '../App.css';
import Loader from '../components/Loader';



interface SingleDrink{
  drinkInfo: Drinks;
  loading: boolean;
}

const SingleCardDrink : React.FC <SingleDrink> = ({drinkInfo, loading}) =>{

    if (loading) {
        return <Loader />;
      }
    
   console.log(drinkInfo)
    return(
        <div className="card d-flex bg-dark my-4 col w-70 justify-content-between text-center text-white">
            <div className="card-body">
                <img className="w-50" src={drinkInfo.strDrinkThumb} alt={drinkInfo.strDrink} />  
            </div>   
            <h5>Ingredients:</h5>
            <div>
                {drinkInfo.strIngredient1}
            </div>                     
            <div>
                {drinkInfo.strIngredient2}
            </div>                     
            <div>
                {drinkInfo.strIngredient3}
            </div>                     
            <div>
                {drinkInfo.strIngredient4}
            </div>                     
            <div>
                {drinkInfo.strIngredient5}
            </div>                     
            <div>
                {drinkInfo.strIngredient6}
            </div>                     
            <div>
                {drinkInfo.strIngredient7}
            </div>                     
            <div>
                {drinkInfo.strIngredient8}
            </div>                     
            <div>
                {drinkInfo.strIngredient9}
            </div>                     
            <div>
                {drinkInfo.strIngredient10}
            </div>                     
            <div>
                {drinkInfo.strIngredient11}
            </div>                     
            <div>
                {drinkInfo.strIngredient12}
            </div>                     
            <div>
                {drinkInfo.strIngredient13}
            </div>                     
            <div>
                {drinkInfo.strIngredient14}
            </div>                     
            <div>
                {drinkInfo.strIngredient15}
            </div> 
            <br />

            
            <div className="">
            <h5>Instructions</h5>  
                <p>{drinkInfo.strInstructions}</p>                    
            </div>
        </div>
    )
}

export default SingleCardDrink;