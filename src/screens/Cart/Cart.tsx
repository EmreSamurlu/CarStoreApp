import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppSelector} from '../../redux/store';
import {IStoreResponse} from '../../types/response-types';
import {CartCard, SafeAreaWrapper, Text} from '../../components';
import {Divider} from 'react-native-paper';
import {styles} from './Cart.styles';

type CartItem = {
  id: string;
  quantity: number;
  product: IStoreResponse;
};

const divider = () => <Divider />;

const Cart = () => {
  const {cart} = useAppSelector(state => state.cart);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (cart) {
      setCartItems(cart);
    }
  }, [cart]);

  if (!cart.length) {
    return (
      <View>
        <Text>label.noItem</Text>
      </View>
    );
  }

  const renderCartItem = ({item}: {item: CartItem}) => {
    return (
      <CartCard
        key={item.id}
        itemId={item.id}
        itemName={item.product.name}
        quantity={item.quantity}
        itemPrice={item.product.price}
      />
    );
  };

  return (
    <SafeAreaWrapper>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        ItemSeparatorComponent={divider}
        contentContainerStyle={styles.container}
      />
    </SafeAreaWrapper>
  );
};

export default Cart;
