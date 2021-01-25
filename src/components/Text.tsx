import styled from 'styled-components';
import useMs from '../hooks/use-ms';
import { ComponentProps } from '../models';

const Text = styled.p<ComponentProps>`
  font-size: ${(props) => useMs(props.size)}px;
`;

export default Text;
