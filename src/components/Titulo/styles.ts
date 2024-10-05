import styled from 'styled-components';
import { Props } from './index';

export const Titulo = styled.h3<Props>`
  color: #282A35;
  font-size: ${ (props) => props.fontSize ? props.fontSize : 14 }px;
  font-weight: bold;
  margin-bottom: 16px;
`
