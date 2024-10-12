import { Text, View, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

const DatePickerBtn = () => {
  const [date, setDate] = useState(dayjs());
  const [isVisible, setIsVisible] = useState(false);
  const handleCalendar = () => {
    setIsVisible(true);
  };
  const handleDate = (date)=>{
    console.log(date);
    console.log(date.date.toLocaleString());
    setIsVisible(false);
  }
  return (
    <TouchableOpacity
      className=" w-1/4 h-[82px] m-2 bg-secondary rounded-lg justify-center items-center"
      onPress={handleCalendar}
    >
      <Modal
        visible={isVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableOpacity className="flex-1 justify-center" style={{backgroundColor:"rgba(249, 250, 252,0.75)"}} onPress={()=>setIsVisible(false)}>
          <View className="bg-gray-300 m-4 p-2 rounded-md">
            <DateTimePicker
              mode="single"
              date={date}
              onChange={handleDate}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      <FontAwesome5 name="calendar-alt" size={40} color={"#37B6E9"} />
      <Text className="text-l text-primary">Custom Date</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "50%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DatePickerBtn;
