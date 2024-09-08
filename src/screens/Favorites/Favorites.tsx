import {ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaWrapper, Text} from '../../components';
import {useAppSelector} from '../../redux/store';

const Favorites = () => {
  const {favorites} = useAppSelector(state => state.favorites);

  return (
    <SafeAreaWrapper>
      <ScrollView>
        {favorites.map(favorite => (
          <Text key={favorite.id}>{favorite.name}</Text>
        ))}
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default Favorites;
