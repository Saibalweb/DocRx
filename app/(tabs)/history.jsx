import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import MIdBtn from "../../components/Prescription/MIdBtn";
import { Link } from "expo-router";
import Header from "../../components/Header";
import DateBtn from "../../components/History/DateBtn";
import DatePickerBtn from "../../components/History/DatePickerBtn";


const History = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"History"} />
      <ScrollView className="p-4">
        <View className="my-4 flex-row">
          <DateBtn />
          <DateBtn />
          <DateBtn />
          <DatePickerBtn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default History;
