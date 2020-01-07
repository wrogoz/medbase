import React from "react";
import styled, { keyframes } from "styled-components";
import { inject, observer } from "mobx-react";
import store from "../../store/store";
import BackwardButton from "./corePage/displayData/buttons/BackwardButton";
import { Link } from "react-router-dom";

@inject("store")
@observer
export default class Results extends React.Component<{}, {}> {
  clearStoreDataApi = () => {
    store.dataApi = [
      {
        date: "",
        place: "",
        address: "",
        phone: ""
      }
    ];
  };

  componentDidMount() {
    window.scroll(0, 0);

    if (store.searchSpecialization === "") {
      window.location.href = "/";
    }
  }
  render() {
    const displayResults = store.dataApi.map((el, i) => {
      if (el === null) {
        return null;
      } else {
        return (
          <Result key={`result-${i}`}>
            <Date>Termin: {el.date}</Date>
            <Place>{el.place}</Place>
            <Adress>{el.address}</Adress>
            <Phone>{el.phone}</Phone>
          </Result>
        );
      }
    });

    const loading = <DisplayLoading>Trwa pobieranie danych...</DisplayLoading>;

    return (
      <>
        <BackwardButton backTo={"/citySearch"} text="powrót" />

        <RestartButton onClick={this.clearStoreDataApi}>
          <StyledLink to="/">
            <p>Ponowne wyszukiwanie</p>
          </StyledLink>
        </RestartButton>

        <ResultsList>{store.loadingApi ? loading : displayResults}</ResultsList>
      </>
    );
  }
}
const scaleContent = keyframes`
  from{
    transform:scale(0.1)
  }
  to{
    transform:translateY(1)
  }
`;
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
  border-bottom: 1px solid ${props => props.theme.primaryColor};
  text-align: center;
  margin: 0;
  min-width: 70%;
  max-width: 70%;
  animation-name: ${scaleContent};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const Date = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 3px;
  margin-bottom: 0px;
  color: ${props => props.theme.primaryColor};
`;
const Place = styled.p`
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  margin-bottom: 10px;
  color: ${props => props.theme.primaryColor};
`;
const Adress = styled.p`
  font-size: 11px;
  letter-spacing: 1px;
  margin-top: 0;
  color: ${props => props.theme.primaryColor};
`;
const Phone = styled.p`
  font-size: 12px;
  letter-spacing: 5px;
  color: ${props => props.theme.primaryColor};
`;

const RestartButton = styled.button`
  outline: none;
  border: 1px solid ${props => props.theme.primaryColor};
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
  z-index: 2;
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
  color: ${props => props.theme.primaryColor};
  text-transform: uppercase;
`;

const DisplayLoading = styled.p`
  color: ${props => props.theme.primaryColor};
`;
