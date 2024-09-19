import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const EmailInput = ({required,title,style,numeric,maxLength}) => {
    const [validEmail,setValidEmail] = useState(true);
    const emailHandler = (text)=>{
        const  regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const valid = regex.test(text);
        console.log(valid);
        if(text.length ===0){
          setValidEmail(true);
        }else{
          setValidEmail(valid);
        }
    }
    return (
        <View className="mx-5 my-3 " style={style}>
            <View className="flex-row">
                <Text className="text-lg mr-1 font-semibold">{title}</Text>
                {required && <Text className="text-red-600 text-lg">*</Text>}
            </View>
          <TextInput
            className="py-3 px-5 border-b border-gray-600 text-black text-xl"
            cursorColor={"#37B6E9"}
            keyboardType={numeric? "numeric" : "default"}
            maxLength={maxLength?maxLength:200}
            onChangeText={emailHandler}
          />
          {!validEmail && <Text className="text-right text-red-600">Please Enter Valid Email!</Text>}
        </View>
      );
}

export default EmailInput
