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
            {this.props.linkTo?<Arrow to={this.props.linkTo}></Arrow>:null}
                
            
            </>
        )
    }
}

const Arrow = styled(Link)`
    height:35px;
    width:35px; 
    background-image:url("${arrowBack}");
    background-repeat:no-repeat;
    border:1px solid black;
    border-radius:7px;
    background-size:20px 20px;
    background-position:center center;
    margin-bottom:4%;
    


`