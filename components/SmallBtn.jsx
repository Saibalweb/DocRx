import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const SmallBtn = ({save,share,print,type}) => {
  return (
    <TouchableOpacity className="p-3 bg-accent w-32 rounded-lg flex-row items-center justify-center">
        {type==="save" && <FontAwesome name='download' size={20} color={"white"}/>}
       {type==="print" && <FontAwesome name='print' size={20} color={"white"}/>}
        {type==="share" &&<FontAwesome name='share' size={20} color={"white"}/>}
      <Text className="text-white text-base ml-2"></Text>
    </TouchableOpacity>
  )
}

export default SmallBtn;