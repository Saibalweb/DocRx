import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const EmailInput = ({
  required,
  title,
  style,
  numeric,
  maxLength,
  value,
  onChangeText,
  valid,
}) => {
  return (
    <View className="mx-5 my-3 " style={style}>
      <View className="flex-row">
        <Text className="text-lg mr-1 font-semibold">{title}</Text>
        {required && <Text className="text-red-600 text-lg">*</Text>}
      </View>
      <View
        className={`flex-row border-b ${
          !valid ? "border-red-600" : "border-gray-600"
        } `}
      >
        <TextInput
          className="py-3 px-5 text-black text-xl w-full"
          cursorColor={"#37B6E9"}
          keyboardType={numeric ? "numeric" : "default"}
          maxLength={maxLength ? maxLength : 200}
          onChangeText={onChangeText}
        />
      </View>
      {!valid && (
        <Text className="text-right text-red-600">
          Please Enter Valid Email!
        </Text>
      )}
    </View>
  );
};

export default EmailInput;
