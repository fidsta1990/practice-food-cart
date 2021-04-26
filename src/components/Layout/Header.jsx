import React from "react";
import * as Styled from "./HeaderStyle.js";
import mealsImage from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton.jsx";

const Header = (props) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </Styled.Header>
      <Styled.ImgContainer>
        <Styled.HeaderImg
          src={mealsImage}
          alt="a table full of delicious food"
        />
      </Styled.ImgContainer>
    </Styled.Wrapper>
  );
};

export default Header;
