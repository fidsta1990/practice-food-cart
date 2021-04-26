import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import * as Styled from "./HeaderCardButtonStyle";
import CartIcon from "../Cart/CartIcon";

const HeaderCardButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const btnClass = `${btnHighlighted ? "bump" : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Styled.Button onClick={props.onClick} className={btnClass}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </Styled.Button>
  );
};

export default HeaderCardButton;
