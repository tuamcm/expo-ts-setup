import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CameraScreenNavigationProp } from "navigation/configs/types";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles/ActionModalStyles";
import { TypeAnimation } from "./Types";
import CameraModal from "./CameraModal";

const ActionModal = (): JSX.Element => {
  const navigation = useNavigation<CameraScreenNavigationProp>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const __handleShowModal = (): void => {
    console.log("[ActionModal] __handleShowModal");
    setModalVisible(true);
  };

  const __handleCloseModal = (): void => {
    console.log("[ActionModal] __handleCloseModal");
    setModalVisible(false);
  };

  const __handleSavePicture = (photo: any): void => {
    console.log("[ActionModal] __handleSavePicture");
    navigation.navigate({
      name: "Article",
      params: { photo },
      merge: true,
    });
  };

  return (
    <View>
      <CameraModal
        modalVisible={modalVisible}
        animationType={TypeAnimation.Fade}
        handleCloseModal={__handleCloseModal}
        handleSavePicture={__handleSavePicture}
      />
      <TouchableOpacity style={styles.btnShowModal} onPress={__handleShowModal}>
        <Text style={styles.txtTitleBtnShow}>Show Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionModal;
