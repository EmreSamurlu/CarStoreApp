import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {getCarsThunk} from '../../redux/features/carstore/thunk/getCarsThunks';
import {
  FilterContainer,
  Loading,
  ProductCard,
  SafeAreaWrapper,
  SearchBox,
} from '../../components';
import {IStoreResponse} from '../../types/response-types';
import {useNavigation} from '@react-navigation/native';
import {Pages} from '../../constants/pages.enum';

import {useCart} from '../../hooks/useCart';
import {AsyncStatus} from '../../constants/async-status.enum';
import {setSelectedProduct} from '../../redux/features/product/slicer';
import {styles} from './ProductList.styles';
import {useSearch} from '../../hooks/useSearch';
import {setFilteredStore} from '../../redux/features/carstore/slicer';
import {sortFunctions} from '../../hooks/sort-functions';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();
  const {carStore, status, filteredStore} = useAppSelector(
    state => state.carStore,
  );
  const {selectedBrands, selectedModels, selectedSort} = useAppSelector(
    state => state.filters,
  );
  const {addItem} = useCart();
  const {search} = useSearch();

  const [searchString, setSearchString] = useState('');
  const [filterStore, setFilterStore] = useState<
    IStoreResponse[] | undefined
  >();
  const [sorted, setSorted] = useState<IStoreResponse[]>();

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
        productBrand={item.brand}
        productModel={item.model}
      />
    );
  };

  useEffect(() => {
    if (!searchString.length) {
      dispatch(setFilteredStore([]));
    }
  }, [dispatch, searchString]);

  useEffect(() => {
    if (selectedBrands.length || selectedModels.length) {
      const newArr = carStore?.filter(
        car =>
          selectedBrands.includes(car.brand) ||
          selectedModels.includes(car.model),
      );

      setFilterStore(newArr);
    }
  }, [carStore, selectedBrands, selectedModels]);

  const handleSearch = () => {
    if (searchString && carStore) {
      const result = search(carStore, searchString);
      dispatch(setFilteredStore(result));
    }
  };

  useEffect(() => {
    if (carStore) {
      if (selectedSort && typeof sortFunctions[selectedSort] === 'function') {
        const sortedStore: IStoreResponse[] = sortFunctions[selectedSort]?.(
          JSON.parse(JSON.stringify(carStore)),
        ) as unknown as IStoreResponse[];
        setSorted(sortedStore);
      }
    }
  }, [selectedSort, carStore]);

  return (
    <SafeAreaWrapper>
      {status === AsyncStatus.Loading ? (
        <Loading />
      ) : (
        <>
          <SearchBox
            handleSearch={handleSearch}
            searchString={searchString}
            setSearchString={setSearchString}
          />
          <FilterContainer />
          <View style={styles.list_container}>
            <FlatList
              contentContainerStyle={styles.list_container}
              data={
                (selectedSort && sorted) ||
                (filterStore?.length && filterStore) ||
                (filteredStore?.length && filteredStore) ||
                carStore
              }
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
