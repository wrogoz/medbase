import React from "react";
import CorePage from "./corePage/CorePage";
import Popup from "../Popup";
import { observer, inject } from "mobx-react";
import store from "../../store/store";

@inject("store")
@observer
export default class ChooseSpecialistPage extends React.Component<{}, {}> {
  addSpecializationToStore = () => {
    store.specializationNameToOfficialName(store.selectedButton);
  };
  render() {
    return (
      <>
        {store.isPopUpVisible ? <Popup /> : null}
        <CorePage
          onClickHandler={this.addSpecializationToStore}
          pageNumber="1"
          chooseText="specjalistę"
          listType={store.specialization}
          followTo="/district"
          linkTo={null}
        />
      </>
    );
  }
}
