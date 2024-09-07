import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAppDispatch} from '../../redux/store';
import {getCarsThunk} from '../../redux/features/carstore/thunk/getCarsThunks';

const ProductList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);
  return (
    <View>
      <Text>ProductList</Text>
    </View>
  );
};

export default ProductList;
