import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Hr = ({color,style}) => {
  return (
    <View
      style={[{
        flex:1,
        borderBottomColor:color?color: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
      },]}
    ></View>
  );
};

export default Hr;
