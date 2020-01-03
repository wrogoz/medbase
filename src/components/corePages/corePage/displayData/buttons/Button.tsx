import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import store from "../../../../../store/store";


interface ButtonProps {
  buttonTxt: string;
  followTo: string;
  onClickHandler: any;
}

@inject("store")
@observer
export default class Button extends React.Component<ButtonProps, {}> {
  private refButton: React.RefObject<any>;
  constructor(props: ButtonProps) {
    super(props);
    this.refButton = React.createRef();
  }
  saveButtonTxt = ()=>{
    store.selectedButton =  this.refButton.current.textContent;
    
  }
  
  render() {
    return (
      <StyledLink to={this.props.followTo} ref={this.refButton}>
        <StyledButton onClick={()=>{this.saveButtonTxt();  this.props.onClickHandler();}}>
          {this.props.buttonTxt}
        </StyledButton>
      </StyledLink>
    );
  }
}

const StyledButton = styled.button`
  height: 36px;
  width: 135px;
  min-width: 110px;
  outline: none;
  border: none;
  border-radius: 7px;

  background-color: #000;
  color: #f2f2f2;
  letter-spacing: -3%;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 768px) {
    height: 50px;
    width: 180px;
    font-size: 16px;
    letter-spacing: 1px;
  }
  @media (min-width: 1050px) {
    width: 220px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
