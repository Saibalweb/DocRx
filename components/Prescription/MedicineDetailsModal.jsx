import { Text, View, Modal, TouchableOpacity } from "react-native";
import Toast from "react-native-simple-toast";
import React, { useState } from "react";
import CustomInput from "../CustomInput";
import AuthBtn from "../AuthBtn";
import CustomDropdown from "../CustomDropdown";
import { Duration, Frequency, Timing } from "../../constants/MedicineDetails";
import AntIcon from 'react-native-vector-icons/AntDesign';

const MedicineDetailsModal = ({ modalVisible, medicine,onPressAdd,onPressClose}) => {
  const [frequency, setFrequency] = useState("");
  const [timing, setTiming] = useState("");
  const [duration, setDuration] = useState("");
  const [otherAdvice, setOtherAdvice] = useState("");
  const onBtnPress = () => {
    const medicineName = medicine?.name;
    if(frequency && timing && duration){
        onPressAdd({frequency,timing,duration,medicineName,otherAdvice});
    }else{
        Toast.show("Please fill all the fields", Toast.LONG);
    }
  };
    const onBackDropPress = () => {
        return;
    }
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View
        className="flex-1 justify-center  bg-gray-50"
      >
        <TouchableOpacity className="flex-row justify-end items-center mr-4" onPress={onPressClose} >
            <Text className="text-2xl mr-2 text-red-500">Close</Text>
            <AntIcon name="closecircleo" size={30} color={'#ef4444'}/>
        </TouchableOpacity>
        <View className="p-1 py-6 m-6 bg-secondary rounded-lg border">
          <Text className="text-primary text-center text-2xl ml-4 font-bold">
            Medicine Details
          </Text>
          <CustomInput
            title={"Medicine Name"}
            value={medicine?.name}
            required
            editable={false}
          />
          <CustomDropdown
            title={"Frequency"}
            data={Frequency}
            placeholder={"eg-1-0-1"}
            required={true}
            search={true}
            onChange={(item)=>setFrequency(item.label)}
          />
          <CustomDropdown
            title={"Timing"}
            placeholder={"eg - a/m b/m"}
            data={Timing}
            required={true}
            search={true}
            onChange={(item)=>setTiming(item.label)}
          />
          <CustomDropdown
            title={"Duration"}
            placeholder={"eg - 1week"}
            data={Duration}
            required={true}
            search={true}
            onChange={(item)=>setDuration(item.label)}
          />
          <CustomInput
            title={"Other Advice"}
            value={otherAdvice}
            onChangeText={(text) => setOtherAdvice(text)}
          />
          <AuthBtn title={"Add"} onPress={onBtnPress} />
        </View>
      </View>
    </Modal>
  );
};

export default MedicineDetailsModal;
