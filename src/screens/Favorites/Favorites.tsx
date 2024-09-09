import {FlatList, ScrollView} from 'react-native';
import React from 'react';
import {ProductCard, SafeAreaWrapper} from '../../components';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {IStoreResponse} from '../../types/response-types';
import {setSelectedProduct} from '../../redux/features/product/slicer';
import {useNavigation} from '@react-navigation/native';
import {Pages} from '../../constants/pages.enum';
import {useCart} from '../../hooks/useCart';
import {styles} from './Favorites.styles';

const Favorites = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();
  const {favorites} = useAppSelector(state => state.favorites);
  const {addItem} = useCart();

  const renderProductItem = ({item}: {item: IStoreResponse}) => {
    const handleProductPress = (product: IStoreResponse) => {
      dispatch(setSelectedProduct(product));
      navigate(Pages.ProductDetail as never);
    };

    return (
      <ProductCard
        product={item}
        onProductPress={() => handleProductPress(item)}
        onAddToCartPress={() => addItem(item)}
        productPrice={item.price}
        productImage={item.image}
        productBrand={item.brand}
        productModel={item.model}
      />
    );
  };
  return (
    <SafeAreaWrapper>
      <ScrollView>
        <FlatList
          contentContainerStyle={styles.list_container}
          data={favorites}
          renderItem={renderProductItem}
          numColumns={2}
          initialNumToRender={12}
        />
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default Favorites;
