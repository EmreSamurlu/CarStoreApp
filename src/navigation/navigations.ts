import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParams, RootTabParams} from '../types/navigation-types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const BottomTab = createBottomTabNavigator<RootTabParams>();
export const Stack = createNativeStackNavigator<RootStackParams>();
