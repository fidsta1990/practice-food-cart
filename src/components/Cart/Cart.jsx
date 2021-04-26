import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import * as Styled from "./CartStyle";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };


  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <Styled.CartItems>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </Styled.CartItems>
  );

  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <Styled.Total>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </Styled.Total>
      <Styled.Actions>
        <Styled.ActionsBtn className="button--alt" onClick={props.onHide}>
          Close
        </Styled.ActionsBtn>
        {hasItems && (
          <Styled.ActionsBtn className="button">Order</Styled.ActionsBtn>
        )}
      </Styled.Actions>
    </Modal>
  );
};

export default Cart;
