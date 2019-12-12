import React from 'react'
import styled from 'styled-components'
import arrowBack from '../../../../../img/arrowBack.svg'
import {Link} from 'react-router-dom';

    interface NavButtonProps{
        linkTo?:string | null
    }
export default class NavButton extends React.Component <NavButtonProps,{}>{
    render(){

        
        return(<>
            {this.props.linkTo?<ArrowButton>
                <StyledLink to={this.props.linkTo}>
                    {/* <img src={arrowBack} alt="arrow back"></img> */}
                    <p>Powrót</p>
                    </StyledLink>

                </ArrowButton>:null}
                
            
            </>
        )
    }
}

const ArrowButton = styled.button`

outline:none;
border:1px solid black;
border-radius:7px 7px 0 0;
border-bottom:none;

background:none;
padding:0px 12px;
position:absolute;
left: -6%;
top: 28%;
transform: rotate(90deg);
font-size:11px;
    &:hover{
        font-weight:500;
    }
  


`
const StyledLink = styled(Link)`
display:flex;
text-decoration:none;  
color:#000;
text-transform:uppercase;
`