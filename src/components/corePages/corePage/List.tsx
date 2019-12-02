import React from 'react'
import styled from 'styled-components';
import {observer} from 'mobx-react'



interface listT{
    listType:string[]
}
@observer
export default class List extends React.Component<listT,{}>{
    render(){

        const listItems = this.props.listType.map((el,i)=>{
            const id = i * (Math.floor(Math.random()*10000))
            return (
                
                <CoreListItem key={id}>
                    <button>{el}</button>
                </CoreListItem>
            )
        })

        return(
            <CoreList>
                    {listItems}
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
        text-transform:uppercase
        
    }
`