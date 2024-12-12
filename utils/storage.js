import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
async function storeToken(name,token) {
    try {
       res =  await SecureStore.setItemAsync(name,token);
       const storedvalue = await SecureStore.getItemAsync(name);
       if(storedvalue){
        return true;
       }else{
        return false;
       }
    } catch (error) {
        console.log(error)
    }
}
async function getToken(name) {
    try {
        const token = await SecureStore.getItemAsync(name);
        return token;
    } catch (error) {
        console.log(error)
    }
}
async function removeToken(name) {
    try {
       const res =  await SecureStore.deleteItemAsync(name);
       return res;
    } catch (error) {
        console.log(error);
    }
}
async function storeUserData(name,data) {
    try {
        const res = await AsyncStorage.setItem(name, JSON.stringify(data));
        const storedData = await AsyncStorage.getItem(name);
        if(storedData){
            return true;
        }else{
            return false
        }
    } catch (error) {
        console.log(error);
    }
}
async function getUserData(name) {
    try {
        const value = await AsyncStorage.getItem(name);
        return value!=null ? JSON.parse(value):null;
    } catch (error) {
        
    }
}
async function removeUserData(name) {
    try {
        const res = await AsyncStorage.removeItem(name);
        return res;
    } catch (error) {
        console.log(error);
    }
}
export {storeToken,getToken,removeToken,storeUserData,getUserData,removeUserData}