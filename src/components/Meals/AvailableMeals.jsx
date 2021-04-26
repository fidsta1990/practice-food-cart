import React from "react";
import * as Styled from "./AvailableMealsStyle";
import Card from '../UI/Card/Card'
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  // helper func
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);

  return (
    <Styled.Meals>
      <Card>
        <Styled.MealUl>{mealsList}</Styled.MealUl>
      </Card>
    </Styled.Meals>
  );
};

export default AvailableMeals;
