import {useEffect } from "react";
import * as ExpoImagePicker from "expo-image-picker";

interface Props {
  options?: ExpoImagePicker.ImagePickerOptions;
  handleClosePicker?: () => void;
  callbackGetImage?: (image: ExpoImagePicker.ImageInfo) => void;
}

const initialOptions: ExpoImagePicker.ImagePickerOptions = {
  mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1,
};

const BasePickerImage = ({
  options = initialOptions,
  handleClosePicker,
  callbackGetImage,
}: Props): JSX.Element | null => {
  useEffect(() => {
    console.log("[BasePickerImage] useEffect");
    pickImage();
  }, []);

  const pickImage = async () => {
    console.log("[BasePickerImage] pickImage");
    try {
      // No permissions request is necessary for launching the image library
      let result = await ExpoImagePicker.launchImageLibraryAsync(options);
      if (result.cancelled) {
        console.log("[BasePickerImage] handleClosePicker");
        if (handleClosePicker) {
          handleClosePicker();
        }
      } else {
        if (callbackGetImage) {
          callbackGetImage(result);
        }
      }
    } catch (error) {
      console.log("[BasePickerImage] error", error);
    }
  };

  return null;
};

export default BasePickerImage;
