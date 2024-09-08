import {ReactNode} from 'react';
import {RootStackParams, RootTabParams} from './navigation-types';

export interface ITabRoutes {
  name: keyof RootTabParams;
  component: () => React.JSX.Element;
}

export interface IStackRoutes {
  name: keyof RootStackParams;
  component: (params: RootStackParams) => ReactNode;
}
