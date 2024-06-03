import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const CustomInput = ({required,title,style,numeric,maxLength}) => {
  const [value, setValue] = useState();
  return (
    <View className="mx-5 my-3 " style={style}>
        <View className="flex-row">
            <Text className="text-lg mr-1 font-semibold">{title}</Text>
            {required && <Text className="text-red-600 text-lg">*</Text>}
        </View>
      <TextInput
        className="py-3 px-5 border-b border-gray-600 text-black text-xl"
        cursorColor={"#37B6E9"}
        keyboardType={numeric? "numeric" : "default"}
        maxLength={maxLength?maxLength:200}
      />
    </View>
  );
};

export default CustomInput;
