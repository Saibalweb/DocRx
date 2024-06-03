import { Link } from "expo-router";
import { StyleSheet, Image, Platform, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import ProfileCard from "../../../components/ProfileCard";
import ProfileSection from "../../../components/ProfileSection";
import Hr from "../../../components/Hr";
export default function Profile() {
  return (
    <SafeAreaView className="flex-1">
      {/* <Header title={"Profile"}/> */}
      <ProfileCard />
      <View className="px-8 my-5">
        <Text className="text-xl font-semibold ">Account</Text>
      </View>
      <ProfileSection title={"Personal Details"} link={'/personalDetails'}/>
      <ProfileSection title={"Academic Details"} />
      <ProfileSection title={"Add Address"} />
      <View className="m-5">
        <Hr />
      </View>
      <View className="px-8 my-3">
        <Text className="text-xl font-semibold ">Settings</Text>
      </View>
      <ProfileSection title={"Set Prescription"}/>
      <ProfileSection title={"Dark Theme"}/>
      <ProfileSection title={"Other"}/>
    </SafeAreaView>
  );
}
