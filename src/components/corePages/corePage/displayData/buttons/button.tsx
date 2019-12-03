import React from 'react'
import styled from 'styled-components';
import {observer} from 'mobx-react'
import {Link} from 'react-router-dom';


interface ButtonInterface{
    buttonTxt:string 
    followTo:string
}
@observer
export default class Button extends React.Component<ButtonInterface,{}>{
    render(){
      return(
                        <StyledButton>
                            <StyledLink to={this.props.followTo}>{this.props.buttonTxt}</StyledLink>
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