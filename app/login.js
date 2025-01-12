import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useRouter, Link } from 'expo-router';

export default function LoginPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{elevation: 8 , padding: 12, backgroundColor: "#F0F0F000"}}>Page de Connexion</Text>
      <Button title="Retour à l'accueil" onPress={() => router.push('/')} />
      <Button title="Retour à l'accueil2" onPress={() => router.back()} />
      <TouchableOpacity
        onPress={() => {
          console.log('Bouton back cliqué !');
          router.back();
        }}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'red',
        }}
      >
        <Text style={{ color: 'white'}}>Retour</Text>
      </TouchableOpacity>
      <Link href="/" style={{
        backgroundColor:"pink",
        padding: 5,
      }}>Retour sur index</Link>
      <Link href={{pathname: "/pokemon/[id]", params: {id: 3}}} style={{
        backgroundColor:"#5CEE9DFF",
        padding: 5,
      }}>Allons sur un pokemon</Link>
      <TouchableOpacity
        onPress={() => {
          router.replace({pathname: "/pokemon/[id]", params: {id: 7}});
        }}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'red',
        }}
      >
        <Text style={{ color: 'white'}}>Sur pokemon avec router</Text>
      </TouchableOpacity>
    </View>
  );
}
