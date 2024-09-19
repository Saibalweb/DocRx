import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Profile } from "@/constants/Images";
import { useRouter } from 'expo-router';

const Header = ({ title, back,menu }) => {
  const router = useRouter();
  const backHandler = ()=>{
    if(router.canGoBack){
      router.back();
    }
  }
  return (
    <>
      <StatusBar backgroundColor="rgba(99, 180, 255,0.5)" />
      <View className="py-6 px-6 mb- bg-secondaryDark flex-row items-center justify-between ">
        <View className="flex-row items-center">
          {menu && <TouchableOpacity>
            <MaterialIcons name="menu" size={25} color={Colors.primary} />
          </TouchableOpacity>}

          {back && <TouchableOpacity onPress={backHandler} className="px-4 py-1">
            <FontAwesome name="angle-left" size={40} color={Colors.primary} />
          </TouchableOpacity>}

          <Text className="text-primary text-2xl font-semibold ml-3">
            {title}
          </Text>
        </View>
        <Image source={Profile} className="h-10 w-10 rounded-full mr-6 ml-4 " />
      </View>
    </>
  );
};

export default Header;
