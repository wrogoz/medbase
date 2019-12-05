import React from 'react'
import styled from 'styled-components';
import {inject, observer} from 'mobx-react'
import {Link} from 'react-router-dom';
import store from '../../../../../store/store';

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

    saveValueFromButtonToStore=()=>{
        if(this.props.followTo === '/district'){
           store.searchSpecialization = this.refButton.current!.textContent;
        }
         else if(this.props.followTo === '/citySearch'){
           store.searchDistrict = this.refButton.current.textContent;
        }else if(this.props.followTo=== '/results'){
            console.log(store.searchCity)
            console.log(store.searchDistrict)
            console.log(store.searchSpecialization)
        
    };
}
    render(){

        

      return(
                        <StyledButton onClick={this.saveValueFromButtonToStore}>
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