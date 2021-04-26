import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import * as Styled from "./ModalStyle";

const Backdrop = (props) => {
  return <Styled.Drop onClick={props.onHide}></Styled.Drop>;
};

const ModalOverlay = (props) => {
  return (
    <Styled.ModalDiv>
      <div className="content">{props.children}</div>
    </Styled.ModalDiv>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHide={props.onHide} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
