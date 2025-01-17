import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useCallback } from "react";
import MIdBtn from "../../../../components/Prescription/MIdBtn";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { get } from "../../../../utils/requestBuilder";
import SearchInput from "../../../../components/SearchInput";
import { Feather, Fontisto } from "@expo/vector-icons";
import CustomInput from "../../../../components/CustomInput";
import AuthBtn from "../../../../components/AuthBtn";
const { width, height } = Dimensions.get("window");
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const MedicineList = ({ item, index, onPressDelete }) => {
  return (
    <View className="flex-row justify-between items-center  mx-4 my-2 py-6 px-2 bg-secondary border-primary border-2 rounded-lg">
      <View className="flex-row w-2/3 items-center">
        <Fontisto name="tablets" size={30} color={"black"} />
        <Text className="text-2xl ml-2">{item || "Paracetamol 600mg"}</Text>
      </View>
      <View className="flex-row items-center">
        <TouchableOpacity className="mx-2">
          <Feather name="edit" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          className="mx-2"
          onPress={() => onPressDelete(index)}
        >
          <Feather name="trash-2" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Prescribe = () => {
  const [arr, setArr] = useState(null);
  const [suggestion, setSuggestion] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const inputRef = useRef(null);
  async function fetchSuggestion(text) {
    if (text.length < 3) return;
    const fetchMedicineUrl = `http://192.168.0.197:6000/api/v1/medicine/search?str=${text}`;
    const res = await get(fetchMedicineUrl);
    if (res?.statusCode === 202) {
      const data = res?.data;
      if (data.length > 0) {
        setSuggestion(data);
        setShowSuggestion(true);
      } else {
        setSuggestion(null);
        setShowSuggestion(false);
      }
    }
  }
  const debouncedFetchSuggetion = useCallback(
    debounce(fetchSuggestion, 500),
    []
  );
  const handleSearchInput = async (text) => {
    if (text.length < 3) {
      debouncedFetchSuggetion(text); // this is for cancelling the previous fetching while fastly clearing the textInput:
      setShowSuggestion(false);
      setSuggestion(null);
      return;
    }
    debouncedFetchSuggetion(text);
  };
  const handleSuggestionPress = (index) => {
    const selectedItem = suggestion[index];
    setShowSuggestion(false);
    setSuggestion(null);
    inputRef.current.blur();
    inputRef.current.clear();
    setArr((prevArr) =>
      prevArr ? [...prevArr, selectedItem] : [selectedItem]
    );
  };
  const onPressDeleteMedicine = (index) => {
    setArr((prevArr) => {
      const newArr = prevArr.filter((item, idx) => idx !== index);
      return newArr;
    });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        className="w-full h-full bg-white"
        keyboardShouldPersistTaps="always"
        nestedScrollEnabled
      > 
      {/* <View>


        <SearchInput
          title={"Add Medicine"}
          searchIcon={false}
          onPressSugestion={handleSuggestionPress}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          onChangeText={handleSearchInput}
          inputRef={inputRef}
          suggestion={suggestion}
          showSuggestion={showSuggestion}
        />
        {arr &&
          arr.map((item, index) => (
            <MedicineList
              item={item?.name}
              index={index}
              onPressDelete={onPressDeleteMedicine}
            />
          ))}
      </View> */}
      <View className="p-1 py-6 m-4 bg-secondary rounded-lg border">
        <Text className="text-primary text-center text-2xl ml-4 font-bold">Medicine Details</Text>
        <CustomInput title={"Medicine Name"} value={'Paracetamol 600mg'} required editable={false} />
        <CustomInput title={"Frequency"} placeholder={'eg- 1-0-1'} required />
        <CustomInput title={"Timing"} placeholder={'eg - a/m b/m'} required  />
        <CustomInput title={"Duration"} placeholder={'eg - 1week'} required  />
        <AuthBtn title={'Add'}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Prescribe;
