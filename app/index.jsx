import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRootNavigationState, Redirect } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/Colors";

const index = () => {
  return (
    // <SafeAreaProvider className="flex-1">
    //   <View>
    //     <Text>index</Text>
    //   </View>
    // </SafeAreaProvider>
    <SafeAreaProvider>
      <StatusBar backgroundColor={Colors.secondary}/>
      <Redirect href={'/(tabs)/(home)/home'}/>
    </SafeAreaProvider>
    // <Redirect href={'/(auth)/login'}/>
    // <Redirect href={'/(tabs)/(profile)/addAdress'}/>
  );
};

export default index;
