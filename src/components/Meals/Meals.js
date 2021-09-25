import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import SelectedMeals from '../SelectedMeals/SelectedMeals';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [selectedMeals, setSelectedMeals] = useState([]);
    const [search, setSearch] = useState('a');

    const searchHandler = event => {
        setSearch(event.target.value);
        
    }
    useEffect(()=>{
        console.log(search);
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+search)
        .then(res => res.json())
        .then(data =>{
            if(data.meals){
                setMeals(data.meals);
            }else{
                setMeals([]);
            }
        });
    }, [search]);

    const selectMealHandler = meal => {
       
        const check = selectedMeals.find(m => meal.idMeal === m.idMeal);
        if(!check){
            const newMeals = [...selectedMeals, meal];
            setSelectedMeals(newMeals);
        }
    }
    return (
        <>
            <div className="search-container">
                <input placeholder="Search Food" type="text" onChange={searchHandler} />
            </div>
            <div className="meals">
                <div className="meals-container">
                    <h2>Meals found: ({meals.length})</h2>
                    <div className="meals-holder">
                        {
                            meals.map(meal => <Meal meal={meal} selectMealHandler = {selectMealHandler} key={meal.idMeal} ></Meal>)
                        }
                    </div>
                </div>
                <div className="meals-details">
                        <SelectedMeals selectedMeals = {selectedMeals}></SelectedMeals>
                </div>
            </div>
        </>
    );
};

export default Meals;