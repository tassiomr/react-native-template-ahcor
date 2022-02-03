import styled from 'styled-components/native';
import { IStyledComponentsProps } from '../../types/interface';

export const Component = styled.View`
  flex: 1;
  width: 100%;
  alignItems: center;
  paddingLeft: 8;
  paddingRight: 8;
  backgroundColor: ${(props: IStyledComponentsProps) => props.theme.background};
`;
