import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const MIdBtn = ({title,link,payload}) => {
  return (
    <Link href={{ pathname: link, params: {...payload } }} asChild>
    <TouchableOpacity className="p-5 bg-accent mx-5 my-4 items-center justify-center rounded-lg" href={`${link}`}>
        <Text className="text-lg text-white">{title}</Text>
    </TouchableOpacity>
    </Link>
  )
}

export default MIdBtn