import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Device from "expo-device";
import { Camera, PermissionStatus, CameraCapturedPicture } from "expo-camera";
import { CameraModalProps, TypeAnimation } from "./Types";
import { styles } from "./styles/CameraModalStyles";

let camera: Camera | null;

const CameraModal = ({
  modalVisible,
  animationType = TypeAnimation.None,
  handleCloseModal,
  handleSavePicture,
}: CameraModalProps): JSX.Element => {
  const [startCamera, setStartCamera] = useState<boolean>(false);
  const [capturedImage, setCapturedImage] = useState<CameraCapturedPicture>();
  const [btnDisable, setBtnDisable] = useState<boolean>(false);

  useEffect(() => {
    console.log("[CameraModal] useEffect");
    console.log("[CameraModal] modalVisible", modalVisible);
    console.log("[CameraModal] capturedImage", capturedImage);
    console.log("[CameraModal] camera", camera);

    if (modalVisible) {
      __startCamera();
    }
  }, [modalVisible]);

  const __startCamera = async (): Promise<void> => {
    console.log("[CameraModal] __startCamera");
    const { status }: { status: PermissionStatus } =
      await Camera.requestCameraPermissionsAsync();
    if (status === PermissionStatus.GRANTED) {
      setStartCamera(true);
      console.log("[CameraModal] Access granted YES ");
    } else {
      Alert.alert("[CameraModal] Access denied");
    }
  };

  const __takePicture = async (): Promise<void> => {
    console.log("[CameraModal] __takePicture");
    if (!camera) {
      console.log("[CameraModal] Camera not found");
      return;
    }
    setBtnDisable(true);
    const photo: CameraCapturedPicture = await camera.takePictureAsync({
      base64: true,
      quality: 1,
      exif: false,
      skipProcessing: true,
      onPictureSaved: __onPictureSavedData,
    });
    setBtnDisable(false);
    setCapturedImage(photo);
  };

  const __onPictureSavedData = (photo: CameraCapturedPicture): void => {
    if (Device.isDevice && camera) {
      camera.pausePreview();
    }
    if (handleSavePicture) {
      console.log("[CameraModal] handleSavePicture");
      handleSavePicture(photo);
      handleCloseModal();
    }
  };

  return (
    <Modal animationType={animationType} visible={modalVisible}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.safeView}>
          {startCamera ? (
            <View
              style={[
                styles.containerCamera,
                { opacity: btnDisable ? 0.6 : 1 },
              ]}
            >
              <Camera
                style={styles.sectionCameraPreview}
                ref={(r) => {
                  camera = r;
                }}
              ></Camera>
              <View style={styles.sectionCameraButton}>
                <View style={styles.blockButtonLeft}></View>
                <View style={styles.blockButtonCenter}>
                  <TouchableOpacity
                    style={styles.btnTakePicture}
                    disabled={btnDisable}
                    onPress={__takePicture}
                  ></TouchableOpacity>
                </View>
                <View style={styles.blockButtonRight}>
                  <TouchableOpacity
                    style={styles.btnCloseModal}
                    disabled={btnDisable}
                    onPress={handleCloseModal}
                  >
                    <Text>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.defaultView}></View>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CameraModal;
