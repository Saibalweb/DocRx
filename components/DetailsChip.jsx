import { EvilIcons,AntDesign } from '@expo/vector-icons';
import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native';

const DetailsChip = ({onPress,text,id}) => {
  return (
    <View className="bg-secondaryDark mx-2 my-1 px-2 py-2 rounded-md flex-row items-center" style={{alignSelf:"flex-start"}}>
        <Text className="text-lg text-white mr-2">{text}</Text>
        <TouchableOpacity className=" p-1" onPress={()=>onPress(id)}>
        <AntDesign name='closecircleo' size={26} color={'white'}/>
        </TouchableOpacity>
    </View>
  )
}

export default DetailsChip;