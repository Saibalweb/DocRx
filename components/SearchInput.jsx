import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
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
  const {name} = item;
  return (
    <TouchableOpacity onPress={() => onPress(index)}>
      <View className="flex-row items-center ml-4 py-2">
        <Fontisto name="tablets" size={20} />
        <Text className="text-2xl my-4 ml-4 text-primary">{name}</Text>
      </View>
      <Hr />
    </TouchableOpacity>
  );
};
const SearchInput = ({
  placeholder,
  title,
  searchIcon,
  onPressSugestion,
  onChangeText,
  onFocus,
  onBlur,
  suggestion,
  showSuggestion,
  inputRef,
}) => {
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
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
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
              key={item._id}
              index={idx}
              onPress={onPressSugestion}
            />
          ))}
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default SearchInput;
