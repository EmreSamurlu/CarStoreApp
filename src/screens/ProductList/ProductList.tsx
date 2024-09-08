import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {getCarsThunk} from '../../redux/features/carstore/thunk/getCarsThunks';
import {Loading, ProductCard, SafeAreaWrapper} from '../../components';
import {IStoreResponse} from '../../types/response-types';
import {useNavigation} from '@react-navigation/native';
import {Pages} from '../../constants/pages.enum';

import {useCart} from '../../hooks/useCart';
import {AsyncStatus} from '../../constants/async-status.enum';
import {setSelectedProduct} from '../../redux/features/product/slicer';
import {styles} from './ProductList.styles';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();
  const {carStore, status} = useAppSelector(state => state.carStore);
  const {addItem} = useCart();

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

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
        productName={item.name}
      />
    );
  };

  return (
    <SafeAreaWrapper>
      {status === AsyncStatus.Loading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.list_container}>
            <FlatList
              contentContainerStyle={styles.list_container}
              data={carStore}
              renderItem={renderProductItem}
              numColumns={2}
              initialNumToRender={12}
            />
          </View>
        </>
      )}
    </SafeAreaWrapper>
  );
};

export default ProductList;
