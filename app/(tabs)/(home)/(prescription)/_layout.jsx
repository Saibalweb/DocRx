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
        <Stack screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="patientDetails"/> 
          <Stack.Screen name="prescribe"  /> 
          <Stack.Screen name="searchModal" options={{ presentation: "modal",animation:"fade_from_bottom"}} />
        </Stack>
      );
};

export default PrescriptionLaytout;
