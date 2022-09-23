import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#bfbfbf",
  },
  safeView: {
    flex: 1,
    backgroundColor: "red",
  },
  defaultView: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "center",
  },
  containerCamera: {
    flex: 1,
    backgroundColor: "#dccc",
  },
  sectionCameraPreview: {
    width: "100%",
    flex: 5,
  },
  sectionCameraButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "green",
  },
  blockButtonLeft: {
    flex: 1,
  },
  blockButtonCenter: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  blockButtonRight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTakePicture: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  btnCloseModal: {
    width: 40,
    height: 40,
    bottom: 0,
    borderRadius: 40,
    backgroundColor: "red",
  },
});
