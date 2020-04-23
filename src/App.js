import React from "react";
import "./App.css";
import AstronomyContainer from "./components/AstronomyContainer";
import styled from "styled-components";

const WrapperDiv = styled.div`
  text-align:center;
  margin: 0 auto;
  width: 890px;
`;


function App() {
  
  return (
    <WrapperDiv>
      <p>
  
      </p> 
      <AstronomyContainer />
    
    </WrapperDiv>
  );
}

export default App;
