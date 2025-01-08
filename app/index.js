import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenue sur la page d'accueil!</Text>
      <Link href="/login" asChild>
        <Button title="Se connecter" />
      </Link>
    </View>
  );
}
