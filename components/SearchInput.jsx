import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState,useRef } from "react";
import Hr from "../components/Hr";
import { Feather, Fontisto } from "@expo/vector-icons";
const dummyData = [
  "This good",
  "Hypertension",
  "suger",
  "Blood",
  "Bloody figure tablet",
  "Bloody",
  "Bloody soulmate capsule Bloody soulmate capsule",
  "Erectyle Dysfunction",
  "Fig",
  "Grape",
  "Honeydew",
];
const SearchOption = ({ item, onPress, index }) => {
  return (
    <TouchableOpacity onPress={() => onPress(index)}>
      <View className="flex-row items-center ml-4 py-2">
        <Fontisto name="tablets" size={20} />
        <Text className="text-2xl my-4 ml-4">{item}</Text>
      </View>
      <Hr />
    </TouchableOpacity>
  );
};
const SearchInput = ({ placeholder, title, searchIcon, onPressSugestion }) => {
  const [suggestion, setSuggestion] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const inputRef = useRef(null);
  const fetchSuggestion = (text) => {
    if (text.length < 3) {
      setShowSuggestion(false);
      setSuggestion(null);
      return;
    }
    const suggArr = dummyData.filter((item) => {
      return item.toLowerCase().startsWith(text.toLowerCase());
    });
    if (suggArr.length > 0) {
      setSuggestion(suggArr);
      setShowSuggestion(true);
    } else {
      setSuggestion(null);
      setShowSuggestion(false);
    }
  };
  const handleSuggestionPress = (index) => {
    const selectedItem = suggestion[index];
    onPressSugestion(selectedItem);
    setShowSuggestion(false);
    setSuggestion(null);
    inputRef.current.blur();
    inputRef.current.clear();
  };
  return (
    <ScrollView
      className="my-4"
      keyboardShouldPersistTaps="always"
      nestedScrollEnabled
    >
      <Text className="text-xl text-black font-bold mx-5">
        {title || "Existing Disease"}
      </Text>
      <View
        className="mx-4 px-4 rounded-lg flex-row items-center justify-between"
        style={{ borderBottomWidth: 1 }}
      >
        <TextInput
          ref={inputRef}
          placeholder={placeholder ? placeholder : "Search"}
          className="py-3 text-black text-xl"
          style={{ width: "90%" }}
          onChangeText={(text) => {
            fetchSuggestion(text);
          }}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        {searchIcon && <Feather name="search" size={30} />}
      </View>
      {suggestion && showSuggestion && (
        <ScrollView
          className="mx-5 pb-4 pt-4 border border-t-0 rounded-b-lg top-22 h-auto max-h-[450] bg-slate-100"
          nestedScrollEnabled
          keyboardShouldPersistTaps="always"
        >
          {suggestion.map((item, idx) => (
            <SearchOption
              item={item}
              key={`${item}_${Math.random()}`}
              index={idx}
              onPress={handleSuggestionPress}
            />
          ))}
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default SearchInput;
