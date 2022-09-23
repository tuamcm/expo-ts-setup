import { useNavigation } from "@react-navigation/native";
import { Camera, PermissionStatus, CameraCapturedPicture } from "expo-camera";
import { CameraScreenNavigationProp } from "navigation/configs/types";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Alert } from "react-native";
import * as Device from "expo-device";

// my concern is how to make a function camera for expo app.
// 1. Ask permission to access the camera
// 2. Make sure the camera is starting
//  2.1 Show camera
//  2.2 Add take picture button
// 3. Take a picture
// 4. Save the picture
// 5. Show the picture
// 6. Clear the camera (?)

let camera: Camera | null;

const CameraComponent = (): JSX.Element => {
  const navigation = useNavigation<CameraScreenNavigationProp>();
  const [startCamera, setStartCamera] = useState<boolean>(false);
  const [capturedImage, setCapturedImage] = useState<CameraCapturedPicture>();
  const [btnDisable, setBtnDisable] = useState<boolean>(false);

  useEffect(() => {
    console.log("useEffect__startCamera");
    console.log(capturedImage);
    __startCamera();

    // return () => {
    //   second
    // }
  }, []);

  const __startCamera = async (): Promise<void> => {
    console.log("__startCamera");
    const { status }: { status: PermissionStatus } =
      await Camera.requestCameraPermissionsAsync();
    if (status === PermissionStatus.GRANTED) {
      setStartCamera(true);
      console.log("Access granted YES ");
    } else {
      Alert.alert("Access denied");
    }
  };

  const __takePicture = async (): Promise<void> => {
    console.log("__takePicture");
    if (!camera) {
      console.log("camera not found");
      return;
    }
    setBtnDisable(true);
    const photo: CameraCapturedPicture = await camera.takePictureAsync({
      base64: true,
      quality: 1,
      exif: false,
      skipProcessing: true,
      onPictureSaved: onPictureSavedData,
    });
    setBtnDisable(false);

    // console.log(photo);
    setCapturedImage(photo);
  };

  const onPictureSavedData = (photo: CameraCapturedPicture): void => {
    if (Device.isDevice && camera) {
      camera.pausePreview();
    }
    navigation.navigate({
      name: "Article",
      params: { photo },
      merge: true,
    });
  };

  return (
    <>
      {startCamera ? (
        <View style={[styles.cameraView, { opacity: btnDisable ? 0.6 : 1 }]}>
          <Camera
            style={styles.cameraContainer}
            ref={(r) => {
              camera = r;
            }}
          ></Camera>
          <View style={styles.cameraBottom}>
            <TouchableOpacity
              disabled={btnDisable}
              style={styles.btnTakePicture}
              onPress={__takePicture}
            />
          </View>
        </View>
      ) : (
        <View style={styles.defaultView}></View>
      )}
    </>
  );
};

export default CameraComponent;

const styles = StyleSheet.create({
  cameraView: {
    flex: 1,
    backgroundColor: "#dccc",
  },
  cameraContainer: {
    width: "100%",
    flex: 5,
  },
  cameraBottom: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  btnTakePicture: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  defaultView: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "center",
  },
});
