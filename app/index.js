import { Link, useRouter } from 'expo-router';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import HomeIcon from "@/assets/home.svg";
import home from "@/assets/icon.png";

const { width } = Dimensions.get('window');

export default function HomePage() {
  const router = useRouter()

  const handlePress = () => {
    router.push("/login")
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenue sur la page d'accueil!</Text>
      <Image
        source={home}
        style={{ width: width * 0.5, height: width * 0.5 }}
      />
       <HomeIcon width={32} height={32} fill="blue" />
      <TouchableOpacity style={styles.touch} onPress={handlePress}>
        <Text>Se connecter</Text>
      </TouchableOpacity>
      <Link href="/login" asChild>
        <Button title="Se connecter" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  touch: {
    marginVertical: 40,
    backgroundColor: "#FAFCA8FF",
    padding: 15,
    elevation: 30,
    shadowColor: "#221E1AFF",
    shadowOpacity: 0.1,
    shadowRadius:5,
    shadowOffset: {width: 0, height: 11}
  }
})