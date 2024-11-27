import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView
} from "@gorhom/bottom-sheet";
import moment from "moment";
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef
} from "react";
import {Text as RNText} from "react-native";

import {useStyle} from "./hooks";

interface Props {}

const NextApt: ForwardRefExoticComponent<
  Props & RefAttributes<BottomSheetModal>
> = forwardRef((props, ref) => {
  const {styles} = useStyle();

  const dummyData = {
    barber: "יואב אורלב",
    when: moment(new Date()).format("DD/MM/YYYY HH:mm"),
    where: "רחובות, רחוב בילו 52"
  };

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={["30%"]}
      handleComponent={null}
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      backgroundStyle={styles.sheetWrapper}>
      <BottomSheetView style={styles.mainWrapper}>
        <RNText style={styles.barber}>{dummyData.barber}</RNText>
        <RNText style={styles.when}>{dummyData.when}</RNText>
        <RNText style={styles.where}>{dummyData.where}</RNText>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default NextApt;
