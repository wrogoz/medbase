import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import Button from "./buttons/Button";
import store from "../../../../store/store";
import search from "../../../../img/search.svg";
import {
  getCityDataFromApi,
  getDistrictDataFromApi
} from "../../../../API/api";
import { withRouter } from "react-router-dom";

interface DisplayDataProps {
  listType?: string[];
  followTo: string;
  onClickHandler: (arg: string) => void;
}

@inject("store")
@observer
export default class DisplayData extends React.Component<DisplayDataProps, {}> {
  private router: any;

  componentDidMount() {
    window.scroll(0, 0);
  }

  observeUserCitySearch = (e: React.FormEvent<HTMLInputElement>) => {
    store.searchCity = e.currentTarget.value;
  };
  pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (store.searchCity.length > 0) {
        getCityDataFromApi(store);
      } else {
        getDistrictDataFromApi(store);
      }
    }
  };

  render() {
    const Input = withRouter(({ history }) => (
      <input
        type="text"
        onChange={this.observeUserCitySearch}
        onKeyPress={e => {
          if (e.key === "Enter") {
            this.pressEnter(e);
            history.push("/results");
          }
        }}
      />
    ));

    let displayData: JSX.Element | JSX.Element[];

    if (this.props.listType) {
      const sortedArray = this.props.listType.slice().sort();

      displayData = sortedArray.map((el, i) => {
        const id = `${i}${el}`;
        return (
          <CoreListItem key={id}>
            <Button
              followTo={this.props.followTo}
              buttonTxt={el}
              onClickHandler={this.props.onClickHandler}
            />
          </CoreListItem>
        );
      });
      displayData = <CoreList>{displayData}</CoreList>;
    } else {
      displayData = (
        <CitySearchBox>
          <Input />
          <Button
            followTo={this.props.followTo}
            buttonTxt="Wynik wyszukiwania"
            onClickHandler={this.props.onClickHandler}
          />
        </CitySearchBox>
      );
    }

    return <>{displayData}</>;
  }
}

const CoreList = styled.ul`
  overflow-y: scroll;
  width: 100%;
  margin: 0;
  margin-bottom: 5%;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style: none;
  z-index: 0;
  @media (min-width: 768px) {
    margin-top: 2%;
    overflow: hidden;
    width: 80%;
    padding-bottom: 50px;
  }
  @media (min-width: 1050px) {
    width: 70%;
  }
`;
const CoreListItem = styled.li`
  display: flex;
  justify-content: center;
  width: 35%;
  min-width: 120px;
  margin-top: 25px;
  @media (min-width: 530px) {
    width: 30%;
  }
  @media (min-width: 1050px) {
    width: 28%;
    margin-top: 30px;
  }
  @media (min-width: 1400px) {
    width: 22%;
    margin-top: 47px;
  }
`;
const CitySearchBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:10%;
    padding-bottom:5%;
    background-image:url("${search}");
    background-size: 48%;
    background-position: 53% 0%;
    background-repeat:no-repeat;
    
        @media(min-width:1050px){
            padding-top:3%;
            background-position: 53% 10%
            min-height:auto;
        }
        @media(min-height:1300px){
            background-position: 53% 10%
        }

        input{
            padding:5px 0;
            margin-bottom: 25%;
            margin-top: 1%;
            background:none;
            outline:none;
            border:none;
            border-bottom:1px solid #747474;
            color:${props => props.theme.primaryColor}
            text-align:center;
            text-transform:uppercase;
            width:75%;
            font-size:22px;
                @media(min-width:530px){
                    font-size:30px;
                }
        }
`;
