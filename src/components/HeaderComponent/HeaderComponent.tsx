import {View} from 'react-native';
import React, {FC} from 'react';
import {IconButton, useTheme} from 'react-native-paper';
import {useNavigate} from '../../hooks/useNavigate';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {styles} from './HeaderComponent.styles';
import SafeAreaWrapper from '../SafeAreaWrapper';
import Text from '../Text';

const HeaderComponent: FC<NativeStackHeaderProps> = ({route}) => {
  const {colors} = useTheme();
  const {useGoBack} = useNavigate();
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <IconButton
          mode="contained"
          icon={'menu-left'}
          iconColor={colors.primary}
          size={24}
          onPress={useGoBack}
        />
        <Text variant="titleLarge" style={styles.route_name}>
          {`label.${route.name}`}
        </Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default HeaderComponent;
