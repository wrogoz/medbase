import React from 'react'
import styled from 'styled-components';

export default class CorePage extends React.Component <{},{}>{
    render(){
        return(
            <Core>
                <Circle>
                    <p>1</p>
                </Circle>
                <CoreMessage>
                    Wybierz specjalizację
                </CoreMessage>

                <CoreList>
                    <CoreListItem>
                        <button>neurolog</button>
                    </CoreListItem>
                    <CoreListItem>
                        <button>neurolog</button>
                    </CoreListItem>
                    <CoreListItem>
                        <button>neurolog</button>
                    </CoreListItem>
                    <CoreListItem>
                        <button>neurolog</button>
                    </CoreListItem>
                    <CoreListItem>
                        <button>neurolog</button>
                    </CoreListItem>
                    <CoreListItem>
                        <button>neurolog</button>
                    </CoreListItem>
                    <CoreListItem>
                        <button>neurolog</button>
                    </CoreListItem>
                    <CoreListItem>
                        <button>neurolog</button>
                    </CoreListItem>
                    <CoreListItem>
                        <button>neurolog</button>
                    </CoreListItem>
                    <CoreListItem>
                        <button>neurolog</button>
                    </CoreListItem>
                    <CoreListItem>
                        <button>neurolog</button>
                    </CoreListItem>
                    <CoreListItem>
                        <button>neurolog</button>
                    </CoreListItem>
                </CoreList>
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
    margin-bottom:17px;
    width:39%;
    button{
        height:36px;
        width:142px;
        outline:none;
        border:none;
        border-radius:7px;
      
        background-color:#000;
        color:#f2f2f2;
        letter-spacing:-3%;
        font-size:14px;
        
    }
`
