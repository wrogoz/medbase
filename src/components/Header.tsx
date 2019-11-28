import React from 'react'
import styled from 'styled-components';

interface HeaderElements{
    title:string;
    subtitle:string;
}

export default class Header extends React.Component<HeaderElements,{}>{
    render(){
        return(
            <StyledHeader>
                
                <AppTitle>
                    {this.props.title}
                </AppTitle>

                <SubTitle>
                {this.props.subtitle}
                </SubTitle>

            </StyledHeader>
        )
    }
}

const StyledHeader = styled.header`
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family: 'Montserrat', sans-serif;
`
const AppTitle = styled.h1`
    margin:0;
    padding:36px 0 12px 16px;;
    font-size:36px;
    font-style:normal;
    letter-spacing:0.5em;
    text-transform:uppercase;
    font-weight:400;
    

`
const SubTitle = styled.h2`
    font-size:16px;
    margin:0;
    letter-spacing:0.1em;
    color:#9e9a9a;
    font-weight:400;

`