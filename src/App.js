import React,{useState} from 'react';
import Header from "./Components/Header";
import GlobalStyles from "./Global";
import Logo from "./Components/Logo";
import styled,{css} from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-image:url(bgblur.png);
  transition: 1s;
  height: 1000px;
  ${props => props.bluertime ? "" : "background-image:url(bg.png)"}

`;

function App() {
  const [bluetime, setblurtime] = useState(true);
  setTimeout(() => {
    setblurtime(false);
  }, 1000)
  return (
    <Wrapper bluertime={bluetime}>
      <GlobalStyles />
      {bluetime ? "" : <Header />}
      <Logo />
    </Wrapper>
  );
}

export default App;
