import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRootNavigationState, Redirect } from 'expo-router';

const index = () => {
  return (
    // <SafeAreaProvider className="flex-1">
    //   <View>
    //     <Text>index</Text>
    //   </View>
    // </SafeAreaProvider>
    // <Redirect href={'/(tabs)/(home)/home'}/>
    // <Redirect href={'/(auth)/login'}/>
    <Redirect href={'/(tabs)/(profile)/addAdress'}/>
  );
};

export default index;
