import 'styled-components';
import { IStyledComponentsProps } from './interface';

declare module 'styled-components' {
  export interface DefaultTheme extends IStyledComponentsProps {}
}
