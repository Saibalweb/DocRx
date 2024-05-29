import { View, Text } from 'react-native'
import React from 'react';
import FontAwesome  from '@expo/vector-icons/FontAwesome';
import {primary} from "../constants/Colors"

const PatientCard = () => {
  return (
    <View className="flex-row p-5 mx-3 bg-secondary">
        <FontAwesome name="user-circle-o" size={40} color={"#37B6E9"}/>
        <View className="ml-3">
            <Text className="text-primary text-lg">Saibal Kole</Text>
            <View>
                <Text>Male | 23</Text>
            </View>
        </View>
    </View>
  )
}

export default PatientCard;