import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '90%',
    padding: '3%',
    borderWidth: 1,
    borderColor: 'red',
  },
  no_item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner_container: {
    borderWidth: 1,
    height: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
