import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import CustomInput from "../../../components/CustomInput";
import CustomDropdown from "../../../components/CustomDropdown";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TimePicker from "../../../components/TimePicker";
import LargeBtn from "../../../components/LargeBtn";
import MIdBtn from "../../../components/Prescription/MIdBtn";
import ChipContainer from "../../../components/ChipContainer";
import DetailsChip from "../../../components/DetailsChip";
import moment from "moment";
import AuthBtn from "../../../components/AuthBtn";
import Toast from "react-native-simple-toast";

const practiceDaysData = [
  { label: "Monday", value: 0, name: "MON" },
  { label: "Tuesday", value: 1, name: "TUE" },
  { label: "Wednesday", value: 2, name: "WED" },
  { label: "Thursday", value: 3, name: "THU" },
  { label: "Friday", value: 4, name: "FRI" },
  { label: "Saturday", value: 5, name: "SAT" },
  { label: "Sunday", value: 6, name: "SUN" },
];

const addAdress = () => {
  const [streetName, setStreetName] = useState("");
  const [dispensaryName, setDispensaryName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postal, setPostal] = useState("");
  const [practiceDays, setPracticeDays] = useState([]);
  const [practiceHours, setPracticeHours] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const startTimeHandler = (time) => {
    const formattedTime = moment(time).format("LT");
    setStartTime(formattedTime);
  };
  const endTimeHandler = (time) => {
    const formattedTime = moment(time).format("LT");
    setEndTime(formattedTime);
  };
  const practiceDaysHandler = (item) => {
    setPracticeDays((prevState) => {
      if (prevState) {
        //TODO:store object instead of string and sort the array before saving
        if(prevState.includes(item.name)) return prevState;
        return [...prevState,item.name]
      } else {
        return [item.name];
      }
    });
  };
  const practiceDaysRemove = (id)=>{
    newPractiveDaysArr = practiceDays.filter((item,index)=>index!==id);
    console.log(newPractiveDaysArr);
    setPracticeDays(newPractiveDaysArr);
  }
  const onAddAddress = async() => {
    if(!streetName || !city || !state || !postal){
      Toast.show("Please Enter streetName,city,state,postal",Toast.LONG);
      return;
    }
    const addAdressUrl = process.env.EXPO_PUBLIC_API_URL;
    const body = JSON.stringify({
      streetName,
      dispensaryName,
      city,
      state,
      postal,
      practiceDays,
      practiceHours:{
        startTime,
        endTime
      }
    });
    console.log(body);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"Add Address"} back />
      <ScrollView className="my-2 p-2">
        <CustomInput
          title={"Dispensary Address"}
          required
          onChangeText={(text) => setStreetName(text)}
        />
        <CustomInput
          title={"Dispensary/Clinic Name(if Any)"}
          onChangeText={(text) => setDispensaryName(text)}
        />
        <CustomInput
          title={"City/Town"}
          required
          onChangeText={(text) => setCity(text)}
        />
        <View className="flex-row">
          <CustomInput
            title={"State"}
            required
            widthHalf
            onChangeText={(text) => setState(text)}
          />
          <CustomInput
            title={"Postal"}
            required
            widthHalf
            onChangeText={(text) => setPostal(text)}
          />
        </View>

        <View>
          <CustomDropdown
            title={"Practice Day(s)"}
            placeholder={"Please select days of Practice"}
            data={practiceDaysData}
            onChange={practiceDaysHandler}
            selectedLabel={practiceDays?practiceDays[practiceDays.length-1]:null}
          />
          {practiceDays.length!==0 && (
            <ChipContainer>
              {practiceDays.map((item, index) => (
                <DetailsChip key={index} text={item} id={index} onPress={practiceDaysRemove}/>
              ))}
            </ChipContainer>
          )}
        </View>
        <View className="mx-4 my-4">
          <View>
            <Text className="text-lg ml-1 font-semibold mb-2">
              Practice Hours
            </Text>
          </View>
          <View className="flex-row justify-between">
            {/* <Text>This is hollow</Text> */}
            <TimePicker
              title={startTime || "From"}
              onConfirm={startTimeHandler}
            />
            <TimePicker title={endTime || "To"} onConfirm={endTimeHandler} />
          </View>
        </View>
        <AuthBtn title={"Add Address"} onPress={onAddAddress} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default addAdress;
