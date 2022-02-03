import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

type Props = {
  children: React.ReactElement,
  isLoading?: boolean
}

export const Body: React.FC<Props> = ({ children, isLoading }) => {
  return <Container>{ isLoading ? <ActivityIndicator /> : children }</Container>
}
