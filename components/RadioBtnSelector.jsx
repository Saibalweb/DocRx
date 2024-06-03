import { View, Text,TouchableOpacity } from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";

const RadioBtnSelector = ({title,selected,onSelect,index}) => {
  return (
    <TouchableOpacity className="flex-row items-center border w-28 mx-2 my-2 rounded-md" onPress={()=>{onSelect(index)}}>
      <RadioButton
        value="first"
        status={selected?"checked":"unchecked"}
        onPress={()=>{onSelect(index)}}
      />
      <Text className="text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default RadioBtnSelector;
