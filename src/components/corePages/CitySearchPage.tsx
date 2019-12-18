import React from "react";
import CorePage from "./corePage/CorePage";
import { observer } from "mobx-react";

@observer
export default class ChooseDistrictPage extends React.Component<{}, {}> {
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
