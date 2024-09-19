import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomInput from '../../components/CustomInput'
import MIdBtn from '../../components/Prescription/MIdBtn'
import { Link } from 'expo-router'
import PasswordInput from '../../components/PasswordInput'

const SignUp = () => {
  return (
    <SafeAreaView>
      <View className="felx-1  justify-center h-screen">
        <View>

        <Text className="text-3xl text-accent font-bold my-5 text-center">Sign up to DocRx</Text>
        <View className="mb-10">
          <CustomInput title={"Email"}/>
          <PasswordInput title={"Password"}/>
          <PasswordInput title={"Confirm Password"}/>
        </View>
        <MIdBtn title={"Sign Up"}/>
        </View>
        <Link href={"/login"} asChild>
        <TouchableOpacity href={"/login"}>
          <Text className="text-center text-accent text-lg">Already have an account? Sign in</Text>
        </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>

  )
}

export default SignUp;
