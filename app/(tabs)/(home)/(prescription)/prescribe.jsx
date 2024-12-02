import { StyleSheet, Text, View, Dimensions,} from "react-native";
import React from "react";
import MIdBtn from "../../../../components/Prescription/MIdBtn";
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

const Prescribe = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{ width: width }}>
        <Text>This is Next Page</Text>
        <MIdBtn title={"search"} link={"/searchModal"} />
      </View>
    </SafeAreaView>
  );
};

export default Prescribe;
