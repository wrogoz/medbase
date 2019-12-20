import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import store from "../../../../../store/store";
interface BackwardButtonProps {
  linkTo?: string | null;
  text?: string;
}
@inject("store")
@observer
export default class BackwardButton extends React.Component<
  BackwardButtonProps,
  {}
> {
  resetResult = () => {
    if (store.dataApi.length > 1) {
      store.dataApi = [
        {
          date: "",
          place: "",
          address: "",
          phone: ""
        }
      ];
    }
  };
  render() {
    return (
      <>
        {this.props.linkTo ? (
          <BackButton onClick={this.resetResult}>
            <StyledLink to={this.props.linkTo}>
              <p>{this.props.text}</p>
            </StyledLink>
          </BackButton>
        ) : null}
      </>
    );
  }
}

const BackButton = styled.button`
  outline: none;
  border: 1px solid black;
  border-radius: 7px 7px 0 0;
  border-bottom: none;
  cursor: pointer;
  background: none;
  padding: 0px 12px;
  position: absolute;
  left: -25px;
  top: 180px;
  transform: rotate(90deg);
  font-size: 11px;
  z-index: 2;

  &:hover {
    font-weight: 500;
  }
  @media (max-width: 300px) {
    top: 160px;
  }
  @media (min-width: 530px) {
    top: 210px;
    font-size: 13px;
  }
  @media (min-width: 768px) {
    left: -31px;
    top: 280px;
    font-size: 13px;
    letter-spacing: 2px;
  }
  @media (min-width: 1050px) {
    left: -35px;
    top: 225px;
    font-size: 14px;
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
`;
