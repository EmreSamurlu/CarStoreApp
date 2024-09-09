import {IStoreResponse} from '../types/response-types';

export const sortFunctions: {[key: string]: (array: IStoreResponse[]) => void} =
  {
    sortOldToNew: (arr: IStoreResponse[]) => {
      const sorted = arr.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
      return sorted;
    },
    sortNewToOld: (arr: IStoreResponse[]) => {
      const sorted = arr.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      return sorted;
    },
    sortPriceAscending: (arr: IStoreResponse[]) => {
      const sorted = arr.sort((a, b) => Number(a.price) - Number(b.price));
      return sorted;
    },
    sortPriceDescending: (arr: IStoreResponse[]) => {
      const sorted = arr.sort((a, b) => Number(b.price) - Number(a.price));
      return sorted;
    },
  };
