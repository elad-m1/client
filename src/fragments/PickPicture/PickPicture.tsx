import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView
} from "@gorhom/bottom-sheet";
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef
} from "react";
import {Pressable} from "react-native";

import {Text} from "@/components";
import {scale} from "@/utils/sizing";

import {useGallery, useStyle} from "./hooks";

const PickPicture: ForwardRefExoticComponent<
  {} & RefAttributes<BottomSheetModal>
> = forwardRef((_props, ref) => {
  const {styles, colors} = useStyle();
  const {chosenImage, pickImage, removeImage} = useGallery();

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={["20%"]}
      handleComponent={null}
      backdropComponent={props => (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      )}
      backgroundStyle={{backgroundColor: colors.card}}>
      <BottomSheetView style={styles.mainWrapper}>
        <Pressable
          onPress={pickImage}
          style={({pressed}) => [
            styles.optionWrapper,
            {opacity: pressed ? 0.5 : 1}
          ]}>
          <Text style={styles.text}>pick_picture.pick_picture</Text>
          <FontAwesomeIcon icon="images" color={colors.text} size={scale(18)} />
        </Pressable>
        <Pressable
          onPress={removeImage}
          style={({pressed}) => [
            styles.optionWrapper,
            {opacity: pressed ? 0.5 : 1}
          ]}>
          <Text style={[styles.text, {color: colors.error}]}>
            pick_picture.remove_picture
          </Text>
          <FontAwesomeIcon
            icon="remove"
            color={colors.error}
            size={scale(18)}
          />
        </Pressable>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default PickPicture;
