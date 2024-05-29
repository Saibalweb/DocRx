import { Link } from 'expo-router';
import { StyleSheet, Image, Platform,View,Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaProvider className="flex-1">

    <View className='flex-1 bg-slate-600 justify-center items-center'>
        <Text className='text-lg text-red-600'>This is profile section</Text>
        <Link href="/" className='text-black'>Go to login</Link>
    </View>
    </SafeAreaProvider>
  );
}
