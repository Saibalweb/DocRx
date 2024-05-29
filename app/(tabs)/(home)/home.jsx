import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import LargeBtn from "../../../components/LargeBtn";
import Header from "../../../components/Header";
import PatientCard from "../../../components/PatientCard";

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <Header title={"Home"}/>
      <View className="justify-center items-center p-10 mb-10 bg-secondary mx-5">
        <Text className="text-primary text-lg">This is Home</Text>
        <Link className="text-black" href="/(tabs)/history">Create Prescription</Link>
      </View>
      <PatientCard/>
      <PatientCard/>
      <PatientCard/>
      <LargeBtn link={'/(tabs)/profile'}/>
    </SafeAreaView>
  );
};

export default Home;
