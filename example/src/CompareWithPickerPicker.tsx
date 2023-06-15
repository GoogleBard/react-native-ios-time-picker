import React, {memo, useState} from 'react';
import Picker from '@quidone/react-native-wheel-picker';
import {Picker as PickerPicker} from '@react-native-picker/picker';
import {StyleSheet, Text, View} from 'react-native';

const base12 = Array.from({length: 12}).map((_, i) => ({
  value: i,
  label: `${i}`,
}));

const base60 = Array.from({length: 60}).map((_, i) => ({
  value: i,
  label: `${i}`,
}));

const disabled = false;

const CompareWithPickerPicker = () => {
  const [value, setValue] = useState<number>(10);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Picker
            onValueChanged={({item}) => {
              setValue(item.value);
            }}
            value={2}
            width={100}
            data={base12}
          />
          <Text style={styles.subtitle}>From here (original)</Text>
        </View>
        <View style={styles.itemContainer}>
          <PickerPicker
            selectedValue={value}
            onValueChange={(v) => setValue(v)}
            style={{width: 100, marginTop: 12}}
          >
            {base12.map((item) => {
              return (
                <PickerPicker.Item
                  key={item.value}
                  value={item.value}
                  label={item.label}
                  style={{fontSize: 20}}
                />
              );
            })}
          </PickerPicker>
          <Text style={styles.subtitle}>react-native-picker/picker</Text>
        </View>
      </View>

      <View
        style={[styles.container, {backgroundColor: '#212121', padding: 20}]}
      >
        <View style={styles.itemContainer}>
          <Picker
            onValueChanged={({item}) => {
              setValue(item.value);
            }}
            value={2}
            width={120}
            data={base12}
            itemTextStyle={[
              styles.itemTextStyle,
              disabled && {color: 'rgba(255,255,255,0.5)'},
            ]}
            labelTextStyle={disabled && {color: 'rgba(255,255,255,0.5)'}}
            selectionOverlayLabel={'hour'}
            selectionOverlayStyle={[
              styles.hoursPicker,
              disabled && {backgroundColor: 'rgba(255,255,255,0.03)'},
            ]}
          />
        </View>
        <View style={styles.itemContainer}>
          <Picker
            value={2}
            width={120}
            data={base60}
            itemTextStyle={[
              styles.itemTextStyle,
              disabled && {color: 'rgba(255,255,255,0.5)'},
            ]}
            labelTextStyle={disabled && {color: 'rgba(255,255,255,0.5)'}}
            selectionOverlayLabel={'min'}
            selectionOverlayStyle={[
              styles.minutesPicker,
              disabled && {backgroundColor: 'rgba(255,255,255,0.03)'},
            ]}
          />
        </View>
        <View style={styles.itemContainer}>
          <Picker
            value={2}
            width={120}
            data={base60}
            itemTextStyle={[
              styles.itemTextStyle,
              disabled && {color: 'rgba(255,255,255,0.5)'},
            ]}
            labelTextStyle={disabled && {color: 'rgba(255,255,255,0.5)'}}
            selectionOverlayLabel={'sec'}
            selectionOverlayStyle={[
              styles.secondsPicker,
              disabled && {backgroundColor: 'rgba(255,255,255,0.03)'},
            ]}
          />
        </View>
      </View>
      <Text style={[styles.subtitle, {textAlign: 'center'}]}>
        iOS Time Picker Style
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 300,
  },
  itemContainer: {
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center',
  },
  itemTextStyle: {
    color: 'white',
    textAlign: 'right',
    position: 'absolute',
    right: 70,
  },

  hoursPicker: {
    width: '100%',
    height: 35,
    borderRadius: 0,
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
  },
  minutesPicker: {
    width: '100%',
    height: 35,
    borderRadius: 0,
  },
  secondsPicker: {
    width: '100%',
    height: 35,
    borderRadius: 0,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
  },
  subtitle: {color: 'gray', fontSize: 10},
});

export default memo(CompareWithPickerPicker);
