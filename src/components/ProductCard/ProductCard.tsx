import React, {FC} from 'react';
import {Button, Card, IconButton} from 'react-native-paper';
import {styles} from './ProductCard.styles';
import {View} from 'react-native';
import Text from '../Text';
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '../../redux/store';
import {IStoreResponse} from '../../types/response-types';
import {useFavorites} from '../../hooks/useFavorites';

interface IProductCard {
  product: IStoreResponse;
  productPrice: string;
  productBrand: string;
  productModel: string;
  productImage: string;
  onProductPress: () => void;
  onAddToCartPress: () => void;
}

const ProductCard: FC<IProductCard> = ({
  product,
  productImage,
  productBrand,
  productModel,
  productPrice,
  onProductPress,
  onAddToCartPress,
}) => {
  const {t} = useTranslation();
  const {favorites} = useAppSelector(state => state.favorites);
  const {addItemToFavorites, removeItemFromFavorites} = useFavorites();

  const handleToggleFavorite = () => {
    if (favorites.find(favorite => favorite.id === product.id)) {
      removeItemFromFavorites(product.id);
    } else {
      addItemToFavorites(product);
    }
  };

  return (
    <Card
      mode="outlined"
      style={styles.card_container}
      onPress={onProductPress}>
      <Card.Cover resizeMode="cover" source={{uri: productImage}} />

      <IconButton
        mode="contained"
        style={styles.icon}
        icon={'star'}
        onPress={handleToggleFavorite}
        iconColor={
          favorites.find(favorite => favorite.id === product.id)
            ? 'red'
            : 'black'
        }
      />

      <Card.Content style={styles.card_content}>
        <Text variant="titleLarge">{productPrice + ' ' + 'TL'}</Text>
        <Text variant="bodyMedium" numberOfLines={2} ellipsizeMode="tail">
          {productBrand} {productModel}
        </Text>
      </Card.Content>

      <View style={styles.card_action}>
        <Button onPress={onAddToCartPress} mode="contained">
          {t('label.addToCart')}
        </Button>
      </View>
    </Card>
  );
};

export default ProductCard;
