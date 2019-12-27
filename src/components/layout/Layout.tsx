import React from "react";
import Header from "./../Header";
import Footer from "../Footer";
import { Switch, Route } from "react-router-dom";
import ChooseSpecialistPage from "./../corePages/ChooseSpecialistPage";
import ChooseDistrictPage from "../corePages/ChooseDistrictPage";
import CitySearchPage from "../corePages/CitySearchPage";
import ResultsPage from "../corePages/ResultsPage";
import styled from "styled-components";

export default class Layout extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <Header title="medbase" subtitle="Wyszukiwarka lekarzy NFZ" />
        <Switch>
          
          <Route exact path="/district" component={ChooseDistrictPage} />
          <Route exact path="/citySearch" component={CitySearchPage} />
          <Route exact path="/results" component={ResultsPage} />
          <Route  path="/" component={ChooseSpecialistPage} />
        </Switch>

        <Footer />
      </Container>
    );
  }
}

const Container = styled.div`
  min-height: 100vh;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
`;
