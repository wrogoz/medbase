import React from "react";
import styled from "styled-components";

interface HeaderElements {
  title: string;
  subtitle: string;
}

export default class Header extends React.Component<HeaderElements, {}> {
  render() {
    return (
      <StyledHeader>
        <AppTitle>{this.props.title}</AppTitle>

        <SubTitle>{this.props.subtitle}</SubTitle>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Montserrat", sans-serif;
  position: sticky;
  top: 1px;
  background-color: #fff;
  z-index:1;
`;
const AppTitle = styled.h1`
  margin: 0;
  padding: 36px 0 12px 10px;
  font-size: 36px;
  font-style: normal;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  font-weight: 400;
  @media (max-width: 300px) {
    font-size: 22px;
  }
  @media (min-width: 530px) {
    font-size: 50px;
  }
  @media (min-width: 768px) {
    font-size: 80px;
    padding-top: 50px;
  }
  @media (min-width: 1050px) {
    font-size: 90px;
    padding-top: 2px;
  }
`;
const SubTitle = styled.h2`
  font-size: 16px;
  margin: 0;
  letter-spacing: 0.1em;
  color: #9e9a9a;
  font-weight: 400;
  padding-bottom: 20px;

  @media (max-width: 300px) {
    font-size: 12px;
  }
  @media (min-width: 530px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 26px;
    letter-spacing: 0.3em;
    margin-bottom: 2%;
    padding-top: 3%;
  }
  @media (min-width: 1050px) {
    padding-top: 0;
  }
`;
