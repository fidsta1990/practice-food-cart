import styled, {keyframes} from "styled-components";

const bump = keyframes`
 0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
`;



export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  
`;

export const Header = styled.nav`
  height: 5rem;
  background-color: #8a2b06;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;

  .bump {
    animation: ${bump} 300ms ease-out;
  }
`;

export const ImgContainer = styled.article`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
`;

export const HeaderImg = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`;
