import React from "react";
import styled from "styled-components";

import store from "../store/store";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
export default class PopUp extends React.Component<{}, {}> {
  componentDidMount() {
    const PopUpInterval = setInterval(() => {
      if (store.PopUpTimer === 0) {
        clearInterval(PopUpInterval);
        store.isPopUpVisible = false;
      }
      store.PopUpTimer = store.PopUpTimer - 1;
    }, 1000);
  }
  closePopUp = () => {
    store.isPopUpVisible = false;
  };
  render() {
    return (
      <PopupComp
      onKeyPress={this.closePopUp}
      >
        <PopUpTxtBox>
          <p>
            Dane publikowane w MEDBASE są przekazywane przez szpitale oraz
            przychodnie.
          </p>
          <p>
            Informacje o pierwszym wolnym terminie powinny być przez nie
            aktualizowane co najmniej raz w tygodniu.
          </p>
          <ClosePopUpButton 
          onClick={this.closePopUp}
          
          >
                            
            Zamknij ({store.PopUpTimer} sek.)
          </ClosePopUpButton>
        </PopUpTxtBox>
      </PopupComp>
    );
  }
}

const PopupComp = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  border: 1px solid black;
`;
const PopUpTxtBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  max-width: 80%;
  height: 250px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  padding-top: 30px;
  p {
    font-size: 15px;
    margin: 0;
    text-align: center;
    line-height: 150%;
  }
  p:nth-of-type(2) {
    margin-top: 15px;
  }
`;
const ClosePopUpButton = styled.button`
  height: 36px;
  width: 135px;
  min-width: 110px;
  outline: none;
  border: none;
  border-radius: 7px;
  margin: auto 0;
  background-color: #000;
  color: #f2f2f2;
  letter-spacing: -3%;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
`;
