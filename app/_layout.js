import { Stack, useRouter } from 'expo-router';
import HomeIcon from "@/assets/home.svg";
import home from "../assets/icon.png";
import { TouchableOpacity } from "react-native"; 

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  );
}
