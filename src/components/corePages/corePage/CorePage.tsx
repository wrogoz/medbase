import React from "react";
import styled from "styled-components";
import DisplayData from "./displayData/DisplayData";
import BackwardButton from "./displayData/buttons/BackwardButton";
import { observer, inject } from "mobx-react";

interface Core {
  chooseText: string;
  pageNumber: string;
  listType?: string[];
  followTo: string;
  backTo?: string | null;
  text?: string;
  onClickHandler: (arg: string) => any;
}

@inject("store")
@observer
export default class CorePage extends React.Component<Core, {}> {
  render() {
    return (
      <Core>
        <BackwardButton backTo={this.props.backTo} text={this.props.text} />
        <Circle>
          <p>{this.props.pageNumber}</p>
        </Circle>
        <CoreMessage>Wybierz {this.props.chooseText}</CoreMessage>
        <DisplayData
          onClickHandler={this.props.onClickHandler}
          listType={this.props.listType}
          followTo={this.props.followTo}
        />
      </Core>
    );
  }
}

const Core = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  padding: 0;
`;
const Circle = styled.div`
  width: 99px;
  height: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #747474;
  border-radius: 50%;
  margin-top: 20px;

  p {
    font-size: 64px;
  }
  @media (min-width: 530px) {
    height: 120px;
    width: 120px;
  }
  @media (min-width: 768px) {
    height: 115px;
    width: 115px;
    margin-top: 5px;
    p {
      font-size: 60px;
    }
  }
`;

const CoreMessage = styled.p`
  align-text: center;
  font-size: 0.9em;
  line-height: 17px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.11em;
  color: #747474;
  margin: 40px 0 24px 0px;

  @media (min-width: 530px) {
    font-size: 1.4em;
  }
  @media (min-width: 1050px) {
    margin-bottom: 0;
  }
`;
