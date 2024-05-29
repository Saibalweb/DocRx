import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Prescription = () => {
  return (
    <SafeAreaView>
      <Text>Prescription</Text>
      <Link className="text-black" href="/preview">Create Prescription</Link>
    </SafeAreaView>
  )
}

export default Prescription;