import React from 'react';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';
import Button from './buttons/Button';
import store from '../../../../store/store';
import search from '../../../../img/search.svg';
import {getCityDataFromApi, getDistrictDataFromApi} from '../../../../API/api';
import createHistory from 'history/createHashHistory';
interface DisplayDataProps{
    listType?:string[] 
    followTo:string
}
@inject("store")
@observer
export default class DisplayData extends React.Component<DisplayDataProps,{}>{
    private router:any
    observeUserCitySearch = (e:React.FormEvent<HTMLInputElement>)=>{
        store.searchCity = e.currentTarget.value
    }
    pressEnter = (e:React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key ==='Enter'){
            createHistory();
            if(store.searchCity.length>0 ){
                getCityDataFromApi(store)
            }        
             else{
                 getDistrictDataFromApi(store);
             }
            window.location.href="/results"
        }
    }
    
    render(){
        let displayData:JSX.Element | JSX.Element[] ;
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
                            <input 
                                onChange={this.observeUserCitySearch}
                                onKeyPress={this.pressEnter}
                            />
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
    margin-bottom:5%;
    padding:0;
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    list-style:none;
    @media(min-width:768px){
        margin-top:2%;
        overflow: hidden;
        width:80%;
    }
    @media(min-width:1050px){
        width: 70%;
    }
    

`

const CoreListItem = styled.li`
    display:flex;
    justify-content:center;
    width:35%;
    min-width:120px;
        @media(min-width:530px){
            width:30%;
        }
        @media(min-width:1050px){
            width: 25%;
        }
`
const CitySearchBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:10%;
    padding-bottom:5%;
    background-image:url("${search}");
    background-size: 48%;
    background-position: 53% 0%;
    background-repeat:no-repeat;
    
        @media(min-width:1050px){
            padding-top:3%;
            background-position: 53% 10%
            min-height:auto;
        }
        @media(min-height:1300px){
            
            background-position: 53% 10%
            
        }

    
        input{
            padding:5px 0;
            margin-bottom: 15%;
            margin-top: 1%;
            background:none;
            outline:none;
            border:none;
            border-bottom:1px solid #747474;
            text-align:center;
            text-transform:uppercase;
            width:75%;
            font-size:22px;
                @media(min-width:530px){
                    font-size:30px;
            }
            @media(min-width:1050px){
                
                
            }
        }
`
