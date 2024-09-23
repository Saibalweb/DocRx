import { Text, View } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";

const AddressBlock = () => {
    const [selected,setSelected]= useState(true);
  return (
    <View className="p-2 m-2 border-primary border rounded-lg bg-slate-100">
      <RadioButton
        value="first"
        status={selected ? "checked" : "unchecked"}
        onPress={() => {
          console.log('this')
        }}    
      />
      <Text className="text-lg ">JeevanSathi Clinic</Text>
      <Text className="text-lg">Bargachia Sakal Bazar </Text>
      <Text className="text-lg">Bargachia,WestBengal-711404,India</Text>
      <Text className="text-lg">8:00am -12:00pm</Text>
    </View>
  );
};

export default AddressBlock;
