import React from "react";
import CorePage from "./corePage/CorePage";
import { observer, inject } from "mobx-react";
import store from "../../store/store";
@inject("store")
@observer
export default class ChooseDistrictPage extends React.Component<{}, {}> {
  componentDidMount() {
    if (store.searchSpecialization === "") {
      window.location.href = "/";
    }
  }

  addDistrictToStore = ()=>{
    store.districtNameToDistrictCode(store.selectedButton);
    
  }
  render() {
    return (
      <CorePage
        onClickHandler={this.addDistrictToStore}
        pageNumber="2"
        chooseText="województwo"
        listType={store.district}
        followTo="/citySearch"
        backTo="/"
        text="powrót"
      />
    );
  }
}
