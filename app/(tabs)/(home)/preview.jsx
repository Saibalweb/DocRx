import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import Hr from "../../../components/Hr";
import PatientDetails from "../../../components/Prescription/PatientDetails";
import RxLabel from "../../../components/Prescription/RxLabel";
import SmallBtn from "../../../components/SmallBtn";

const Preview = () => {
  return (
    <SafeAreaView>
      <Header title={"Preview"} />
      <View className="my-5 mx-2 p-5 bg-white shadow-md border
      ">
        <View className="flex-row justify-between mb-2">
          <View>
            <Text className="text-lg font-bold">Dr.Saibal Kole</Text>
            <Text>M.D, M.B.B.S, DM</Text>
            <Text>Gold Medalist(Medicine)</Text>
            <Text>Senior Fellow in Critical Care</Text>
            <Text>Reg.NO.-20556</Text>
          </View>
          <View className="mb-4">
            <Text>Date:20/5/2024</Text>
          </View>
        </View>
        <Hr />
        <View className="mt-2">
          <PatientDetails heading={"Name: "} value={"Saibal kole"} />
          <PatientDetails heading={"Age:"} value={"60/F"} />
          <PatientDetails heading={"Weight:"} value={"60"} />
          <PatientDetails heading={"MO.: "} value={"8116658972"} />
          <PatientDetails
            heading={"Address: "}
            value={"Bargachia,Howrah-711404"}
          />
        </View>
        <View className="my-4 ">
          <PatientDetails
            heading={"M/H: "}
            value={"Hypothyroidism ,HyperTension"}
          />
          <View className="my-2">
          <PatientDetails heading={"C/C:"} value={"Chest Pain, Nausea"}/>
          </View>
        </View>
        <View>
          <Text className="text-l font-bold mb-3">Rx:</Text>
          <View className="mb-4">
            <RxLabel/>
          </View>
          <View className="mb-4">
            <PatientDetails heading={"Investigation: "} value={"Blood:Hb% HbA, Urea Creatine Na+K+LFT"}/>
          </View>
          <View className="mb-4">
            <Text>Advice:</Text>
            <Text className="mb-2">&#8226; Dietary restiction of suger,fat,oil, spices</Text>
          </View>
        </View>
      </View>
      <View className="p-3 flex-row items-center justify-evenly">
        <SmallBtn type={"save"} />
        <SmallBtn type={"print"}/>
        <SmallBtn type={"share"}/>
      </View>
    </SafeAreaView>
  );
};

export default Preview;
