import React from 'react';
import {Modal, StyleSheet} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

type Props = {
  uri: string;
  visible: boolean;
  onRequestClose: () => void;
};

export const FullScreenZoomImage = ({uri, visible, onRequestClose}: Props) => {
  const images = [{url: uri}];
  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      onDismiss={onRequestClose}
      animationType="fade">
      <ImageViewer
        style={styles.image}
        imageUrls={images}
        enableSwipeDown={true} // Enables swipe down to close
        onSwipeDown={onRequestClose} // Handle swipe down
        renderIndicator={() => <></>} // Hide the index indicator
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
});
