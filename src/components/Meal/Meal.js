import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Meal.css';

const Meal = (props) => {
    const {strMealThumb, strMeal, strInstructions} = props.meal;
    const icon =  <FontAwesomeIcon icon={faCoffee} />;
    return (
        <div className="singleMail">
            <div className="thumbnail">
                <img src={strMealThumb} alt="" />
            </div>
            <div className="meal-info">
                <h4>{strMeal}</h4>
                <p>{strInstructions.substr(0, 200)}...</p>
                <button className="selectButton" onClick={()=> props.selectMealHandler(props.meal)}>{icon} Select Meal</button>
            </div>
        </div>
    );
};

export default Meal;