import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const TimePicker = ({ title,onConfirm }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const handleConfirm = (date) => {
    onConfirm(date);
    setDatePickerVisibility(false);
  };
  return (
      <TouchableOpacity
        style={{ width: "45%" }}
        className="m-4 p-4 border rounded-md flex-row items-center justify-between"
        onPress={()=>setDatePickerVisibility(true)}
      >
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={()=>setDatePickerVisibility(false)}
          date={new Date()}
        />
        <Text className="text-lg">{title}</Text>
        <Feather name="clock" size={20} />
      </TouchableOpacity>
  );
};

export default TimePicker;
