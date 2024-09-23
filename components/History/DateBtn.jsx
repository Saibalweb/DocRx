import { Text, View } from 'react-native'
import React from 'react'

const DateBtn = () => {
  return (
    <View className=" w-1/5 m-2">
    <View className="bg-secondary rounded-lg p-2  items-center">
      <Text className="text-xl mb-2">Fri</Text>
      <Text className="text-xl">20</Text>
    </View>
    <View className="p-1 border rounded-full items-center">
        <Text>Today</Text>
    </View>
    </View>
  )
}

export default DateBtn;
