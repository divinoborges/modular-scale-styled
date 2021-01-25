# Modular Scale Styled

> An easy-to-use library for creating meaningful typography

[![NPM](https://img.shields.io/npm/v/modular-scale-styled.svg)](https://www.npmjs.com/package/modular-scale-styled)

## Install

```bash
npm install --save modular-scale-styled
```

## Basic usage

```tsx
import React from 'react'

import MSStyled, { Scale, Text } from 'modular-scale-styled'

const options = {
    base: 16,              // is the base size in px
    ratio: Scale.GOLDEN    // is the chosen scale
}

const App = () => {
    return (
        <MSStyled options={options}>
            {/* the size parameter means the size within the scale */}
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
```

## Creating a custom component

```tsx
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
        </MSStyled>
    )
}
```

## Supported scales


| Scale  |  Value  |
| ------------------- | ------------------- |
| Minor Second |  1.067 | 
| Major Second |  1.125 | 
| Minor Third |  1.2 | 
| Major Third |  1.25 | 
| Perfect Fourth |  1.333 | 
| Aug Fourth / Dim Fifth |  1.414 | 
| Perfect Fifth |  1.5 | 
| Minor Sixth |  1.6 | 
| Golden Section |  1.618 | 
| Major Sixth |  1.667 | 
| Minor Seventh |  1.778 | 
| Major Seventh |  1.875 | 
| Octave |  2 | 
| Major Tenth |  2.5 | 
| Major Eleventh |  2.667 | 
| Major Twelfth |  3 | 
| Double Octave |  4 | 

## License

MIT © [divinoborges](https://github.com/divinoborges)

Follow me on Twitter [@divinoborges_](https://twitter.com/divinoborges_)
