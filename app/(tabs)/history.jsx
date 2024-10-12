import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import MIdBtn from "../../components/Prescription/MIdBtn";
import { Link } from "expo-router";
import Header from "../../components/Header";
import DateBtn from "../../components/History/DateBtn";
import DatePickerBtn from "../../components/History/DatePickerBtn";
import { patients } from "../../constants/dummyData";
import PatientCard from "../../components/PatientCard";

const renderPatients = ({item})=>{
  // console.log(item);
  return <PatientCard details={item}/>
}
const History = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"History"} />
      <ScrollView className="p-2">
        <View className="my-4 flex-row">
          <DateBtn />
          <DateBtn />
          <DateBtn />
          <DatePickerBtn />
        </View>
        <View className="p-4 my-2">
          <Text className="text-xl text-primary font-semibold ">25 Sep,2024</Text>
        </View>
        <FlatList
          data={patients}
          keyExtractor={(item)=>item.name}
          renderItem={renderPatients}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default History;
