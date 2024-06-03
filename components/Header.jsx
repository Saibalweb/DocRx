import { View, Text, Image } from 'react-native'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { Profile } from '@/constants/Images';


const Header = ({title}) => {
  return (
    <>
    <StatusBar backgroundColor='rgba(99, 180, 255,0.5)'/>
    <View className="py-6 px-6 mb- bg-secondaryDark flex-row items-center justify-between ">
      <View className="flex-row items-center">
      <MaterialIcons name='menu' size={25} color={Colors.primary}/>
      <Text className="text-primary text-2xl font-semibold ml-3">{title}</Text>
      </View>
      <Image source={Profile} className="h-10 w-10 rounded-full mr-6 ml-4 "/>
    </View>
    </>
  )
}

export default Header