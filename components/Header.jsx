import { View, Text } from 'react-native'
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const Header = ({title}) => {
  return (
    <>
    <StatusBar backgroundColor='rgba(99, 180, 255,0.5)'/>
    <View className="py-6 px-8 mb-0 bg-secondaryDark ">
      <Text className="text-primary text-2xl font-semibold">{title}</Text>
    </View>
    </>
  )
}

export default Header