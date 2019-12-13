import React from 'react'
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';
import store from '../../store/store';



@inject('store')
@observer
export default class Results extends React.Component<{},{}>{

    render(){
        
        const displayResults = store.dataApi.map((el,i)=>{
            return (
                
                <Result key={`result-${i}`}>
                    <Date>
                        {el.date}
                    </Date>
                    <Place>
                        {el.place}
                    </Place>
                    <Adress>
                        {el.address}
                    </Adress>
                    <Phone>
                        {el.phone}
                    </Phone>
                </Result>
            )
        })
        
           const displayLoading=<>
           <p>Trwa pobieranie danych</p>
           <p>Proszę czekać... w końcu to NFZ :)</p>
           
           </>
        

        return(
            <ResultsList>
               {store.dataApi.length<=1?displayLoading:displayResults}
            </ResultsList>
        )
    }
}

const ResultsList = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    min-height:70vh;
   
    padding:10px;
    font-family: 'Montserrat', sans-serif;
`

const Result = styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-transform:uppercase;
    border-bottom:1px solid black;
    text-align:center;
    margin:0;
    min-width:70%;
    max-width:70%;

    

`

const Date = styled.p`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 3px;
    margin-bottom: 0px;
`
const Place = styled.p`
    font-size:12px;
    letter-spacing:2px;
    line-height:20px;
    margin-bottom:10px;
`
const Adress = styled.p`
    font-size:11px;
    letter-spacing: 1px;
    margin-top:0;
`
const Phone = styled.p`
    font-size:12px;
    letter-spacing:5px;
`