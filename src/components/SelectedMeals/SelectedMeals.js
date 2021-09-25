import React from 'react';
import "./SelectedMeals.css";

const SelectedMeals = (props) => {
    const {selectedMeals} = props;
    return (
        <div className="SelectedMeals">
            <h4>Selected Meals: ({selectedMeals.length})</h4>
            <ol>
                {
                    selectedMeals.map(meal => <li key={meal.idMeal}>{meal.strMeal}</li>)
                }
            </ol>
        </div>
    );
};

export default SelectedMeals;