import {createAsyncThunk} from '@reduxjs/toolkit';
import storeApi from '../../../../api/store-api';
import {IStoreResponse} from '../../../../types/response-types';
import {setBrandsFilter, setModelsFilter} from '../../filters/slicer';
import {IFilterState} from '../../../../types/redux-types';

export const getCarsThunk = createAsyncThunk(
  'cars/getCars',
  async (_, {dispatch}): Promise<IStoreResponse[] | undefined> => {
    const response = await storeApi.getStoreProducts();
    const brands: IFilterState['brandFilter'] = [];
    const models: IFilterState['modelFilter'] = [];
    if (response && response.data) {
      for (let i = 0; i < response.data.length; i++) {
        const element = response.data[i];

        const brandIndex = brands.findIndex(
          brand => brand.label === element.brand,
        );
        const modalIndex = models.findIndex(
          model => model.label === element.model,
        );

        if (brandIndex === -1) {
          brands.push({
            key: element.brand,
            label: element.brand,
            checked: false,
          });
        }

        if (modalIndex === -1) {
          models.push({
            key: element.model,
            label: element.model,
            checked: false,
          });
        }
      }

      dispatch(setBrandsFilter(brands));
      dispatch(setModelsFilter(models));
      return response.data;
    }
  },
);
