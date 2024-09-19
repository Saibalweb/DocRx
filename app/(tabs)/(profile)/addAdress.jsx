import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import CustomInput from "../../../components/CustomInput";
import CustomDropdown from "../../../components/CustomDropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TimePicker from "../../../components/TimePicker";
import LargeBtn from "../../../components/LargeBtn";
import MIdBtn from "../../../components/Prescription/MIdBtn";

const addAdress = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"Add Address"} back />
      <ScrollView className="my-2 p-2">
        <CustomInput title={"Dispensary Address"} required />
        <CustomInput title={"Dispensary/Clinic Name(if Any)"} />
        <CustomInput title={"City/Town"} required />
        <View className="flex-row">
          <CustomInput title={"State"} required widthHalf />
          <CustomInput title={"Postal"} required widthHalf />
        </View>
        <CustomDropdown
          title={"Day(s)"}
          placeholder={"Please select days of Practice"}
        />
        <View className="mx-4 my-4">
          <View>
            <Text className="text-lg ml-1 font-semibold mb-2">Set Hours</Text>
          </View>
          <View className="flex-row justify-around">
            {/* <Text>This is hollow</Text> */}
            <TimePicker title={"From"} />
            <TimePicker title={"To"} />
          </View>
        </View>
        <MIdBtn title={'Add'}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default addAdress;
