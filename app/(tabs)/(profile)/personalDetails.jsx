import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import CustomInput from '../../../components/CustomInput';
import MIdBtn from '../../../components/Prescription/MIdBtn';

const PersonalDetails = () => {
  return (
  <SafeAreaView>
    <Header title={"Personal Details"}/>
    <View className="my-2 p-2">
      <CustomInput title={"Name"} required/>
      <CustomInput title={"Degree"} required/>
      <CustomInput title={"Specialization"} />
      <CustomInput title={"Super Specialization"}/>
      <CustomInput title={"Other"}/>
      <CustomInput title={"Dispensary Address"} required/>

      <MIdBtn title={"Save Info"}/>


    </View>
  </SafeAreaView>
  )
}

export default PersonalDetails;