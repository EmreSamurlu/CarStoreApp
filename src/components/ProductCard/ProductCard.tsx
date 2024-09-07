import React, {FC} from 'react';
import {Button, Card, Text} from 'react-native-paper';
import {styles} from './ProductCard.styles';
import {View} from 'react-native';

interface IProductCard {
  productPrice: string;
  productName: string;
  productImage: string;
  onProductPress: () => void;
  onAddToCartPress: () => void;
}

const ProductCard: FC<IProductCard> = ({
  productImage,
  productName,
  productPrice,
  onProductPress,
  onAddToCartPress,
}) => {
  return (
    <Card
      mode="outlined"
      style={styles.card_container}
      onPress={onProductPress}>
      <Card.Cover source={{uri: productImage}} />
      <Card.Content style={styles.card_content}>
        <Text variant="titleLarge">{productPrice} TL</Text>
        <Text variant="bodyMedium" numberOfLines={2} ellipsizeMode="tail">
          {productName}
        </Text>
      </Card.Content>

      <View style={styles.card_action}>
        <Button onPress={onAddToCartPress} mode="contained">
          Add to Cart
        </Button>
      </View>
    </Card>
  );
};

export default ProductCard;
