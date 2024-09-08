import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    marginVertical: '1%',
    marginHorizontal: '2%',
    justifyContent: 'space-between',
  },
  icon: {
    position: 'absolute',
    top: '2%',
    right: '2%',
  },
  card_content: {
    marginVertical: '1%',
    minHeight: 72,
  },
  card_action: {
    flex: 1,
    alignSelf: 'center',
    marginBottom: '5%',
  },
});
