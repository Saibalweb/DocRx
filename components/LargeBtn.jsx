import { View, Text, TouchableOpacity,Image } from "react-native";
import { Link } from "expo-router";
import React from "react";
import {Create} from "../constants/Images"

const LargeBtn = ({ link }) => {
  return (
    <Link href={`${link}`} asChild>
      <TouchableOpacity
        href={`/${link}`}
        className="py-10 m-10 rounded-3xl bg-accent justify-center items-center shadow-xl shadow-black"
      >
        <Image source={Create} className="mb-2"/>
        <Text className={"text-white text-xl"}>Create Prescription</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default LargeBtn;
