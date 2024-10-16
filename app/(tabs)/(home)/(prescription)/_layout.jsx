import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Stack } from "expo-router";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PatientDetails from "./patientDetails";
import Prescribe from "./prescribe";
const Tab = createMaterialTopTabNavigator();
const PrescriptionLaytout = () => {
    return (
        <SafeAreaView style={{flex:1}}>
        <Tab.Navigator>
          <Tab.Screen name="Details" component={PatientDetails} /> 
          <Tab.Screen name="prescribe" component={Prescribe} /> 
        </Tab.Navigator>
        </SafeAreaView>
      );
};

export default PrescriptionLaytout;
