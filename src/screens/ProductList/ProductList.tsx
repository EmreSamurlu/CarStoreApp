import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {getCarsThunk} from '../../redux/features/carstore/thunk/getCarsThunks';
import {ProductCard, SafeAreaWrapper} from '../../components';
import {IStoreResponse} from '../../types/response-types';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Pages} from '../../constants/pages.enum';
import {ProductScreenNavigationProp} from '../../types/navigation-types';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ProductScreenNavigationProp>();
  const {carStore} = useAppSelector(state => state.carStore);
  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  const renderProductItem = ({item}: {item: IStoreResponse}) => {
    const handleProductPress = (product: IStoreResponse) => {
      navigate(Pages.ProductDetail, {product: product});
    };

    const handleAddToCart = (product: IStoreResponse) => {
      console.log('Item Added', product);
    };
    return (
      <ProductCard
        onProductPress={() => handleProductPress(item)}
        onAddToCartPress={() => handleAddToCart(item)}
        productPrice={item.price}
        productImage={item.image}
        productName={item.name}
      />
    );
  };

  return (
    <SafeAreaWrapper>
      <Text>TITLE</Text>
      <View>
        <Text> Filter Area </Text>
      </View>
      <FlatList
        data={carStore}
        renderItem={renderProductItem}
        numColumns={2}
        initialNumToRender={12}
      />
    </SafeAreaWrapper>
  );
};

export default ProductList;
