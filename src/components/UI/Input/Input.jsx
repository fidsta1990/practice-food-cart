import React from "react";
import * as Styled from "./InputStyle";

const Input = React.forwardRef((props, ref) => {
  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={props.input.id}>{props.label}</Styled.Label>
      <Styled.FormControl ref={ref} {...props.input} />
    </Styled.Wrapper>
  );
});

export default Input;
