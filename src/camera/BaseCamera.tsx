import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import * as Device from "expo-device";
import { Camera, PermissionStatus, CameraCapturedPicture } from "expo-camera";
import { styles } from "./styles/CameraModalStyles";

let camera: Camera | null;

interface BaseCameraProps {
  handleCloseModal: () => void;
  handleSavePicture?: (photo: any) => void;
}

const BaseCamera = ({
  handleCloseModal,
  handleSavePicture,
}: BaseCameraProps): JSX.Element => {
  // const [capturedImage, setCapturedImage] = useState<CameraCapturedPicture>();
  const [startCamera, setStartCamera] = useState<boolean>(false);
  const [btnDisable, setBtnDisable] = useState<boolean>(false);

  useEffect(() => {
    console.log("[BaseCamera] useEffect");
    __startCamera();
  }, []);

  const __startCamera = async (): Promise<void> => {
    console.log("[BaseCamera] __startCamera");
    const { status }: { status: PermissionStatus } =
      await Camera.requestCameraPermissionsAsync();
    if (status === PermissionStatus.GRANTED) {
      setStartCamera(true);
      console.log("[BaseCamera] Access granted YES ");
    } else {
      Alert.alert("[BaseCamera] Access denied");
    }
  };

  const __takePicture = async (): Promise<void> => {
    console.log("[BaseCamera] __takePicture");
    if (!camera) {
      console.log("[BaseCamera] Camera not found");
      return;
    }
    setBtnDisable(true);
    const photo: CameraCapturedPicture = await camera.takePictureAsync({
      quality: 1,
      exif: false,
      skipProcessing: true,
      onPictureSaved: __onPictureSavedData,
    });
    setBtnDisable(false);
    // setCapturedImage(photo);
  };

  const __onPictureSavedData = (photo: CameraCapturedPicture): void => {
    if (Device.isDevice && camera) {
      camera.pausePreview();
    }
    if (handleSavePicture) {
      console.log("[BaseCamera] handleSavePicture");
      handleSavePicture(photo);
      handleCloseModal();
    }
  };

  return (
    <View style={styles.safeView}>
      {startCamera ? (
        <View
          style={[styles.containerCamera, { opacity: btnDisable ? 0.6 : 1 }]}
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
  );
};

export default BaseCamera;
