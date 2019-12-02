import React from 'react'
import styled from 'styled-components';
export default class List extends React.Component<{},{}>{
    render(){
        return(
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
    margin-bottom:17px;
    width:35%;
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