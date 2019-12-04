import React from 'react'
import styled from 'styled-components';
import {observer} from 'mobx-react'
import Button from './buttons/button';

interface DisplayDataInterface{
    listType?:string[] 
    followTo:string
   
   
    
}
@observer
export default class DisplayData extends React.Component<DisplayDataInterface,{}>{
    render(){
        let displayData:JSX.Element | JSX.Element[];
        if(this.props.listType){
            displayData = this.props.listType.map((el,i)=>{
                const id = i * (Math.floor(Math.random()*10000))
                return (
                    
                    <CoreListItem key={id}>

                        <Button
                            followTo={this.props.followTo}
                            buttonTxt={el} 
                        />
                        
                    </CoreListItem>
                )
            })
           displayData= <CoreList>
                    {displayData}
            </CoreList>
        }else{
            displayData=
                        <CitySearchBox>
                            <input/>
                            <Button
                            followTo={this.props.followTo}
                            buttonTxt="Wynik wyszukiwania" />
                           
                        </CitySearchBox>
        }
        

        return(
                <>
                    {displayData}
                </>
        )
    }
}

const CoreList = styled.ul`
    overflow-y:scroll;
    width:100%;
    margin:0;
    padding:0;
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    list-style:none;
`

const CoreListItem = styled.li`
    display:flex;
    justify-content:center;
    width:35%;
    
`
const CitySearchBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:10%;
    min-height:46vh;
        input{
            outline:none;
            border:none;
            border-bottom:1px solid #747474;
            text-align:center;
            text-transform:uppercase;
            width:75%;
            font-size:22px;
        }
`
