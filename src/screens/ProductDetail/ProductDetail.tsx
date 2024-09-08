import {ScrollView, View} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-paper';
import {SafeAreaWrapper, Text} from '../../components';
import {useCart} from '../../utils/useCart';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '../../redux/store';
import {styles} from './ProductDetail.styles';

const ProductDetail = () => {
  const {t} = useTranslation();
  const {product} = useAppSelector(state => state.product);
  const {addItem} = useCart();
  return (
    <SafeAreaWrapper>
      {product ? (
        <ScrollView style={styles.container}>
          <Card>
            <Card.Cover source={{uri: product.image}} />
            <Card.Title title={product.name} />
            <Card.Content>
              <Text>{product.description}</Text>
            </Card.Content>
          </Card>
          <View style={styles.bottom_container}>
            <Text>
              <Text>label.price</Text>
              <Text> {product.price} </Text>
              <Text>label.tl</Text>
            </Text>
            <Button onPress={() => addItem(product)} mode="contained">
              {t('label.addToCart')}
            </Button>
          </View>
        </ScrollView>
      ) : (
        <Text>label.noItem</Text>
      )}
    </SafeAreaWrapper>
  );
};

export default ProductDetail;
