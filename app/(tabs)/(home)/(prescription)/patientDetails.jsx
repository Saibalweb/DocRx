import { View, Text, TextInput, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../components/Header";
import CustomInput from "../../../../components/CustomInput";
import ModalSelector from "react-native-modal-selector";
import { RadioButton } from "react-native-paper";
import RadioBtnSelector from "../../../../components/RadioBtnSelector";
import SearchInput from "../../../../components/SearchInput";
import { SegmentedButtons } from "react-native-paper";
import MIdBtn from "../../../../components/Prescription/MIdBtn";

const gender = ["Male", "Female", "Other"];
const { width, height } = Dimensions.get("window");

const PatientDetails = () => {
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState("first");
  const [selectedGender, setSelectedGender] = useState(0);
  const [value, setValue] = React.useState("");
  let index = 0;
  const data = [
    { key: index++, section: true, label: "Select" },
    { key: index++, label: "Year" },
    { key: index++, label: "Months" },
    { key: index++, label: "Days" },
  ];
  return (
    <SafeAreaView className="flex-1">
      {/* <Header title={"Create Prescription"} /> */}
      {/* <View className="my-5 mx-4">
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: "walk",
              label: "Patient's Details",
            },
            {
              value: "train",
              label: "Prescribe",
            },
            // { value: 'drive', label: 'Driving' },
          ]}
          theme={{colors:{primaryContainer:"#4894FE"}}}
        />
      </View> */}
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
              style={{ width: "80%" }}
              numeric
              maxLength={3}
            />
            {/* <ModalSelector
        data={data}
        initValue="Select something yummy!"
        supportedOrientations={["landscape"]}
        accessible={true}
        scrollViewAccessibilityLabel={"Scrollable options"}
        cancelButtonAccessibilityLabel={"Cancel Button"}
        onChange={(option) => console.log(option)}
      >
        <TextInput
          style={{
            borderBottomWidth: 1.5,
            borderColor: "red",
            padding: 10,
            height: 50,
            width: 60,
          }}
          editable={false}
          placeholder="Age"
        />
        </ModalSelector> */}
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
          <SearchInput />
          <SearchInput />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PatientDetails;
