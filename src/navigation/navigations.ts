import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParams} from '../types/navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const BottomTab = createBottomTabNavigator<RootStackParams>();
export const Stack = createNativeStackNavigator<RootStackParams>();
