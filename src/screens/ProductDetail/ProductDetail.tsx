import {ScrollView, View} from 'react-native';
import React from 'react';
import {Button, Card, Icon} from 'react-native-paper';
import {SafeAreaWrapper, Text} from '../../components';
import {useCart} from '../../hooks/useCart';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '../../redux/store';
import {styles} from './ProductDetail.styles';

const ProductDetail = () => {
  const {t} = useTranslation();
  const {product} = useAppSelector(state => state.product);
  const {favorites} = useAppSelector(state => state.favorites);
  const {addItem} = useCart();
  return (
    <SafeAreaWrapper>
      {product ? (
        <ScrollView style={styles.container}>
          <Card>
            <Card.Cover source={{uri: product.image}} />
            <View style={styles.icon_container}>
              <Icon
                source={'star'}
                color={
                  favorites.find(favorite => favorite.id === product.id)
                    ? 'red'
                    : 'black'
                }
                size={24}
              />
            </View>

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
