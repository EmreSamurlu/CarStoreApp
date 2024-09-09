import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {IStoreResponse} from '../../types/response-types';
import {CartCard, SafeAreaWrapper, Text} from '../../components';
import {Button, Divider} from 'react-native-paper';
import {styles} from './Cart.styles';
import {useTranslation} from 'react-i18next';
import {removeFromCart} from '../../redux/features/cart/slicer';

type CartItem = {
  id: string;
  quantity: number;
  product: IStoreResponse;
};

const divider = () => <Divider />;

const Cart = () => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const {cart} = useAppSelector(state => state.cart);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (cart) {
      setCartItems(cart);
    }
  }, [cart]);

  if (!cart.length) {
    return (
      <View style={styles.no_item}>
        <Text>label.noItem</Text>
      </View>
    );
  }

  const totalPrice = cart.reduce((total, item) => {
    return total + Number(item.product.price) * item.quantity;
  }, 0);

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
    <View style={styles.container}>
      <SafeAreaWrapper>
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          ItemSeparatorComponent={divider}
          contentContainerStyle={styles.inner_container}
        />
      </SafeAreaWrapper>
      <View style={styles.footer}>
        <View>
          <Text>{`${t('label.totalPrice')}`}</Text>
          <Text>{totalPrice.toFixed(2)} TL</Text>
        </View>
        <Button
          mode="contained-tonal"
          onPress={() => dispatch(removeFromCart())}>
          {t('label.completeOrder')}
        </Button>
      </View>
    </View>
  );
};

export default Cart;
