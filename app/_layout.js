import { Stack, useRouter } from 'expo-router';
import HomeIcon from "@/assets/home.svg";
import home from "../assets/icon.png";
import { TouchableOpacity } from "react-native"; 

export default function Layout() {
  const router = useRouter(); 
  
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerTitle: 'Accueil', 
          headerBackVisible: true,
          headerBackImageSource: () => (
            <Image 
              source={home} 
              style={{ width: 24, height: 24 }} 
            />
          ),
          headerStyle: {
            backgroundColor: "#06ff3d"
          }
        }}
      />
      
      <Stack.Screen 
        name="login" 
        options={{ 
          headerTitle: 'Connexion',
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: "red"
              }}
              onPress={() => {
                console.log('Bouton back cliqué !'); // ✅ Vérification console
                router.back(); 
              }}
            >
              <HomeIcon width={24} height={24}/>
            </TouchableOpacity>
          ),
        }} 
      />
    </Stack>
  );
}
