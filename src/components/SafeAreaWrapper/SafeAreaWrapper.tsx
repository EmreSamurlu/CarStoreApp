import React, {FC, ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ISafeAreaWrapper {
  children: ReactNode;
}

const SafeAreaWrapper: FC<ISafeAreaWrapper> = ({children}) => {
  return <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>;
};

export default SafeAreaWrapper;
