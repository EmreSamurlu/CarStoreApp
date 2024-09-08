import React, {ComponentProps, FC, ReactNode} from 'react';
import {useTranslation} from 'react-i18next';
import {Text as NativeText} from 'react-native-paper';

type ITextProps = ComponentProps<typeof NativeText> & {
  children: string | ReactNode;
};

const Text: FC<ITextProps> = ({children, ...props}) => {
  const {t} = useTranslation();
  return (
    <NativeText {...props}>
      {typeof children === 'string' ? t(children) : children}
    </NativeText>
  );
};

export default Text;
