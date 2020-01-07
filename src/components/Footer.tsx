import React from "react";
import styled from "styled-components";

export default class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <StyledFooter>
        <p>created by WRogoz</p>
      </StyledFooter>
    );
  }
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.thirdColor};
  position: sticky;
  bottom: 0;
  margin-top: auto;
  p {
    font-size: 0.75em;
    color: ${props => props.theme.secondaryColor};
    letter-spacing: 9px;
  }
  @media (min-width: 768px) {
    padding: 15px 0;
  }
  @media (min-width: 1050px) {
    margin-top: auto;
  }
`;
