import React from 'react';
import {sortOptions} from './sort-options';
import {RadioButton} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {setSelectedSort} from '../../redux/features/filters/slicer';
import {styles} from './SortBox.styles';

const SortBox = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const {selectedSort} = useAppSelector(state => state.filters);

  return (
    <RadioButton.Group
      onValueChange={value => {
        value === selectedSort
          ? dispatch(setSelectedSort(''))
          : dispatch(setSelectedSort(value));
      }}
      value={selectedSort}>
      {sortOptions.map(option => {
        return (
          <RadioButton.Item
            key={option.value}
            labelStyle={styles.label}
            position="leading"
            mode="android"
            label={t(`label.${option.value}`)}
            value={option.fn}
          />
        );
      })}
    </RadioButton.Group>
  );
};

export default SortBox;
