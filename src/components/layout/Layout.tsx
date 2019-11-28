import React from 'react'
import '@material/layout-grid/dist/mdc.layout-grid.css';
import Header from './../Header';
export default class Layout extends React.Component<{},{}>{
    render(){
        return(
            <div>
                <Header
                    title="medbase"
                    subtitle="Wyszukiwarka lekarzy NFZ"
                />
                <p>core</p>
                <p>footer</p>
            </div>
        )
    }
}


