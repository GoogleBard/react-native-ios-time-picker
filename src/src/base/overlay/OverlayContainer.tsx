import React, {memo} from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import type {RenderSelectionOverlay} from '../types';
type OverlayContainerProps = {
  itemHeight: number;
  pickerWidth: number | string;
  renderSelectionOverlay: RenderSelectionOverlay | null | undefined;
  labelTextStyle: StyleProp<TextStyle> | undefined;
  selectionOverlayLabel: string | undefined;
  selectionOverlayStyle: StyleProp<ViewStyle> | undefined;
};
const OverlayContainer = ({
  pickerWidth,
  itemHeight,
  renderSelectionOverlay,
  labelTextStyle,
  selectionOverlayLabel,
  selectionOverlayStyle,
}: OverlayContainerProps) => {
  return (
    <View style={[styles.overlayContainer]} pointerEvents={'none'}>
      {renderSelectionOverlay != null &&
        renderSelectionOverlay?.({
          pickerWidth,
          itemHeight,
          labelTextStyle,
          selectionOverlayLabel,
          selectionOverlayStyle,
        })}
    </View>
  );
};
const styles = StyleSheet.create({
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default memo(OverlayContainer);
