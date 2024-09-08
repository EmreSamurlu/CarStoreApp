import {useNavigation} from '@react-navigation/native';

export const useNavigate = () => {
  const {navigate, goBack} = useNavigation();

  const redirect = (routeName: string) => {
    navigate(routeName as never);
  };

  const useGoBack = () => {
    goBack();
  };

  return {redirect, useGoBack};
};
