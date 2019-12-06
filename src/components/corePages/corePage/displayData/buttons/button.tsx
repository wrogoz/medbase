import React from 'react'
import styled from 'styled-components';
import {inject, observer} from 'mobx-react'
import {Link} from 'react-router-dom';
import store from '../../../../../store/store';
import getDataFromApi from '../../../../../API/api'

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

    saveValueToStore=()=>{

        if(this.props.followTo === '/district'){
         store.specializationNameToOfficialName(this.refButton.current.textContent)
          
           console.log(store.searchSpecialization)
        }
         else if(this.props.followTo === '/citySearch'){

           store.districtNameToDistrictCode(this.refButton.current.textContent)

            console.log(this.refButton.current.textContent)
           console.log(store.searchDistrict)

        }else if(this.props.followTo=== '/results'){

            getDataFromApi(store);
            
      
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
    outline:none;
    border:none;
    border-radius:7px;
    margin-top:20%;
    background-color:#000;
    color:#f2f2f2;
    letter-spacing:-3%;
    font-size:14px;
    text-transform:uppercase
    
`

const StyledLink = styled(Link)`
    text-decoration:none;
    color:#fff;
`