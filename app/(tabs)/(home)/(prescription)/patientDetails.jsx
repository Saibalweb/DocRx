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
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedGender, setSelectedGender] = useState(0);
  const [value, setValue] = React.useState("");
  const [medicalHistory, setMedicalHistory] = useState({
    chronicDisease: "",
    allergy: "",
    familyDisease: "",
    previousSurgery: "",
    socialHistory: "",
    drugHistory: "",
  });
  let index = 0;
  const data = [
    { label: "Year", value: 0},
    { label: "Months", value: 1 },
    { label: "Days", value: 2 },
  ];
  return (
    <SafeAreaView className="flex-1">
      {/* <Header title={"Create Prescription"} /> */}
      <View className="flex-1 mb-12" style={{ width: width }}>
        <ScrollView className="flex-1">
          <Text className="my-4 mx-5 text-2xl text-accent font-bold underline">
            Basic
          </Text>
          <CustomInput title={"Name"}
           required
            onChangeText={(text) => setName(text)}
            />
          <View className="flex-row items-center">
            <CustomInput
              title={"Age"}
              required
              style={{ width: "50%" }}
              numeric
              maxLength={3}
              onChangeText={(text) => setAge(text)}
            />
            <CustomDropdown
              placeholder={"Year"}
              width={"30%"}
              data={data}
              onChange={(item)=>{return}}
            />
          </View>
          <CustomInput title={"Weight"}
           numeric 
           maxLength={3}
            onChangeText={(text) => setWeight(text)}
            />
          <CustomInput title={"Mobile No."} 
          numeric maxLength={10}
          onChangeText={(text) => setMobile(text)}
           />

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
          <SearchInput
            searchIcon={false}
            title={"Chronic Disease"}
            placeholder={"eg- Diabetes"}
            onChangeText={(text) => setMedicalHistory({ ...medicalHistory, chronicDisease: text })}
          />
          <SearchInput
            searchIcon={false}
            title={"Allergy"}
            placeholder={"eg -Dust Allergy"}
            onChangeText={(text) => setMedicalHistory({ ...medicalHistory, allergy: text })}
          />
          <SearchInput
            searchIcon={false}
            title={"Family Disease"}
            placeholder={"eg -Heart Disease"}
            onChangeText={(text) => setMedicalHistory({ ...medicalHistory, familyDisease: text })}
          />
          <SearchInput searchIcon={false}
           title={"Previous Surgery"}
            placeholder={"eg -Appendix"}
            onChangeText={(text) => setMedicalHistory({ ...medicalHistory, previousSurgery: text })}
            />
          <SearchInput searchIcon={false}
           title={"Social History"}
            placeholder={"eg -Smoking"}
            onChangeText={(text) => setMedicalHistory({ ...medicalHistory, socialHistory: text })}
            />
          <SearchInput searchIcon={false}
           title={"Drug History"} 
            placeholder={"eg -Paracetamol"}
            onChangeText={(text) => setMedicalHistory({ ...medicalHistory, drugHistory: text })}
           />
          <MIdBtn title={"Prescribe"} 
          link={"/prescribe"} 
          payload={{ name, age, weight,mobile,gender:gender[selectedGender],medicalHistory:JSON.stringify(medicalHistory) }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PatientDetails;
