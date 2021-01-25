import React from 'react';
import MSContext from '../context';
import { ProviderOptions } from '../models';

interface Props {
    options: ProviderOptions
    children: object
}

const MSStyled = ({ options, children }: Props) => (
    <MSContext.Provider value={options}>
        {children}
    </MSContext.Provider>
);

export default MSStyled;
