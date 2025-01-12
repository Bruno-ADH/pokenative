import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import Constants from 'expo-constants';
import { API_URL, APP_ENV } from '@env';

export default function Pokemon () {
    const params = useLocalSearchParams()
    return (
        <View>
            <Text>A propos:  {params?.id}</Text>
        </View>
    )
}