export const useSearch = () => {
  const search = (array: {brand: string}[], searchQuery: string) => {
    const searchResult = array?.filter(item =>
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return searchResult;
  };
  return {search};
};
