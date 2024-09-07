import {RootStackParams} from './navigation-types';

export interface IRoutes {
  name: keyof RootStackParams;
  component: () => React.JSX.Element;
}
