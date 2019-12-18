import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface BackButtonProps {
  linkTo?: string | null;
  text?: string;
}
export default class GoBackButton extends React.Component<BackButtonProps, {}> {
  render() {
    return (
      <>
        {this.props.linkTo ? (
          <BackButton>
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
