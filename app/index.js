import react,{useEffect} from 'react';
import { Link, useRouter } from 'expo-router';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import HomeIcon from "@/assets/home.svg";
import home from "@/assets/icon.png";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../components/ThemedText'
import { useThemeColors } from '../hooks/useThemeColor';

export default function Index() {
  const router = useRouter()
  const color = useThemeColors()
  
  const handlePress = () => {
    router.push("/login")
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: color?.tint}]}>
      <ThemedText variant="headline" color="grayWhite">Pokédex</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})