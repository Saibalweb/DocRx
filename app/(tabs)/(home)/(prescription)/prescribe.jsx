import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState, useCallback } from "react";
import {useLocalSearchParams} from 'expo-router';
import MIdBtn from "../../../../components/Prescription/MIdBtn";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { get, post } from "../../../../utils/requestBuilder";
import SearchInput from "../../../../components/SearchInput";
import { Feather, Fontisto } from "@expo/vector-icons";
import CustomInput from "../../../../components/CustomInput";
import AuthBtn from "../../../../components/AuthBtn";
import MedicineDetailsModal from "../../../../components/Prescription/MedicineDetailsModal";
import { useSelector } from "react-redux";
import Toast from "react-native-simple-toast";
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

const MedicineList = ({ item, index, onPressDelete }) => {;
  return (
    <View className="flex-row justify-between items-center  mx-4 my-2 py-6 px-2 bg-secondary border-primary border-2 rounded-lg">
      <View className="flex-row w-2/3 items-center">
        <Fontisto name="tablets" size={30} color={"black"} />
        <View>
        <Text className="text-2xl ml-2">{item?.medicineName || "Paracetamol 600mg"}</Text>
        <Text className="ml-2 mt-2 text-lg">{item?.frequency} |{item?.timing} | {item?.duration}</Text>
        </View>
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
  const token = useSelector((state) => state.auth.token);
  const dispensaryAddress = useSelector((state) => state.user.dispensaryAddress);
  const  item  = useLocalSearchParams();
  const [arr, setArr] = useState(null);
  const [suggestion, setSuggestion] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [curMedicine,setCurMedicine] = useState(null);
  const [medicineModalVisible,setMedicineModalVisible] = useState(false);
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
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
    setCurMedicine(selectedItem);
    setMedicineModalVisible(true);
    setShowSuggestion(false);
    setSuggestion(null);
    inputRef.current.blur();
    inputRef.current.clear();
  };
  const addMedineHandler = (data) => {
    setArr((prevArr) =>
      prevArr ? [...prevArr, data] : [data]
    );
    setMedicineModalVisible(false);
  }
  const onPressDeleteMedicine = (index) => {
    setArr((prevArr) => {
      const newArr = prevArr.filter((item, idx) => idx !== index);
      return newArr;
    });
  }
  const createPrescription = async() => {
    setIsLoading(true);
    let medicalHistory;
    if(item?.medicalHistory){
     medicalHistory = JSON.parse(item?.medicalHistory);
    }
    const prescriptionBody= JSON.stringify({
      patientDetails:{
        name:item?.name,
        age:item?.age,
        weight:item?.weight || "",
        mobile:item?.mobile  || "",
        gender:item?.gender || "",
        medicalHistory:medicalHistory || {},
      },
      prescribePatient:{
        medicinePrescribed:arr,
        doctorChamberAddress:dispensaryAddress[0]?._id,
      }
    });
    console.log(prescriptionBody);
    const createPrescriptionUrl = `${process.env.EXPO_PUBLIC_API_URL}/api/v1/prescription/create`;
    const res = await post(createPrescriptionUrl,prescriptionBody,token,'json');
    if(res?.statusCode===202){
      console.log(res)
      Toast.show("Prescription Created Successfully!",Toast.LONG);
      setIsLoading(false);
    }else{  
      Toast.show("Failed to create Prescription!",Toast.LONG);
      setIsLoading(false);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MedicineDetailsModal 
      modalVisible={medicineModalVisible}
      medicine={curMedicine}
      onPressAdd={addMedineHandler}
      onPressClose={()=>setMedicineModalVisible(false)}
      />
      <ScrollView
        className="w-full h-full bg-white"
        keyboardShouldPersistTaps="always"
        nestedScrollEnabled
      > 
      <View>


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
              item={item}
              index={index}
              onPressDelete={onPressDeleteMedicine}
              key={index}
            />
          ))}
      </View>
      <AuthBtn title={'Create Prescription'}
       onPress={createPrescription}
       isLoading={isLoading}
       />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Prescribe;
