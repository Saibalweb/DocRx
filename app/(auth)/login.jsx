import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import MIdBtn from "../../components/Prescription/MIdBtn";
import { Link, Redirect, router } from "expo-router";
import PasswordInput from "../../components/PasswordInput";
import EmailInput from "../../components/EmailInput";
import { email_regex, password_regex } from "../../constants/regex";
import AuthBtn from "../../components/AuthBtn";
import { post } from "../../utils/requestBuilder";
import { storeToken, storeUserData } from "../../utils/storage";
import { refresh_token, user_data } from "../../constants/storage_name";
import {login,addUser} from '../../store'

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const disableLoginBtn = ()=>{
    if(validEmail && validPassword){
      if(!email && !password){
        return true;
      }else {
        return false;
      }
    }else{
      return true;
    }
  }

  const passwordhandler = (text) => {
    let regex = password_regex;
    let valid = regex.test(text);
    setPassword(text);
    if (text.length == 0) {
      return setValidPassword(true);
    }
    setValidPassword(valid);
  };
  const emailHandler = (text) => {
    const regex = email_regex;
    const valid = regex.test(text);
    setEmail(text);
    if (text.length === 0) {
      setValidEmail(true);
    } else {
      setValidEmail(valid);
    }
  };
  const onLoginPress = async()=>{
    const loginUrl = "http://192.168.0.197:6000/api/v1/doctor/login";
    const body = JSON.stringify({
      email,
      password,
    });
    const res = await post(loginUrl, body);
    if(res?.statusCode===202){
      const refreshToken = res?.data?.refreshToken;
      const accessToken = res?.data?.accessToken;
      const userData = res?.data?.user;
      const token = await storeToken(refresh_token,refreshToken);
      const savedUser = await storeUserData(user_data,{
        _id:userData?._id,
        name:userData?.name,
        email:userData?.email,
        isCompleted:userData?.isCompleted,
        dispensaryAddress:userData?.dispensaryAddress,
        degree:userData?.degree,
        specialization:userData?.specialization,
        specialisation_degree:userData?.specialisation_degree,
        superSpecialisation:userData?.superSpecialisation,
        superSpecialisation_degree:userData?.superSpecialisation_degree,
        otherDetails:userData?.otherDetails,
      });
      dispatch(login({
        _id:userData?._id,
        name:userData?.name,
        email:userData?.email,
        token:accessToken
      }));
      dispatch(addUser({user:userData}));
      router.replace("/home");
    }
  }
  return (
    <SafeAreaView>
      <View className="felx-1  justify-center h-screen">
        <View className="h-2/3">
          <Text className="text-3xl text-accent font-bold my-5 text-center mb-10">
            Login to DocRx
          </Text>
          <View className="mb-10">
            <EmailInput
              title={"Email"}
              onChangeText={emailHandler}
              valid={validEmail}
            />
            <PasswordInput
              title={"Password"}
              onChangeText={passwordhandler}
              valid={validPassword}
            />
          </View>
          <AuthBtn title={"Log In"} disable={disableLoginBtn()} onPress={onLoginPress}/>
          <Link href={"/signup"} asChild>
            <TouchableOpacity href={"/signup"}>
              <Text className="text-center text-accent text-lg">
                Don't have any account? Sign Up
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
