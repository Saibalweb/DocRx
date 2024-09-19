import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TimePicker = ({ title }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date.toString());
    hideDatePicker();
  };
  return (
      <TouchableOpacity
        style={{ width: "45%" }}
        className="m-4 p-4 border rounded-md flex-row items-center justify-between"
        onPress={showDatePicker}
      >
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          date={new Date()}
        />
        <Text className="text-lg">{title}</Text>
        <Feather name="clock" size={20} />
      </TouchableOpacity>
  );
};

export default TimePicker;
