import {IFilterState} from '../../../types/redux-types';

export const initialState: IFilterState = {
  brandFilter: [],
  modelFilter: [],
  selectedBrands: [],
  selectedModels: [],
  selectedSort: '',
};
