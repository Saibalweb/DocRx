import { View, Text, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import CustomInput from '../../../components/CustomInput';
import MIdBtn from '../../../components/Prescription/MIdBtn';
import CustomDropdown from '../../../components/CustomDropdown';
import { Link } from 'expo-router';

const PersonalDetails = () => {
  return (
  <SafeAreaView style={{flex:1}}>
    <Header title={"Personal Details"}/>
    <ScrollView className="my-2 p-2">
      <CustomInput title={"Name"} required/>
      <CustomDropdown title={'Degree'} required/>
      <CustomDropdown title={'Specialisation'}/>
      <CustomDropdown title={'SuperSpialisation'}/>
      <CustomInput title={"Other"}/>


      <View className="mx-5 my-4">
        <View className="flex-row">
            <Text className="text-lg mr-1 font-semibold">Dispensary Address</Text>
           <Text className="text-red-600 text-lg">*</Text>
        </View>

        <Link href={'/address'} asChild>
          <TouchableOpacity className="my-4" href={'/address'}>
              <View>
                <Text className="text-2xl text-primary">+ Add Address</Text>
              </View>
          </TouchableOpacity>
        </Link>
      </View>

      <MIdBtn title={"Save Info"}/>


    </ScrollView>
  </SafeAreaView>
  )
}

export default PersonalDetails;