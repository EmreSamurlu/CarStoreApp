import React from 'react';
import {RadioButton} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {SafeAreaWrapper} from '../../components';

const Profile = () => {
  const {t, i18n} = useTranslation();
  const langOptions = [{label: 'en'}, {label: 'tr'}];
  return (
    <SafeAreaWrapper>
      <RadioButton.Group
        onValueChange={value => i18n.changeLanguage(value)}
        value={i18n.language}>
        {langOptions.map(lang => (
          <RadioButton.Item
            key={lang.label}
            position="leading"
            mode="android"
            label={t(`label.${lang.label}`)}
            value={lang.label}
          />
        ))}
      </RadioButton.Group>
    </SafeAreaWrapper>
  );
};

export default Profile;
