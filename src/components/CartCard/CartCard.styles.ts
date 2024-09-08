import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info_container: {
    flex: 1,
    justifyContent: 'center',
  },
  quantity_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  quantity_text_container: {
    borderRadius: 25,
    width: 42,
    height: 42,
    justifyContent: 'center',
  },
  quantity_text: {
    textAlign: 'center',
  },
});
