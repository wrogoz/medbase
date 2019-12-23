import React from "react";
import CorePage from "./corePage/CorePage";
import { observer, inject } from "mobx-react";
import store from "../../store/store";

@inject("store")
@observer
export default class ChooseDistrictPage extends React.Component<{}, {}> {
  componentDidMount() {
    window.scroll(0, 0);
    if (store.searchSpecialization === "") {
      window.location.href = "/";
    }
  }
  render() {
    return (
      <CorePage
        pageNumber="3"
        chooseText="miasto (opcjonalnie)"
        followTo="/results"
        linkTo="/district"
        text="powrót"
      />
    );
  }
}
