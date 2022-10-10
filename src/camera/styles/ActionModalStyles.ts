import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "red",
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
  },
  btnShowModal: {
    backgroundColor: "#F194FF",
    width: "100%",
    height: 40,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  btnCloseModal: {
    backgroundColor: "gray",
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1000,
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  txtTitleBtnShow: {
    color: "white",
    // fontWeight: "bold", // android can not use "bold" with "fontFamily"
    textAlign: "center",
    fontFamily: "DancingScript-Regular",
  },
  txtTitleBtnClose: {
    fontSize: 20,
    color: "blue",
  },
  
});
