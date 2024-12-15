import { Text, View } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";

const AddressBlock = ({dispensaryAddress}) => {
  const {streetName,practiceHours,dispensaryName,city,state,postal,practiceDays,_id}= dispensaryAddress;
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
      {dispensaryName && <Text className="text-lg ">{dispensaryName}</Text>}
      <Text className="text-lg">{`${streetName}`} </Text>
      <Text className="text-lg">{`${city},${state}-${postal}`}</Text>
      <View className="flex-row">
        {practiceDays.map((item,index)=><Text key={index} className="text-lg mr-1">{item}</Text>)}
      </View>
      <Text className="text-lg">{`${practiceHours.startTime}-${practiceHours.endTime}`}</Text>
    </View>
  );
};

export default AddressBlock;
