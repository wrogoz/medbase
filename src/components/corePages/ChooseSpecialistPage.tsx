import React from 'react'
import CorePage from './corePage/CorePage'
import {observer} from 'mobx-react';

@observer
export default class ChooseSpecialistPage extends React.Component<{},{}>{
    render(){
        return(
            <CorePage
                pageNumber="1"
                chooseText="specjalistę"
               
            />
        )
    }
}