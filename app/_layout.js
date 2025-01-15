import react, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router';
import HomeIcon from "@/assets/home.svg";
import home from "../assets/icon.png";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

SplashScreen.preventAutoHideAsync();

const queyClient = new QueryClient()

export default function RootLayout() {
  const [loaded] = useFonts({
    'RobotoRegular': require('../assets/fonts/Roboto-Regular.ttf'),
    'RobotoMedium': require('../assets/fonts/Roboto-Medium.ttf'),
    'RobotoLight': require('../assets/fonts/Roboto-Light.ttf'),
    'RobotoThin': require('../assets/fonts/Roboto-Thin.ttf'),
    'RobotoBold': require('../assets/fonts/Roboto-Bold.ttf'),
});

useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; 
  }

  return (
    <QueryClientProvider client={queyClient}>
      <SafeAreaProvider>
      <StatusBar style="auto"/>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />
    </SafeAreaProvider>
    </QueryClientProvider>
  );
}
