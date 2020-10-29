import React from 'react';
import styled from 'styled-components';

const OutlineWrapper = styled.div`
position: fixed;
width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 10em;
  height: 10em;
`;

const Text = styled.span`
  color: white;
  font-size: 4rem;
  font-family:'lemonmilk';
  padding: 25px 0px;

`;

export default () => {
  return (
    <OutlineWrapper>
      <Wrapper>
        <Text>ENTROPY DSP</Text>
      </Wrapper>
    </OutlineWrapper>
  )
}
