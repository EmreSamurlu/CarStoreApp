import {View} from 'react-native';
import React, {FC} from 'react';
import {Searchbar} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

interface ISearchBox {
  handleSearch: () => void;
  searchString: string;
  setSearchString: ((text: string) => void) & ((query: string) => void);
}

const SearchBox: FC<ISearchBox> = ({
  handleSearch,
  searchString,
  setSearchString,
}) => {
  const {t} = useTranslation();

  return (
    <View>
      <Searchbar
        onIconPress={handleSearch}
        onChangeText={setSearchString}
        placeholder={t('label.search')}
        value={searchString}
      />
    </View>
  );
};

export default SearchBox;
