import { useState } from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./styles/ActionModalStyles";
import BasePickerImage from "camera/BasePickerImage";
import * as ExpoImagePicker from "expo-image-picker";

interface Props {
  titleBtnShow?: string;
}

const _titleBtnShow = "Open Picker Image";

const ModalPickerImageModule = ({
  titleBtnShow = _titleBtnShow,
}: Props): JSX.Element => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [imageUri, setImageUri] = useState<string>();

  const __handleShowPicker = (): void => {
    console.log("[ModalPickerImageModule] __handleShowPicker");
    setModalVisible(true);
  };

  const __handleClosePicker = (): void => {
    console.log("[ModalPickerImageModule] __handleClosePicker");
    setModalVisible(false);
  };

  const __callbackGetImage = (image: ExpoImagePicker.ImageInfo): void => {
    console.log("[ModalPickerImageModule] __callbackGetImage");
    // console.log(image);
    setImageUri(image.uri);
    __handleClosePicker();
  };

  return (
    <>
      {modalVisible && (
        <BasePickerImage
          callbackGetImage={__callbackGetImage}
          handleClosePicker={__handleClosePicker}
        />
      )}
      <TouchableOpacity
        style={styles.btnShowModal}
        onPress={__handleShowPicker}
      >
        <Text style={styles.txtTitleBtnShow}>{titleBtnShow}</Text>
      </TouchableOpacity>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}
    </>
  );
};

export default ModalPickerImageModule;
