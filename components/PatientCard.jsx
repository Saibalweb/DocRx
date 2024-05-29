import { View, Text } from 'react-native'
import React from 'react';
import {FontAwesome,Entypo}  from '@expo/vector-icons';
import {primary} from "../constants/Colors"

const PatientCard = () => {
  return (
    <View className="flex-row p-5 mx-4 my-1.5 bg-secondary rounded-md items-center justify-between">
      <View className="flex-row items-center">
        <FontAwesome name="user-circle-o" size={40} color={"#37B6E9"}/>
        <View className="ml-3">
            <Text className="text-primary text-xl">Saibal Kole</Text>
            <View>
                <Text className="text-base">Male | 23</Text>
            </View>
        </View>
      </View>
      <View className="flex-row items-center">
          <Entypo name='calendar' size={15} color={"#37B6E9"}/>
          <Text className="ml-1">10/05/2024</Text>
      </View>
    </View>
  )
}

export default PatientCard;