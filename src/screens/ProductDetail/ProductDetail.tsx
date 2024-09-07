import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {useRoute} from '@react-navigation/native';
import {Button, Card} from 'react-native-paper';
import {SafeAreaWrapper} from '../../components';
import {ProductDetailRouteProp} from '../../types/navigation-types';

interface IProductDetail {
  onAddToCartPress: () => void;
}

const ProductDetail: FC<IProductDetail> = ({onAddToCartPress}) => {
  const {product} = useRoute<ProductDetailRouteProp>().params;
  return (
    <SafeAreaWrapper>
      <Card>
        <Card.Cover source={{uri: product.image}} />
        <Card.Title title={product.name} />
        <Card.Content>
          <Text>{product.description}</Text>
        </Card.Content>
      </Card>
      <View>
        <Text>Price: {product.price} TL</Text>
        <Button onPress={onAddToCartPress} mode="contained">
          Add to Cart
        </Button>
      </View>
    </SafeAreaWrapper>
  );
};

export default ProductDetail;
