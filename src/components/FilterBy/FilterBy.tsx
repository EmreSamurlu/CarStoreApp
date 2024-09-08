import {ScrollView, View} from 'react-native';
import React, {FC} from 'react';
import {Checkbox, Text} from 'react-native-paper';

export type Filter = {label: string; checked: boolean; key: string};

interface IFilterBy {
  data: Filter[];
  filterName: string;
  handlePress: (item: Filter) => void;
}

const FilterBy: FC<IFilterBy> = ({data, filterName, handlePress}) => {
  return (
    <ScrollView style={{height: '25%'}}>
      <Text>{filterName}</Text>
      {data.map(datum => (
        <View
          key={datum.key}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox.Android
            status={datum.checked ? 'checked' : 'unchecked'}
            onPress={() => handlePress(datum)}
          />
          <Text>{datum.label}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default FilterBy;
