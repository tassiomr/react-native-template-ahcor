import styled from 'styled-components/native';
import { IStyledComponentsProps } from '../../types/interface';

export const Component = styled.Text`
  color: ${(props: IStyledComponentsProps) => props.theme.accent};
  font-size: 14px;
  font-weight: 700;
`
