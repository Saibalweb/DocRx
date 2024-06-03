import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import Hr from "../components/Hr";
import { Feather } from "@expo/vector-icons";
const dummyData = [
  "This good",
  "Hypertension",
  "suger",
  "Blood",
  "Erectyle Dysfunction",
  "Fig",
  "Grape",
  "Honeydew",
];
const SearchInput = ({placeholder}) => {
  const [suggestion, setSuggestion] = useState(null);
  const fetchSuggestion = (text) => {
    if (text.length < 3) return;
    const suggArr = dummyData.filter((item) => {
      return item.toLowerCase().startsWith(text.toLowerCase());
    });
    if (suggArr.length > 0) setSuggestion(suggArr);
  };
  return (
    <View className="my-4">
      <Text className="text-xl text-black font-bold mx-5">Existing Disease</Text>
      <View className="mx-4 px-4 border-b border-gray-600 rounded-lg flex-row items-center justify-between">
        <TextInput
          placeholder={placeholder?placeholder:"Search"}
          className="py-3  text-black text-xl "
          onChangeText={(text) => {
            fetchSuggestion(text);
          }}
        />
        <Feather name="search" size={30} />
      </View>
      {suggestion && <ScrollView className="mx-5 pb-4 pt-2 border border-t-0 absolute z-10 w-10/12 top-12 h-auto max-h-40 bg-white">
        {suggestion.map((item, idx) => (
          <React.Fragment key={item}>
            <Text className="text-xl my-4">{item}</Text>
            <Hr />
          </React.Fragment>
        ))}
      </ScrollView>}
    </View>
  );
};

export default SearchInput;
