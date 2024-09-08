import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {getCarsThunk} from '../../redux/features/carstore/thunk/getCarsThunks';
import {Loading, ProductCard, SafeAreaWrapper} from '../../components';
import {IStoreResponse} from '../../types/response-types';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Pages} from '../../constants/pages.enum';
import {ProductScreenNavigationProp} from '../../types/navigation-types';
import {useCart} from '../../utils/useCart';
import {AsyncStatus} from '../../constants/async-status.enum';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ProductScreenNavigationProp>();
  const {carStore, status} = useAppSelector(state => state.carStore);
  const {addItem} = useCart();

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  const renderProductItem = ({item}: {item: IStoreResponse}) => {
    const handleProductPress = (product: IStoreResponse) => {
      navigate(Pages.ProductDetail, {product: product});
    };

    return (
      <ProductCard
        onProductPress={() => handleProductPress(item)}
        onAddToCartPress={() => addItem(item)}
        productPrice={item.price}
        productImage={item.image}
        productName={item.name}
      />
    );
  };

  console.log(status);

  return (
    <SafeAreaWrapper>
      {status === AsyncStatus.Loading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </SafeAreaWrapper>
  );
};

export default ProductList;
