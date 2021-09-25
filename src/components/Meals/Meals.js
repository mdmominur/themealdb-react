import React, { useEffect } from 'react';

const Meals = () => {

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default Meals;