import Axios, {AxiosInstance} from 'axios';
import {storeEndpoint} from '../constants/endpoints';

const axios: {
  private: AxiosInstance | null;
  public: AxiosInstance | null;
} = {
  public: Axios.create({
    baseURL: storeEndpoint,
    timeout: 10000,
    headers: {},
  }),
  //This can be used for requests with token
  private: Axios.create({
    baseURL: storeEndpoint,
    timeout: 10000,
    headers: {},
  }),
};

export default axios as unknown as {
  private: AxiosInstance;
  public: AxiosInstance;
};
