import axios from '../axios/axios-instance';
import {IStoreResponse} from '../types/response-types';

const serviceName = '/products';
const storeApi = {
  getStoreProducts: async () => {
    return axios.public.get<IStoreResponse[]>(serviceName);
  },
};
export default storeApi;
