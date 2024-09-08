import {RootStackParams, RootTabParams} from './navigation-types';

export interface ITabRoutes {
  name: keyof RootTabParams;
  component: () => React.JSX.Element;
}

export interface IStackRoutes {
  name: keyof RootStackParams;
  component: () => React.JSX.Element;
  options?: object;
}
