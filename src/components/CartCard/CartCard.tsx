import {View} from 'react-native';
import React, {FC} from 'react';
import {IconButton, useTheme} from 'react-native-paper';
import Text from '../Text';
import {styles} from './CartCard.styles';
import {useAppDispatch} from '../../redux/store';
import {
  decreaseQuantity,
  increaseQuantity,
} from '../../redux/features/cart/slicer';

interface ICartCard {
  itemId: string;
  itemName: string;
  quantity: number;
  itemPrice: string;
}

const CartCard: FC<ICartCard> = ({itemId, itemName, quantity, itemPrice}) => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <Text>{itemName}</Text>
        <Text>{(Number(itemPrice) * quantity).toFixed(2)}</Text>
      </View>

      <View style={styles.quantity_container}>
        <IconButton
          mode="contained"
          icon={'minus'}
          size={24}
          onPress={() => dispatch(decreaseQuantity(itemId))}
        />
        <View
          style={[
            styles.quantity_text_container,
            {backgroundColor: colors.primaryContainer},
          ]}>
          <Text
            variant="titleLarge"
            style={[styles.quantity_text, {color: colors.primary}]}>
            {quantity.toString()}
          </Text>
        </View>

        <IconButton
          mode="contained"
          icon={'plus'}
          size={24}
          onPress={() => dispatch(increaseQuantity(itemId))}
        />
      </View>
    </View>
  );
};

export default CartCard;
