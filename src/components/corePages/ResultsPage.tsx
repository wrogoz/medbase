import React from 'react'
import styled from 'styled-components';


export default class Results extends React.Component<{},{}>{
    render(){
        return(
            <ResultsList>
                <Result>
                    <Date>
                        13.12.2019
                    </Date>
                    <Place>
                    przychodnia agmed spółka z ograniczoną odpowiedzialnością
                    </Place>
                    <Adress>
                    KATOWICE, xawerego dunikowskiego 12-14-16
                    </Adress>
                    <Phone>
                    48 32 258 24 02
                    </Phone>
                </Result>

                <Result>
                    <Date>
                        13.12.2019
                    </Date>
                    <Place>
                    przychodnia agmed spółka z ograniczoną odpowiedzialnością
                    </Place>
                    <Adress>
                    KATOWICE, xawerego dunikowskiego 12-14-16
                    </Adress>
                    <Phone>
                    48 32 258 24 02
                    </Phone>
                </Result>

                <Result>
                    <Date>
                        13.12.2019
                    </Date>
                    <Place>
                    przychodnia agmed spółka z ograniczoną odpowiedzialnością
                    </Place>
                    <Adress>
                    KATOWICE, xawerego dunikowskiego 12-14-16
                    </Adress>
                    <Phone>
                    48 32 258 24 02
                    </Phone>
                </Result>

                <Result>
                    <Date>
                        13.12.2019
                    </Date>
                    <Place>
                    przychodnia agmed spółka z ograniczoną odpowiedzialnością
                    </Place>
                    <Adress>
                    KATOWICE, xawerego dunikowskiego 12-14-16
                    </Adress>
                    <Phone>
                    48 32 258 24 02
                    </Phone>
                </Result>
            </ResultsList>
        )
    }
}

const ResultsList = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    min-height:70vh;
    margin:0;
    padding:0;
    font-family: 'Montserrat', sans-serif;
`

const Result = styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-transform:uppercase;
    border-bottom:1px solid black;
    text-align:center;

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