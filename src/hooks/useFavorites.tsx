import {
  addToFavorites,
  removeFromFavorites,
} from '../redux/features/favorites/slicer';
import {useAppDispatch} from '../redux/store';
import {IStoreResponse} from '../types/response-types';

export const useFavorites = () => {
  const dispatch = useAppDispatch();

  const addItemToFavorites = (product: IStoreResponse) => {
    dispatch(addToFavorites(product));
  };

  const removeItemFromFavorites = (productId: string) => {
    dispatch(removeFromFavorites(productId));
  };

  return {addItemToFavorites, removeItemFromFavorites};
};
