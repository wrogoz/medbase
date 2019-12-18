import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import store from "../../store/store";
import GoBackButton from "../corePages/corePage/displayData/buttons/BackButton";
import { Link } from "react-router-dom";

@inject("store")
@observer
export default class Results extends React.Component<{}, {}> {
  render() {
    const displayResults = store.dataApi.map((el, i) => {
      return (
        <Result key={`result-${i}`}>
          <Date>Termin: {el.date}</Date>
          <Place>{el.place}</Place>
          <Adress>{el.address}</Adress>
          <Phone>{el.phone}</Phone>
        </Result>
      );
    });

    const displayLoading = (
      <>
        <p>Trwa pobieranie danych</p>
        <p>Proszę czekać... w końcu to NFZ :)</p>
      </>
    );

    return (
      <>
        <GoBackButton linkTo={"/citySearch"} text="powrót" />

        <RestartButton>
          <StyledLink to="/">
            <p>Ponowne wyszukiwanie</p>
          </StyledLink>
        </RestartButton>

        <ResultsList>
          {store.dataApi.length <= 1 ? displayLoading : displayResults}
        </ResultsList>
      </>
    );
  }
}

const ResultsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  padding: 10px;
`;

const Result = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  border-bottom: 1px solid black;
  text-align: center;
  margin: 0;
  min-width: 70%;
  max-width: 70%;
`;

const Date = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 3px;
  margin-bottom: 0px;
`;
const Place = styled.p`
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  margin-bottom: 10px;
`;
const Adress = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  margin-top: 0;
`;
const Phone = styled.p`
  font-size: 12px;
  letter-spacing: 5px;
`;

const RestartButton = styled.button`
  outline: none;
  border: 1px solid black;
  border-radius: 7px 7px 0 0;
  border-bottom: none;
  cursor: pointer;
  background: none;
  padding: 0px 12px;
  position: absolute;
  left: -78px;
  top: 334px;
  transform: rotate(90deg);
  font-size: 11px;

  &:hover {
    font-weight: 500;
  }
  @media (max-width: 300px) {
    top: 300px;
  }
  @media (min-width: 530px) {
    top: 388px;
    left: -88px;
    font-size: 13px;
  }
  @media (min-width: 768px) {
    left: -108px;
    top: 490px;
    font-size: 13px;
    letter-spacing: 2px;
  }
  @media (min-width: 1050px) {
    left: -116px;
    top: 430px;
    font-size: 14px;
  }
`;
const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
`;
