import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Dropdown,MultiSelect } from "react-native-element-dropdown";
import { Colors } from "../constants/Colors";
const dummyData =[
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];


const CustomDropdown = ({title,placeholder,required,search,width,data,selectedLabel,onChange}) => {
  const selectedIdx =data&& selectedLabel ? data.find((item)=>item.label===selectedLabel).value :null ;
  return (
    <View className="mx-5 my-5" style={{width:width||'90%'}}>
      <View className="flex-row mb-3">
        <Text className="text-lg mr-1 font-semibold">{title}</Text>
        {required &&<Text className="text-red-600 text-lg">*</Text>}
      </View>
      <Dropdown
        mode="default"
        search={search || null}
        autoScroll={true}
        data={data || dummyData}
        valueField="value"
        labelField="label"
        value={selectedIdx? data[selectedIdx]:null}
        onChange={onChange}
        placeholder={placeholder?placeholder:"Please Select Degree"}
        placeholderStyle={{ fontSize: 20,color:'gray',opacity:0.5 }}
        style={styles.dropdown}
        itemTextStyle={{ color: "black", fontSize: 25 }}
        itemContainerStyle={{ borderBottomWidth:1,}}
        selectedTextStyle={{ color: Colors.primary,fontSize:20 }}
        activeColor={Colors.secondaryDark}
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
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default CustomDropdown;
