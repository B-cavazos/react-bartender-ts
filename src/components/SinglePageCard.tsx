import React from 'react';
import '../css/singlePage.css';
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
    <div className=" d-flex justify-content-center my-5 w-50 mx-auto text-white">
        <div className="card justify-content-center" style={{maxWidth:"650px"}}>
  <     div className="row no-gutters">
            <div className="col-md-5">
                <div className="card-img" style={{ backgroundImage: `url(${drinkInfo.strDrinkThumb})`, height:'100%' }}></div>
            </div>
            <div className="col-md-5">
                <div className="card-body">
                    <h5 className="card-title">{drinkInfo.strDrink}</h5>
                    <p className="card-text">Instructions : {drinkInfo.strInstructions}</p>
                </div>
                <div>
                <h5 className="card-title">Ingredients</h5>
                    <ul className="list-group-items">
                        <li className="list-item">{drinkInfo.strIngredient1}</li>
                        <li className="list-item">{drinkInfo.strIngredient2}</li>
                        <li className="list-item">{drinkInfo.strIngredient3}</li>
                        <li className="list-item">{drinkInfo.strIngredient4}</li>
                        <li className="list-item">{drinkInfo.strIngredient5}</li>
                        <li className="list-item">{drinkInfo.strIngredient6}</li>
                        <li className="list-item">{drinkInfo.strIngredient7}</li>
                        <li className="list-item">{drinkInfo.strIngredient8}</li>
                        <li className="list-item">{drinkInfo.strIngredient9}</li>
                        <li className="list-item">{drinkInfo.strIngredient10}</li>
                        <li className="list-item">{drinkInfo.strIngredient11}</li>
                        <li className="list-item">{drinkInfo.strIngredient12}</li>
                        <li className="list-item">{drinkInfo.strIngredient13}</li>
                        <li className="list-item">{drinkInfo.strIngredient14}</li>
                        <li className="list-item">{drinkInfo.strIngredient15}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default SingleCardDrink;