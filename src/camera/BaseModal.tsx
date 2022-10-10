import { useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Modal,
  SafeAreaView,
} from "react-native";
import { styles } from "./styles/ActionModalStyles";
import { TypeAnimation } from "./Types";

interface Props {
  modalVisible: boolean;
  titleBtnShow?: string;
  titleBtnClose?: string;
  hasBtnClose?: boolean;
  animationType?: TypeAnimation;
  children?: JSX.Element;
  handleCloseModal?: () => void;
}

const _modalVisible = false;
const _titleBtnClose = "X";
const _hasBtnClose = true;
const _animationType = TypeAnimation.Slide;

const BaseModal = ({
  modalVisible = _modalVisible,
  titleBtnClose = _titleBtnClose,
  hasBtnClose = _hasBtnClose,
  animationType = _animationType,
  children,
  handleCloseModal,
}: Props): JSX.Element => {
  useEffect(() => {
    console.log("[BaseModal] useEffect");
    console.log("[BaseCamera] modalVisible", modalVisible);
  }, [modalVisible]);

  return (
    <Modal animationType={animationType} visible={modalVisible}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.safeAreaView}>
          {hasBtnClose && (
            <TouchableOpacity
              onPress={handleCloseModal}
              style={styles.btnCloseModal}
            >
              <Text style={styles.txtTitleBtnClose}>{titleBtnClose}</Text>
            </TouchableOpacity>
          )}
          <View style={{ flex: 1 }}>{children}</View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default BaseModal;
