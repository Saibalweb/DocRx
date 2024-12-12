import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const AuthBtn = ({onPress,title,disable}) => {
  return (
    <TouchableOpacity
      className={`p-5  mx-5 my-4 items-center justify-center rounded-lg ${
        disable ? "bg-gray-400" : "bg-accent"
      }`}
      disabled={disable}
      onPress={onPress}
    >
      <Text className="text-lg text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default AuthBtn;
