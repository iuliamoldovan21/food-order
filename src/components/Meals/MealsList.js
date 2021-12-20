import React from "react";
import MealItem from "./MealItem/MealItem";
const MealsList = (props) => {
  const mealsList = props.meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));
  return <ul>{mealsList}</ul>;
};

export default MealsList;
