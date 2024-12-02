import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../../../components/SearchInput";
import { Feather, Fontisto } from "@expo/vector-icons";
const MedicineList = ({item}) => {
  return (
    <View className="flex-row justify-between items-center  mx-4 my-2 py-6 px-2 bg-secondary border-primary border-2 rounded-lg">
      <View className="flex-row w-2/3 items-center">
        <Fontisto name="tablets" size={30} color={"black"} />
        <Text className="text-2xl ml-2">{item|| "Paracetamol 600mg"}</Text>
      </View>
      <View className="flex-row items-center">
        <TouchableOpacity className="mx-2">
          <Feather name="edit" size={30} />
        </TouchableOpacity>
        <TouchableOpacity className="mx-2">
          <Feather name="trash-2" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SearchModal = () => {
  const [arr, setArr] = useState(null);
  const handleSuggestionPress = (selectedItem) => {
    console.log(selectedItem);
    setArr((prevArr) =>
      prevArr ? [...prevArr, selectedItem] : [selectedItem]
    );
  };
  return (
    <SafeAreaView>
      <ScrollView
        className="w-full h-full bg-white"
        keyboardShouldPersistTaps="always"
        nestedScrollEnabled
      >
        <Text className="text-2xl">SearchModal</Text>
        <SearchInput
          title={"Search Medicine"}
          searchIcon={true}
          onPressSugestion={handleSuggestionPress}
        />
        {arr &&
          arr.map((item, index) => (
            <MedicineList item={item}/>
          ))} 
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchModal;
