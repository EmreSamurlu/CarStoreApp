import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: '10%',
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom:0,
    padding: 0,
    margin: 0,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: 20,
  },
});
