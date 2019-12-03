import React from 'react'
import CorePage from './corePage/CorePage'
import {observer,inject} from 'mobx-react';
import store from '../../store/store';
@inject('store')
@observer
export default class ChooseSpecialistPage extends React.Component<{},{}>{
    render(){
        return(
            <CorePage
                pageNumber="1"
                chooseText="specjalistę"
                listType={store.specialization}
                followTo="/district"
               
            />
        )
    }
}