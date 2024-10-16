import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Stack.Screen name="home" />
      <Stack.Screen name="(prescription)" />
      <Stack.Screen name="preview" />
      <Stack.Screen name="searchModal" options={{ presentation: "modal" }} />
    </Stack>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({});
