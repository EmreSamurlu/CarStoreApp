import {Pages} from '../constants/pages.enum';

export type RootTabParams = {
  [Pages.ProductStack]: RootStackParams;
  [Pages.Cart]: undefined;
  [Pages.Favorites]: undefined;
  [Pages.Profile]: undefined;
};

export type RootStackParams = {
  [Pages.ProductList]: undefined;
  [Pages.ProductDetail]: undefined;
};
