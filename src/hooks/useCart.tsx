import {addToCart, removeFromCart} from '../redux/features/cart/slicer';
import {useAppDispatch} from '../redux/store';
import {IStoreResponse} from '../types/response-types';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const addItem = (product: IStoreResponse) => {
    dispatch(addToCart(product));
  };
  const removeItem = () => {
    dispatch(removeFromCart());
  };
  return {addItem, removeItem};
};
