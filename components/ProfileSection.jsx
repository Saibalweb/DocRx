import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

const ProfileSection = ({ title, leftIcon, link }) => {
  return (
    <Link href={`${link}`} asChild>
      <TouchableOpacity
        className="flex-row items-center justify-between bg-slate-50 py-5 px-7 my-1.5 mx-4 shadow-lg rounded-md"
        href={`${link}`}
      >
        <View className="flex-row items-center">
          <FontAwesome name="user" size={35} />
          <Text className="ml-4 text-xl">{title}</Text>
        </View>
        <Entypo name="chevron-right" size={35} />
      </TouchableOpacity>
    </Link>
  );
};

export default ProfileSection;
