import react, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


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
    return <StatusBar style="auto" backgroundColor='transparent'/>; 
  }

  return (
    <QueryClientProvider client={queyClient}>
      <SafeAreaProvider>
      <StatusBar style="auto"/>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='about'
          options={{
            headerShown: true,
            header: (props) => <SafeAreaView style={{
              backgroundColor: "transparent",
            }}>
              <StatusBar style="auto" backgroundColor="blue"/>
              <View style={{
                backgroundColor: "blue",
                width: "100%",
                paddingVertical: 14,
                paddingHorizontal: 6,
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24
              }}>
                <Text>rrrrrrr</Text>
              </View>
            </SafeAreaView>
          }}
        />
      </Stack>
    </SafeAreaProvider>
    </QueryClientProvider>
  );
}
