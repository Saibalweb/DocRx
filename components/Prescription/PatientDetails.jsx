import { View, Text } from "react-native";
import React from "react";

const PatientDetails = ({heading,value}) => {
  return (
    <View className="flex-row items-center">
      <Text className="mr-1">{heading}</Text>
      <Text className="font-bold">{value}</Text>
    </View>
  );
};

export default PatientDetails;
