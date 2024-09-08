import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {style} from './Loading.styles';
const Loading = () => {
  return (
    <View style={style.container}>
      <ActivityIndicator animating={true} size={'large'} />
    </View>
  );
};

export default Loading;
