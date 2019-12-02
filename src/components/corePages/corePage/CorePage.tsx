import React from 'react'
import styled from 'styled-components';
import List from './List'

import {observer} from 'mobx-react';

interface Core{
    chooseText:string,
    pageNumber:string,
    listType:string[]
  
}

@observer
export default class CorePage extends React.Component <Core,{}>{
    render(){


     
        return(
            <Core>
                <Circle>
                    <p>{this.props.pageNumber}</p>
                </Circle>
                <CoreMessage>
                    Wybierz {this.props.chooseText}
                </CoreMessage>
                <List listType={this.props.listType}/>
                
            </Core>
            
        )
    }
}

const Core = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family: 'Montserrat', sans-serif;

`
const Circle = styled.div`
    width:99px;
    height:99px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid #747474;
    border-radius:50%;
    margin-top:20px;
    p{
        font-size:64px;
        
    }
`

const CoreMessage = styled.p`
    align-text:center;
    font-size:0.9em;
    line-height:17px;
    text-align:center;
    text-transform:uppercase;
    letter-spacing:0.11em;
    color:#747474;
    margin:40px 0;
    

`


