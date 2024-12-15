import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

const AuthBtn = ({onPress,title,disable,isLoading}) => {
  return (
    <TouchableOpacity
      className={`p-5  mx-5 my-4 items-center justify-center rounded-lg ${
        disable ? "bg-gray-400" : "bg-accent"
      }`}
      disabled={disable|| isLoading}
      onPress={onPress}
    >
      {!isLoading && <Text className="text-lg text-white">{title}</Text>}
      {isLoading && <ActivityIndicator size={'large'} color={"white"}/>}
    </TouchableOpacity>
  );
};

export default AuthBtn;
