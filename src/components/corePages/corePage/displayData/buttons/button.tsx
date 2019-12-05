import React from 'react'
import styled from 'styled-components';
import {inject, observer} from 'mobx-react'
import {Link} from 'react-router-dom';
import store from '../../../../../store/store';
import axios from 'axios';

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

    saveValueToStore=()=>{

        if(this.props.followTo === '/district'){
           store.searchSpecialization = this.refButton.current!.textContent;
        }
         else if(this.props.followTo === '/citySearch'){
           store.searchDistrict = this.refButton.current.textContent;
        }else if(this.props.followTo=== '/results'){

            axios.get(`https://api.nfz.gov.pl/app-itl-api/queues?province=12&locality=KATOWICE&case=1&benefit=PORADNIA+NEUROLOGICZNA&format=json`)
                .then(function (res) {
                    const data =res.data.data.map((el: any )=>{
                        return {
                                date:el.attributes.dates.date,
                                place:el.attributes.provider,
                                address:`${el.attributes.locality} ${el.attributes.address}`,
                                phone:el.attributes.phone
                                }
                    })
                    store.dataApi=data;
                   
                    
      
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
      
    };
}
    render(){

        
      return(
                        <StyledButton onClick={this.saveValueToStore}>
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