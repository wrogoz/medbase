import React from 'react'
import styled from 'styled-components'
// import arrowBack from '../../../../../img/arrowBack.svg'
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
cursor:pointer;
background:none;
padding:0px 12px;
position:absolute;
left: -25px;
top: 180px;
transform: rotate(90deg);
font-size:11px;

    &:hover{
        font-weight:500;
        
    };
    @media(max-width:300px){
        top:160px;
        
    }
    @media(min-width:530px){
        top:210px;
        font-size:13px;
    }
    @media(min-width:768px){
        left:-31px;
        top:280px;
        font-size:13px;
        letter-spacing:2px;
    }
    @media(min-width:1050px){
        left:-35px;
        top: 225px;
        font-size:14px;
        
        
    }


`
const StyledLink = styled(Link)`
    display:flex;
    text-decoration:none;  
    color:#000;
    text-transform:uppercase;
    
    
`