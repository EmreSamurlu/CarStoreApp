import {AsyncStatus} from '../constants/async-status.enum';
import {IStoreResponse} from './response-types';

export interface ICarStoreState {
  carStore: IStoreResponse[] | undefined;
  status: AsyncStatus;
  error: object | null;
}
