import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsList from "./MealsList";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  const fetchMealsHandler = async () => {
    setError(null);

    const response = await fetch(
      "https://food-order-be-default-rtdb.firebaseio.com/meals.json"
    );
    if (!response.ok) throw new Error("Something went wrong!");
    const mealsObj = await response.json();

    let loadedMeals = [];
    for (const key in mealsObj) {
      const meal = mealsObj[key];
      loadedMeals.push({
        id: key,
        name: meal.name,
        description: meal.description,
        price: meal.price,
      });
    }
    setMeals(loadedMeals);
  };

  useEffect(() => {
    fetchMealsHandler().catch((err) => {
      setError(err.message);
    });
  }, []);

  if (error)
    return (
      <section className={classes["meals-error"]}>
        <p>{error}</p>
      </section>
    );

  return (
    <section className={classes.meals}>
      <Card>
        <MealsList meals={meals}></MealsList>
      </Card>
    </section>
  );
};

export default AvailableMeals;
