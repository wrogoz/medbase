import React from 'react'
import '@material/layout-grid/dist/mdc.layout-grid.css';
import Header from './../Header';
import Footer from './../footer';
import ChooseSpecialistPage from './../corePages/ChooseSpecialistPage';
import ChooseDistrictPage from '../corePages/ChooseDistrictPage';
export default class Layout extends React.Component<{},{}>{
    render(){
        return(
            <div>
                <Header
                    title="medbase"
                    subtitle="Wyszukiwarka lekarzy NFZ"
                />
                <ChooseDistrictPage />
                <Footer/>
            </div>
        )
    }
}


