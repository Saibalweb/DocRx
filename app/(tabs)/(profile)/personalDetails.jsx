import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import CustomInput from "../../../components/CustomInput";
import MIdBtn from "../../../components/Prescription/MIdBtn";
import CustomDropdown from "../../../components/CustomDropdown";
import { Link } from "expo-router";
import { useSelector } from "react-redux";
import DetailsChip from "../../../components/DetailsChip";
import ChipContainer from "../../../components/ChipContainer";
import {
  PG_DEGREE,
  PG_SPECIALITY_MD,
  PG_SPECIALITY_MS,
  SUPER_SPECIALITY_DEGREE,
  SUPER_SPECIALITY_DM,
  SUPER_SPECIALITY_MCH,
  UG_DEGREE,
} from "../../../constants/Academic_Details";
import AuthBtn from "../../../components/AuthBtn";
import { post } from "../../../utils/requestBuilder";
import Toast from 'react-native-simple-toast';

const PersonalDetails = () => {
  const userInfo = useSelector((state) => state.user);
  const token = useSelector(state=>state.auth.token);
  const [regNo, setRegNo] = useState("");
  const [degree, setDegree] = useState(userInfo.degree);
  const [specialisation, setSpecialisation] = useState(userInfo.specialisation);
  const [specialisationDegree, setSpecialisationDegree] = useState(
    userInfo.specialisation_degree
  );
  const [superSpecialisation, setSuperSpecialisation] = useState(
    userInfo.superSpecialisation
  );
  const [superSpecialisationDegree, setSuperSpecialisationDegree] = useState(
    userInfo.superSpecialisation_degree
  );
  const [otherDetails, setOtherDetails] = useState(userInfo.otherDetails);
  const [isLoading,setIsLoading] = useState(false);

  const saveInfo = async () => {
    setIsLoading(true);
    if (
      degree === userInfo.degree &&
      regNo === userInfo?.regNo &&
      specialisation === userInfo.specialisation &&
      specialisationDegree === userInfo.specialisation_degree &&
      superSpecialisation === userInfo.superSpecialisation &&
      superSpecialisationDegree === userInfo.superSpecialisation_degree &&
      otherDetails === userInfo.otherDetails
    ) {
      setIsLoading(false);
      return;
    }
    if(!degree || !regNo){
      setIsLoading(false);
      Toast.show('Please fill degree & regNo.',Toast.LONG);
      return;
    }
    const completeRegisterUrl = `http://192.168.0.197:6000/api/v1/doctor/complete-details`
    const body = JSON.stringify({
      degree,
      regNo,
      specialisation,
      specialisation_degree: specialisationDegree,
      superSpecialisation,
      superSpecialisation_degree: superSpecialisationDegree,
      otherDetails,
    })
    const res = await post(completeRegisterUrl,body,token,"json");
    if(res?.statusCode===202){
      Toast.show("Successfully saved Info!",Toast.LONG);
      setIsLoading(false);
    }else{
      Toast.show("Failed to save Info!",Toast.LONG);
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"Personal Details"} />
      <ScrollView className="my-2 p-2">
        <CustomInput title={"Name"} editable={false} value={userInfo.name} required/>
        <CustomInput
          title={"Reg. No."}
          required
          onChangeText={(text) => setRegNo(text)}
          value={regNo}
        />

        <View>
          <CustomDropdown
            title={"Degree"}
            required
            placeholder={userInfo.degree || "Please select degree"}
            data={UG_DEGREE}
            selectedLabel={degree}
            search={true}
            onChange={(item) => setDegree(item.label)}
          />
          {degree && (
            <ChipContainer>
              <DetailsChip text={degree} />
            </ChipContainer>
          )}
        </View>
        <View>
          <CustomDropdown
            title={"Specalisation Degree"}
            placeholder={"Please select specalistain degree"}
            data={PG_DEGREE}
            selectedLabel={specialisationDegree}
            search={true}
            onChange={(item) => {
              setSpecialisationDegree(item.label);
              setSpecialisation("");
            }}
          />
          {specialisationDegree && (
            <ChipContainer>
              <DetailsChip text={specialisationDegree} />
            </ChipContainer>
          )}
        </View>
        <View>
          <CustomDropdown
            title={"Specialisation"}
            placeholder={"Please select specialisation"}
            data={
              specialisationDegree == "MD"
                ? PG_SPECIALITY_MD
                : specialisationDegree === "MS"
                ? PG_SPECIALITY_MS
                : PG_SPECIALITY_MD
            }
            search={true}
            selectedLabel={specialisation}
            onChange={(item) => setSpecialisation(item.label)}
          />
          {specialisation && (
            <ChipContainer>
              <DetailsChip text={specialisation} />
            </ChipContainer>
          )}
        </View>

        <View>
          <CustomDropdown
            title={"SuperSecialisation Degree"}
            placeholder={"Select super specialisation degree"}
            data={SUPER_SPECIALITY_DEGREE}
            selectedLabel={superSpecialisationDegree}
            onChange={(item) => {
              setSuperSpecialisationDegree(item.label);
              setSuperSpecialisation("");
            }}
          />
          {superSpecialisationDegree && (
            <ChipContainer>
              <DetailsChip text={superSpecialisationDegree} />
            </ChipContainer>
          )}
        </View>
        <View>
          <CustomDropdown
            title={"SuperSpecialisation"}
            placeholder={"Select super specialisation"}
            data={
              superSpecialisationDegree === "DM"
                ? SUPER_SPECIALITY_DM
                : superSpecialisationDegree === "MCh"
                ? SUPER_SPECIALITY_MCH
                : SUPER_SPECIALITY_DM
            }
            search={true}
            selectedLabel={superSpecialisation}
            onChange={(item) => setSuperSpecialisation(item.label)}
          />
          {superSpecialisation && (
            <ChipContainer>
              <DetailsChip text={superSpecialisation} />
            </ChipContainer>
          )}
        </View>
        <CustomInput
          title={"Other"}
          placeholder={"Enter other academic details"}
          onChangeText={(text) => setOtherDetails(text)}
          value={otherDetails}
        />

        <View className="mx-5 my-4">
          <View className="flex-row">
            <Text className="text-lg mr-1 font-semibold">
              Dispensary Address
            </Text>
            <Text className="text-red-600 text-lg">*</Text>
          </View>

          <Link href={"/address"} asChild>
            <TouchableOpacity className="my-4" href={"/address"}>
              <View>
                <Text className="text-2xl text-primary">+ Add Address</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        <AuthBtn title={"Save Info"} onPress={saveInfo} isLoading={isLoading} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalDetails;
