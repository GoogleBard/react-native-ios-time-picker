import React, {memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
type SelectionOverlayProps = {
  height: number;
  width: number | string;
  labelTextStyle?: StyleProp<TextStyle>;
  selectionOverlayLabel?: string | undefined;
  selectionOverlayStyle?: StyleProp<ViewStyle>;
};
const SelectionOverlay = ({
  height,
  width,
  labelTextStyle,
  selectionOverlayLabel,
  selectionOverlayStyle,
}: SelectionOverlayProps) => {
  return (
    <View
      style={[
        styles.root,
        {
          height,
          width,
        },
        selectionOverlayStyle,
      ]}
    >
      <Text style={[styles.selectionLabel, labelTextStyle]}>
        {selectionOverlayLabel}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  selectionLabel: {
    color: '#fff',
    fontSize: 20,
    left: 55,
  },
});
export default memo(SelectionOverlay);
