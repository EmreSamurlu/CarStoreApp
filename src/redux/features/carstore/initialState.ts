import {AsyncStatus} from '../../../constants/async-status.enum';
import {ICarStoreState} from '../../../types/redux-types';

export const initialState: ICarStoreState = {
  carStore: [],
  status: AsyncStatus.Idle,
  error: null,
};
