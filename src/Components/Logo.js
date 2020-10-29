import React from 'react';
import styled, { keyframes} from 'styled-components';

const animation = keyframes`
    0%,
     {
        -webkit-filter: blur(0px);
        -moz-filter: blur(0px);
        -o-filter: blur(0px);
        -ms-filter: blur(0px);
    }
    50% {
        -webkit-filter: blur(50px);
        -moz-filter: blur(50px);
        -o-filter: blur(50px);
        -ms-filter: blur(50px);
    }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 45%;
  animation: 2s ${animation} ease-out;
  left: 45%;
`;

const Image = styled.img`
  width: 10em;
  height: 10em;
`;



export default () => {
  return (
    <Wrapper>
      <Image src="/logo.jpeg" />
    </Wrapper>
  )
}
