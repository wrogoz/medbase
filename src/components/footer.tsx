import React from 'react'
import styled from 'styled-components';



export default class Footer extends React.Component<{},{}>{
    render(){
        return(
            <StyledFooter>
                <p>
                    created by WRogoz
                </p>
            </StyledFooter>
        )
    }
}

const StyledFooter = styled.footer`
    width:100%;
    height:62px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#f3f3f3;
    position:sticky;
    bottom:0;
    p{
        font-size:0.75em;
        color:#666262;
        letter-spacing:9px;
    }
`