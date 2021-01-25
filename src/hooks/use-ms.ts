import { useContext } from 'react';
import MSContext from '../context';
import ms from '../ms';

const useMs = (value: number) => {
    const context = useContext(MSContext);
    return ms(value, context.ratio, context.base);
};

export default useMs;
