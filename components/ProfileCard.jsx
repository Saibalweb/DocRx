import { View, Text,Image } from 'react-native'
import React from 'react';
import {Profile} from "../constants/Images"

const ProfileCard = () => {
  return (
    <View className='flex-row bg-secondary py-10 pl-4'>
        <Image source={Profile} className='h-20 w-20 rounded-full mr-6 ml-4'/>
        <View className='mt-2'>
            <Text className='text-2xl text-primary font-semibold'>Dr. Saibal Kole</Text>
            <Text className='mt-2 text-zinc-600'>saibalkole@gmail.com</Text>
        </View>
    </View>
  )
}

export default ProfileCard;