import { CameraCapturedPicture } from "expo-camera";
import { useState } from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import BaseCamera from "./BaseCamera";
import BaseModal from "./BaseModal";
import { styles } from "./styles/ActionModalStyles";
import { TypeAnimation } from "./Types";

interface Props {
  titleBtnShow?: string;
}

const _titleBtnShow = "Open CAMERA";

const ModalCameraModule = ({
  titleBtnShow = _titleBtnShow,
}: Props): JSX.Element => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalVisible_Image, setModalVisible_Image] = useState<boolean>(false);
  const [uriPhoto, setUriPhoto] = useState<string>();

  const __handleShowModal = (): void => {
    console.log("[ModalCameraModule] __handleShowModal");
    setModalVisible(true);
  };

  const __handleCloseModal = (): void => {
    console.log("[ModalCameraModule] __handleCloseModal");
    setModalVisible(false);
  };

  const __handleShowModal_Image = (): void => {
    console.log("[ModalCameraModule] __handleShowModal_Image");
    setModalVisible_Image(true);
  };

  const __handleCloseModal_Image = (): void => {
    console.log("[ModalCameraModule] __handleCloseModal_Image");
    setModalVisible_Image(false);
  };

  const __handleSavePicture = (photo: CameraCapturedPicture): void => {
    console.log("[ModalCameraModule] __handleSavePicture");
    console.log(photo);
    setUriPhoto(photo.uri);
    if (photo.uri) {
      __handleShowModal_Image();
    }
  };

  return (
    <>
      <BaseModal
        modalVisible={modalVisible}
        hasBtnClose={true}
        animationType={TypeAnimation.Fade}
        handleCloseModal={__handleCloseModal}
      >
        <BaseCamera
          handleCloseModal={__handleCloseModal}
          handleSavePicture={__handleSavePicture}
        />
      </BaseModal>
      <View>
        <BaseModal
          modalVisible={modalVisible_Image}
          hasBtnClose={true}
          animationType={TypeAnimation.Fade}
          handleCloseModal={__handleCloseModal_Image}
        >
          <Image
            source={{ uri: uriPhoto }}
            style={{ width: "100%", height: "60%" }}
          />
        </BaseModal>
      </View>
      <TouchableOpacity style={styles.btnShowModal} onPress={__handleShowModal}>
        <Text style={styles.txtTitleBtnShow}>{titleBtnShow}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ModalCameraModule;
