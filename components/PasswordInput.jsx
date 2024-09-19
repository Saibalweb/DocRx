import { View, Text, TextInput,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const PasswordInput = ({ required, title, style, numeric, maxLength }) => {
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const [invalidPassword,setInValidPassword] = useState(false);
    const onEyePress =()=>{
        setShowPassword((prevState)=>{
            return !prevState;
        })
    }
    const passwordhandler = (text)=>{
        let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        let invalid = regex.test(text);
        setPassword(text);
        setInValidPassword(!invalid);
        if(text.length==0){
            setInValidPassword(false);
        }
    }
  return (
    <View className="mx-5 my-3 " style={style}>
      <View className="flex-row">
        <Text className="text-lg mr-1 font-semibold">{title}</Text>
        {required && <Text className="text-red-600 text-lg">*</Text>}
      </View>
      <View className={`flex-row border-b ${invalidPassword?"border-red-600":"border-gray-600"} `}>
        <TextInput
          className="py-3 px-5  text-black text-xl w-11/12"
          cursorColor={"#37B6E9"}
          keyboardType={numeric ? "numeric" : "default"}
          maxLength={maxLength ? maxLength : 200}
          secureTextEntry={!showPassword}
          onChangeText={passwordhandler}
        />
        <TouchableOpacity onPress={onEyePress} >
            <FontAwesome name={showPassword?"eye":"eye-slash"} size={30} />
        </TouchableOpacity>
      </View>
       { invalidPassword && <Text className="text-right text-red-600">Please Enter Valid Password!</Text>}
    </View>
  );
};

export default PasswordInput;
