import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "../../../components/Header";
import { Link } from "expo-router";

const Address = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"Address"} back />
      <View className="p-4">
      <Link href={'/addAdress'} asChild>
      
      <TouchableOpacity className="my-4" href={'/addAdress'}>
        <View>
          <Text className="text-2xl text-primary">+ Add Address</Text>
        </View>
      </TouchableOpacity>
      </Link>
      </View>
    </SafeAreaView>
  );
};

export default Address;

const styles = StyleSheet.create({});
