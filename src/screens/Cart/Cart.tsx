import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppSelector} from '../../redux/store';
import {IStoreResponse} from '../../types/response-types';
import {Button} from 'react-native-paper';
import {useCart} from '../../utils/useCart';

const Cart = () => {
  const {cart} = useAppSelector(state => state.cart);
  const [cartItems, setCartItems] = useState<IStoreResponse[]>([]);
  const {removeItem} = useCart();

  useEffect(() => {
    if (cart) {
      setCartItems(cart);
    }
  }, [cart]);

  if (!cart.length) {
    return (
      <View>
        <Text>NO ITEMS</Text>
      </View>
    );
  }
  return (
    <View>
      {cartItems.map(item => {
        return (
          <View>
            <Text key={item.id}>{item.name}</Text>
            <Button onPress={() => removeItem(item.id)}>Delete Item</Button>
          </View>
        );
      })}
    </View>
  );
};

export default Cart;
