import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import MIdBtn from '../../../../components/Prescription/MIdBtn';
const { width, height } = Dimensions.get("window");

const Prescribe = () => {
  return (
    <View style={{ width: width }}>
    <Text>This is Next Page</Text>
    <MIdBtn title={"search"} link={'/searchModal'}/>
  </View>
  )
}

export default Prescribe;
