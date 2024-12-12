import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import LargeBtn from "../../../components/LargeBtn";
import Header from "../../../components/Header";
import PatientCard from "../../../components/PatientCard";
import CustomInput from "../../../components/CustomInput";
import SearchInput from "../../../components/SearchInput";
import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector(state=>state.auth);
  const userData = useSelector(state=>state.user);
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
      <Header title={"Home"}/>
      <LargeBtn link={'/(prescription)/patientDetails'}/>
      <LargeBtn link={'/preview'}/>
      <PatientCard/>
      <PatientCard/>
      <PatientCard/>
      <PatientCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
