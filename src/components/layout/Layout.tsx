import React from 'react'
import '@material/layout-grid/dist/mdc.layout-grid.css';
import Header from './../Header';
import Footer from './../footer';
import {Switch, Route} from 'react-router-dom'
import ChooseSpecialistPage from './../corePages/ChooseSpecialistPage';
import ChooseDistrictPage from '../corePages/ChooseDistrictPage';
import CitySearchPage from '../corePages/CitySearchPage';
import ResultsPage from '../corePages/ResultsPage';
import styled from 'styled-components';
export default class Layout extends React.Component<{},{}>{
    render(){
        return(
            <Container>
                
                    
                    <Header
                        title="medbase"
                        subtitle="Wyszukiwarka lekarzy NFZ"
                    />
                    <Switch>
                        <Route exact path="/" component={ChooseSpecialistPage} />
                        <Route exact path="/district" component={ChooseDistrictPage} />
                        <Route exact path="/citySearch" component={CitySearchPage} />
                        <Route exact path="/results" component={ResultsPage} />
                    </Switch>
                    
                    <Footer/>
                
            </Container>
        )
    }
}


const Container = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    
`

