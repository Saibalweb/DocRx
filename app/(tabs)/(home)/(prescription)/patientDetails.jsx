import { View, Text, TextInput, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../components/Header";
import CustomInput from "../../../../components/CustomInput";
import ModalSelector from "react-native-modal-selector";
import RadioBtnSelector from "../../../../components/RadioBtnSelector";
import SearchInput from "../../../../components/SearchInput";
import MIdBtn from "../../../../components/Prescription/MIdBtn";
import CustomDropdown from "../../../../components/CustomDropdown";

const gender = ["Male", "Female", "Other"];
const { width, height } = Dimensions.get("window");

const PatientDetails = () => {
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState("first");
  const [selectedGender, setSelectedGender] = useState(0);
  const [value, setValue] = React.useState("");
  let index = 0;
  const data = [
    { label: "Year",value:"Year" },
    { label: "Months",value:"Months" },
    { label: "Days",value:"Days" },
  ];
  return (
    <SafeAreaView className="flex-1">
      {/* <Header title={"Create Prescription"} /> */}
      <View className="flex-1 mb-12" style={{ width: width }}>
        <ScrollView className="flex-1">
          <Text className="my-4 mx-5 text-2xl text-accent font-bold underline">
            Basic
          </Text>
          <CustomInput title={"Name"} required />
          <View className="flex-row items-center">
            <CustomInput
              title={"Age"}
              required
              style={{ width: "50%" }}
              numeric
              maxLength={3}
            />
            <CustomDropdown placeholder={'Year'} width={'30%'} data={data}/>
          </View>
          <CustomInput title={"Weight"} numeric maxLength={3} />
          <CustomInput title={"Mobile No."} numeric maxLength={10} />

          <Text className="text-lg font-bold mx-5 my-2">Gender</Text>
          <View className="flex-row px-4">
            {gender.map((item, index) => (
              <RadioBtnSelector
                key={item}
                title={item}
                index={index}
                onSelect={(i) => {
                  setSelectedGender(i);
                }}
                selected={index === selectedGender}
              />
            ))}
          </View>

          {/* Medical HIstory--> */}
          <Text className="my-4 mx-5 text-2xl text-accent font-bold underline">
            Medical History
          </Text>
          <SearchInput searchIcon={false} />
          <SearchInput  searchIcon={false}/>
          <MIdBtn title={'Prescribe'} link={'/prescribe'} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PatientDetails;
