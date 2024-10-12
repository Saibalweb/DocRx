import { View, Text } from 'react-native'
import React from 'react';
import {FontAwesome,Entypo}  from '@expo/vector-icons';
import {primary} from "../constants/Colors"

const PatientCard = ({details}) => {
  const gender = details?.gender;
  const concern = details?.concern;
  const age = details?.age;
  const appointmentDate = details?.appointmentDate;
  const name = details?.name;
  return (
    <View className="flex-row p-5 mx-4 my-1.5 bg-secondary rounded-md items-center justify-between">
      <View className="flex-row items-center">
        <FontAwesome name="user-circle-o" size={40} color={"#37B6E9"}/>
        <View className="ml-3">
            <Text className="text-primary text-xl">{name?name:"Saibal Kole"}</Text>
            <View>
                <Text className="text-base">{gender?gender:"male"} | {age?age:'00'}</Text>
            </View>
        </View>
      </View>
      <View className="flex-row items-center">
          <Entypo name='calendar' size={15} color={"#37B6E9"}/>
          <Text className="ml-1">{appointmentDate?appointmentDate:"15/10/2024"}</Text>
      </View>
    </View>
  )
}

export default PatientCard;