import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ChipContainer = ({children}) => {
  return (
    <View className="ml-2 flex-row flex-wrap">
      {children}
    </View>
  );
};

export default ChipContainer;
