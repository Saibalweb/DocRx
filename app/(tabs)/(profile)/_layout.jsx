import { View, Text } from "react-native";
import { Stack } from "expo-router";
import React from "react";

const ProfileLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="profile" />
      <Stack.Screen name="personalDetails"/>
    </Stack>
  );
};

export default ProfileLayout;
