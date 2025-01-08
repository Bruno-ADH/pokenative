import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page de Connexion</Text>
      <Button title="Retour à l'accueil" onPress={() => router.push('/')} />
    </View>
  );
}
