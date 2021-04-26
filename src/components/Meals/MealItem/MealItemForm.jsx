import React, { useRef, useState } from "react";
import * as Styled from "./MealItemFormStyle";
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <Styled.Form onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Styled.FormButton>+Add to Cart</Styled.FormButton>
      {!amountValid && <p>Please add aa valid amount (1-5).</p>}
    </Styled.Form>
  );
};

export default MealItemForm;
