import React from "react";
import CorePage from "./corePage/CorePage";
import { observer, inject } from "mobx-react";
import store from "../../store/store";
import { getCityDataFromApi, getDistrictDataFromApi } from "../../API/api";

@inject("store")
@observer
export default class ChooseDistrictPage extends React.Component<{}, {}> {
  addCityToStore = () => {
    if (store.searchCity.length > 0) {
      getCityDataFromApi(store);
    } else {
      getDistrictDataFromApi(store);
    }
  };
  componentDidMount() {
    if (store.searchSpecialization === "") {
      window.location.href = "/";
    }
  }
  render() {
    return (
      <CorePage
        onClickHandler={this.addCityToStore}
        pageNumber="3"
        chooseText="miasto (opcjonalnie)"
        followTo="/results"
        linkTo="/district"
        text="powrót"
      />
    );
  }
}
