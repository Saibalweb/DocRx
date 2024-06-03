import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchModal = () => {
  return (
    <SafeAreaView>
    <View className="w-full h-full bg-secondary">
      <Text className="text-2xl">SearchModal</Text>
    </View>
    </SafeAreaView>
  )
}

export default SearchModal;