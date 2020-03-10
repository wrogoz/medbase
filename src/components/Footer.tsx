import React from "react";
import styled from "styled-components";

export default class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <StyledFooter>
        <ContactBox>
          <p>contact:</p>

          <p>admin@medbase.pl</p>
        </ContactBox>

        <p>2020<sup>&copy;</sup>Medbase</p>
      </StyledFooter>
    );
  }
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 30px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.thirdColor};
  position: sticky;
  bottom: 0;
  margin-top: auto;
  p {
    padding: 0 10px;
    font-size: 0.6em;
    color: #f9f9f9;
    letter-spacing: 4px;

  }



  @media (min-width: 768px) {
    padding: 15px 0;
    p{

      font-size: 1em;
      margin-right:40%;
      letter-spacing:10px;

    }
  }
  @media (min-width: 1050px) {
    margin-top: auto;
  }
`;
const ContactBox = styled.div`
display:flex;
flex-direction:column;
padding-left:10px;
justify-content:space-evenly;

p{
  padding:0;
  margin:0;
  letter-spacing:0;
  font-size:0.5em;
  @media(min-width:768px){
    font-size:0.7em;
    padding:3px;
  }
}

`
