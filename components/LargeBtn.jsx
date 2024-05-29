import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

const LargeBtn = ({ link }) => {
  return (
    <Link href={`${link}`} asChild>
      <TouchableOpacity
        href={`/${link}`}
        className="py-10 m-10 rounded-3xl bg-secondary justify-center items-center"
      >
        <Text className={"text-primary text-xl"}>Create Prescription</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default LargeBtn;
