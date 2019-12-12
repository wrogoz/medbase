import React from 'react'
import styled from 'styled-components';
import DisplayData from './displayData/DisplayDataComponent'
import NavButton from '../../../components/corePages/corePage/displayData/buttons/navButton';
import {observer} from 'mobx-react';

interface Core{
    chooseText:string
    pageNumber:string
    listType?:string[]
    followTo:string
    linkTo?:string | null
    
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
                <NavButton
                    linkTo={this.props.linkTo}
                 />
                <DisplayData 
                    listType={this.props.listType}
                    followTo={this.props.followTo} 
                />
                 
                
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
    position:relative;
    p{
        font-size:64px;
        
    }
        @media(min-width:530px){
            height:120px;
            width:120px;
        }
        @media(min-width:768px){
            height:115px;
            width:115px;
            margin-top:5px;
            p{
                font-size:60px;
            }
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
    margin: 40px 0 24px 0px;
        @media(min-width:530px){
            font-size:1.1em;
        }
        @media(min-width:530px){
            font-size:1.4em;
        }
    

`


