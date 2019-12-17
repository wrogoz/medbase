import React from 'react'
import styled from 'styled-components';
import {inject, observer} from 'mobx-react'
import {Link} from 'react-router-dom';
import store from '../../../../../store/store';
import {getCityDataFromApi, getDistrictDataFromApi} from '../../../../../API/api'

interface ButtonProps{
    buttonTxt:string 
    followTo:string
    
}
@inject("store")
@observer
export default class Button extends React.Component<ButtonProps,{}>{
    
   private refButton:React.RefObject<any>
    constructor(props:ButtonProps){
        
        super(props);
        this.refButton = React.createRef();
    }

    saveValueToStore= () =>{
//  -----------------SAVE SPECIALIZATION TO STORE
        if(this.props.followTo === '/district'){
            store.specializationNameToOfficialName(this.refButton.current.textContent)
    
        }
//  -----------------SAVE DISTRICT TO STORE        
        else if(this.props.followTo === '/citySearch'){

            store.districtNameToDistrictCode(this.refButton.current.textContent)

//  -----------------SAVE CITY NAME TO STORE (OPTIONAL)
        }else if(this.props.followTo=== '/results'){
           
        if(store.searchCity.length>0 ){
                   getCityDataFromApi(store)
               }        
                else{
                    getDistrictDataFromApi(store);
                }
    };
}
    render(){

        
      return(
                        <StyledButton onClick={this.saveValueToStore}>
                            <StyledLink to={this.props.followTo}  ref={this.refButton}>{this.props.buttonTxt}</StyledLink>
                        </StyledButton>
                )
    }
}

const StyledButton = styled.button`

    height:36px;
    width:142px;
    min-width:110px;
    outline:none;
    border:none;
    border-radius:7px;
    margin-top:20%;
    background-color:#000;
    color:#f2f2f2;
    letter-spacing:-3%;
    font-size:12px;
    text-transform:uppercase
    
        @media(min-width:768px){
            height: 50px;
            width: 180px;
            font-size: 16px;
            letter-spacing:1px;
        }
        @media(min-width:1050px){
            margin-top:15%;
            
        }
    
`
const StyledLink = styled(Link)`
    text-decoration:none;
    color:#fff;
`