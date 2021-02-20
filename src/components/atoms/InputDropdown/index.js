import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors} from '../../../utils';

const InputDropdown = ({defaultValue, onChangeItem}) => {
  return (
    <DropDownPicker
      items={[
        {
          label: 'XII',
          value: 3,
        },
        {
          label: 'XI',
          value: 2,
        },
        {
          label: 'X',
          value: 1,
        },
      ]}
      defaultValue={defaultValue}
      placeholder="Jenjang"
      containerStyle={{height: 45, width: 140}}
      style={{
        backgroundColor: colors.background.grey,
        borderWidth: 0,
      }}
      placeholderStyle={{
        color: colors.text.grey,
      }}
      itemStyle={{
        justifyContent: 'flex-start',
      }}
      dropDownStyle={{backgroundColor: '#fafafa'}}
      selectedLabelStyle={{
        color: colors.text.grey,
      }}
      labelStyle={{color: colors.text.grey}}
      onChangeItem={onChangeItem}
    />
  );
};

export default InputDropdown;
