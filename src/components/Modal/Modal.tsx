import React, {FC, ReactNode} from 'react';
import {Modal as NativeModal, Portal} from 'react-native-paper';
import {styles} from './Modal.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IModal {
  isVisible: boolean;
  hideModal: () => void;
  modalChildren: ReactNode;
}

const Modal: FC<IModal> = ({isVisible, hideModal, modalChildren}) => {
  const insets = useSafeAreaInsets();
  return (
    <Portal>
      <NativeModal
        overlayAccessibilityLabel="hello"
        visible={isVisible}
        onDismiss={hideModal}
        contentContainerStyle={[styles.container, {bottom: -insets.bottom}]}>
        {modalChildren}
      </NativeModal>
    </Portal>
  );
};

export default Modal;
