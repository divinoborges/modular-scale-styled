import { createContext } from 'react';
import IOptions from './models/provider-options';

const MSContext = createContext<IOptions>({ base: 16, ratio: 1 });

export default MSContext;
