import { View, Text } from 'react-native'
import React from 'react'
import Hr from '../Hr';

const RxLabel = () => {
  return (
    <View className="p-2">
      <Text className="text-base mb-2">1. CAP. Thyrox - 75mg (1-1-1)  2weeks  after/meal </Text>
      <Hr/>

      <Text className="text-base mb-2">2. CAP. Calpol - 500mg (1-1-1)  2weeks  after/meal </Text>
      <Hr/>

      <Text className="text-base mb-2">3. CAP. Ctd-d - 6.25mg (1-1-1)  1weeks  after/meal </Text>
      <Hr/>

      <Text className="text-base mb-2">4. CAP. Aztor - 500mg (1-1-1)  continue  after/meal </Text>
      <Hr/>

    </View>
  )
}

export default RxLabel;