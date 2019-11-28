import React from 'react'
import '@material/layout-grid/dist/mdc.layout-grid.css';
import Header from './../Header';
import CorePage from '../corePages/corePage/CorePage'
import Footer from './../footer';
export default class Layout extends React.Component<{},{}>{
    render(){
        return(
            <div>
                <Header
                    title="medbase"
                    subtitle="Wyszukiwarka lekarzy NFZ"
                />
                <CorePage/>
                <Footer/>
            </div>
        )
    }
}


