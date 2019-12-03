import React from 'react'
import '@material/layout-grid/dist/mdc.layout-grid.css';
import Header from './../Header';
import Footer from './../footer';
import {Switch, Route} from 'react-router-dom'
import ChooseSpecialistPage from './../corePages/ChooseSpecialistPage';
import ChooseDistrictPage from '../corePages/ChooseDistrictPage';
import CitySearchPage from '../corePages/CitySearchPage';

export default class Layout extends React.Component<{},{}>{
    render(){
        return(
            <div>
                
                    
                    <Header
                        title="medbase"
                        subtitle="Wyszukiwarka lekarzy NFZ"
                    />
                    <Switch>
                        <Route exact path="/" component={ChooseSpecialistPage} />
                        <Route exact path="/district" component={ChooseDistrictPage} />
                        <Route exact path="/citySearch" component={CitySearchPage} />
                    </Switch>
                    
                    <Footer/>
                
            </div>
        )
    }
}


