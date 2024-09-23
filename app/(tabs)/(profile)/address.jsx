import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "../../../components/Header";
import { Link } from "expo-router";
import AddressBlock from "../../../components/address/AddressBlock";

const Address = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"Address"} back />
      <ScrollView className="px-4 pb-14">
        <Link href={"/addAdress"} asChild>
          <TouchableOpacity className="my-4" href={"/addAdress"}>
            <View>
              <Text className="text-2xl text-primary">+ Add Address</Text>
            </View>
          </TouchableOpacity>
        </Link>
        <AddressBlock/>
        <AddressBlock/>
        <AddressBlock/>
        <AddressBlock/>
        <AddressBlock/>
        <AddressBlock/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Address;

const styles = StyleSheet.create({});
