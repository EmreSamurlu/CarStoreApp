import {View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import Text from '../Text';
import {styles} from './FilterContainer.styles';
import {Button, Divider, useTheme} from 'react-native-paper';
import Modal from '../Modal';
import SortBox from '../SortBox';
import FilterBy from '../FilterBy';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {
  setBrandsFilter,
  setModelsFilter,
  setSelectedBrands,
  setSelectedModels,
} from '../../redux/features/filters/slicer';
import {Filter} from '../FilterBy/FilterBy';

const FilterContainer: FC = () => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false);
  const {brandFilter, modelFilter, selectedBrands, selectedModels} =
    useAppSelector(state => state.filters);

  const handleSelectBrand = (item: Filter) => {
    if (selectedModels) {
      dispatch(setSelectedModels([]));
    }
    if (selectedBrands.includes(item.key)) {
      dispatch(
        setSelectedBrands(selectedBrands.filter(key => key !== item.key)),
      );
    } else {
      dispatch(setSelectedBrands([...selectedBrands, item.key]));
    }
  };

  useEffect(() => {
    const updatedBrandFilter = brandFilter.map(brand => ({
      ...brand,
      checked: selectedBrands.includes(brand.key),
    }));

    const hasChanged =
      JSON.stringify(brandFilter) !== JSON.stringify(updatedBrandFilter);

    if (hasChanged) {
      dispatch(setBrandsFilter(updatedBrandFilter));
    }
  }, [brandFilter, dispatch, selectedBrands]);

  const handleSelectModel = (item: Filter) => {
    if (selectedBrands) {
      dispatch(setSelectedBrands([]));
    }
    if (selectedModels.includes(item.key)) {
      dispatch(
        setSelectedModels(selectedModels.filter(key => key !== item.key)),
      );
    } else {
      dispatch(setSelectedModels([...selectedModels, item.key]));
    }
  };

  useEffect(() => {
    const updatedModelFilter = modelFilter.map(model => ({
      ...model,
      checked: selectedModels.includes(model.key),
    }));

    const hasChanged =
      JSON.stringify(modelFilter) !== JSON.stringify(updatedModelFilter);

    if (hasChanged) {
      dispatch(setModelsFilter(updatedModelFilter));
    }
  }, [dispatch, modelFilter, selectedModels]);

  return (
    <View style={styles.container}>
      <Text variant="bodyLarge">label.filters</Text>
      <Button mode="contained" onPress={() => setIsFiltersVisible(true)}>
        <Text style={[{color: colors.onPrimary}]}>label.selectFilter</Text>
      </Button>
      <Modal
        isVisible={isFiltersVisible}
        hideModal={() => setIsFiltersVisible(false)}
        modalChildren={
          <View>
            <Text>label.filters</Text>
            <SortBox />
            <Divider />
            <FilterBy
              data={brandFilter}
              filterName="Brands"
              handlePress={handleSelectBrand}
            />
            <Divider />
            <FilterBy
              data={modelFilter}
              filterName="Models"
              handlePress={handleSelectModel}
            />
          </View>
        }
      />
    </View>
  );
};

export default FilterContainer;
