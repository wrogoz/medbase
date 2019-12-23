import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent } from "*.svg";

export default class PopUp extends React.Component<{}, {}> {
  render() {
    return <PopupComp>
        <button>x</button>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Expedita molestias rerum, veniam blanditiis facere eum sunt 
            ut est necessitatibus quas, 
            excepturi repellat reiciendis reprehenderit quidem, at ab omnis exercitationem
             dicta.
        </p>
    </PopupComp>;
  }
}

const PopupComp = styled.section`
    width:50%;
    min-height:40%;
    background:rgba(200, 200,255, 0.8);
    position:absolute;
    left:25%;
    top:25%;
    z-index:20;
    border:1px solid black;
    
`
