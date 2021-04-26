import * as Styled from "./CartItemStyle";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Styled.Item>
      <div>
        <h2>{props.name}</h2>
        <Styled.Summary>
          <Styled.Price>{price}</Styled.Price>
          <Styled.Amount>x {props.amount}</Styled.Amount>
        </Styled.Summary>
      </div>
      <Styled.Actions>
        <Styled.ItemBtn onClick={props.onRemove}>−</Styled.ItemBtn>
        <Styled.ItemBtn onClick={props.onAdd}>+</Styled.ItemBtn>
      </Styled.Actions>
    </Styled.Item>
  );
};

export default CartItem;
