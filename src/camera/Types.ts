export enum TypeAnimation {
  None = "none",
  Slide = "slide",
  Fade = "fade",
}

export interface CameraModalProps {
  modalVisible: boolean;
  animationType?: TypeAnimation;
  handleCloseModal: () => void;
  handleSavePicture?: (photo: any) => void;
}