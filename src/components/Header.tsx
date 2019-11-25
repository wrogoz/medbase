import React from 'react'
import styled from 'styled-components';
export default class Header extends React.Component<{},{}>{
    render(){
        return(
            <StyledHeader>
                <h1>MEDBASE</h1>
            </StyledHeader>
        )
    }
}

const StyledHeader = styled.div`
    height:12vh;
`