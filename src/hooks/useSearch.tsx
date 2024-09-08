export const useSearch = () => {
  const search = (array: {name: string}[], searchQuery: string) => {
    const searchResult = array?.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return searchResult;
  };
  return {search};
};
