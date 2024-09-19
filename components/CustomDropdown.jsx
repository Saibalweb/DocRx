import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Dropdown,MultiSelect } from "react-native-element-dropdown";

const CustomDropdown = ({title,placeholder,required}) => {
    const [selected, setSelected] = useState([]);
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  return (
    <View className="mx-5 my-5">
      <View className="flex-row mb-3">
        <Text className="text-lg mr-1 font-semibold">{title}</Text>
        {required &&<Text className="text-red-600 text-lg">*</Text>}
      </View>
      <MultiSelect
        mode="modal"
        search
        data={data}
        valueField="value"
        labelField="label"
        value={selected}
        onChange={(item) => {
          console.log(item.value);
          setSelected(item);
        }}
        placeholder={placeholder?placeholder:"Please Select Degree"}
        placeholderStyle={{ fontSize: 20 }}
        style={styles.dropdown}
        itemTextStyle={{ color: "black", fontSize: 25 }}
        itemContainerStyle={{ borderBottomWidth: 1 }}
        selectedTextStyle={{ color: "black",fontSize:20 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  dropdown: {
    // margin: 26,
    height: 50,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    color: "black",
  },
  itemTextStyle: {},
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default CustomDropdown;
