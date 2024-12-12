import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRootNavigationState, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { getToken, getUserData, storeToken, storeUserData } from "../utils/storage";
import { refresh_token, user_data } from "../constants/storage_name";
import { post } from "../utils/requestBuilder";
import { addUser, logout,login } from "../store";
const index = () => {
  const isLoggedin = useSelector(state=>state.auth.isLoggedin);
  const isLoading = useSelector(state=>state.auth.isLoading);
  const dispatch= useDispatch();
  useEffect(()=>{
    const fetchToken = async ()=>{
      const token = await getToken(refresh_token);
      const userData = await getUserData(user_data);
      if(token){
        const refreshTokenUrl = 'http://192.168.0.197:6000/api/v1/doctor/refresh-token';
        const body = JSON.stringify({
          refreshToken:token
        });
        const res = await post(refreshTokenUrl,body,"",'json');
        if(res?.statusCode===200){
          const accessToken = res?.data?.accessToken;
          const refreshToken = res?.data?.refreshToken;
          const userData = res?.data?.user;
          const savedToken = await storeToken(refresh_token,refreshToken);
          const savedUserData = await storeUserData(user_data,userData);
          if(savedToken && savedUserData){
            dispatch(login({
              _id:userData?._id,
              name:userData?.name,
              email:userData?.email,
              token:accessToken
            }));
            dispatch(addUser({user:userData}))
          }else{
            dispatch(logout());
          }

        }else{
          dispatch(logout());
        }
      }else{
        dispatch(logout());
      }
    }
    fetchToken();
  },[])
  if(!isLoading && !isLoggedin) return(
    <Redirect href={"/login"}/>
  )
  if(!isLoading && isLoggedin) return(
    <Redirect href={'/home'}/>
  )
  if(isLoading) return (
      <SafeAreaView>
        <StatusBar backgroundColor={Colors.secondary} />
        <View>
          <Text className="text-3xl text-black">This is home route which ds'fgksdop will be splash Screen</Text>
        </View>
      </SafeAreaView>
  );
};

export default index;
