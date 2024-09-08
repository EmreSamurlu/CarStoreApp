import {TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/src/types';
import {Pages} from '../../constants/pages.enum';
import {Badge, Icon, useTheme} from 'react-native-paper';
import {useNavigate} from '../../hooks/useNavigate';
import {EventArg} from '@react-navigation/native';
import {styles} from './BottomTabComponent.styles';
import Text from '../Text';
import {useAppSelector} from '../../redux/store';

const iconNameSelector = {
  [Pages.ProductStack]: 'home',
  [Pages.Favorites]: 'star',
  [Pages.Cart]: 'cart',
  [Pages.Profile]: 'account',
};

const BottomTabComponent: FC<BottomTabBarProps> = ({
  state: navigationState,
  navigation,
}) => {
  const {redirect} = useNavigate();
  const {colors} = useTheme();
  const {cart} = useAppSelector(state => state.cart);
  let itemCount = 0;

  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    itemCount += element.quantity;
  }

  return (
    <>
      <View style={styles.tabContainer}>
        {navigationState.routes.map((route, index) => {
          const label = route.name;
          const iconName =
            iconNameSelector[label as keyof typeof iconNameSelector];

          const isFocused = navigationState.index === index;

          const onPress = () => {
            const event: EventArg<'tabPress', true, undefined> =
              navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

            if (!isFocused && !event.defaultPrevented) {
              redirect(route.name);
            }
          };

          return (
            <React.Fragment key={route.key}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                style={styles.buttonContainer}>
                {route.name === Pages.Cart && (
                  <Badge style={styles.badge} size={18}>
                    {itemCount}
                  </Badge>
                )}
                <Icon
                  source={iconName}
                  size={24}
                  color={isFocused ? colors.primary : colors.secondary}
                />
                <Text
                  style={{
                    color: isFocused ? colors.primary : colors.secondary,
                  }}>{`label.${route.name}`}</Text>
              </TouchableOpacity>
            </React.Fragment>
          );
        })}
      </View>
    </>
  );
};

export default BottomTabComponent;
