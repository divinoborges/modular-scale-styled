import React from 'react'

import MSStyled, { Scale, Text } from 'modular-scale-styled'
import styled from "styled-components";

const options = {
    base: 16,
    ratio: Scale.GOLDEN
}

const MyCustomText= styled(Text)`
  color: #e51818;
  background-color: rebeccapurple;
`;

const App = () => {
    return (
        <MSStyled options={options}>
            <MyCustomText size={4}>Meaningful Typography</MyCustomText>
            <Text size={5}>Meaningful Typography</Text>
            <Text size={4}>Meaningful Typography</Text>
            <Text size={3}>Meaningful Typography</Text>
            <Text size={2}>Meaningful Typography</Text>
            <Text size={1}>Meaningful Typography</Text>
            <Text size={0}>Meaningful Typography</Text>
            <Text size={-1}>Meaningful Typography</Text>
            <Text size={-2}>Meaningful Typography</Text>
        </MSStyled>
    )
}

export default App
