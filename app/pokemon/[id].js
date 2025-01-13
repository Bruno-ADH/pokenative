import React from 'react';
import { useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';
import Constants from 'expo-constants';
import { API_URL, APP_ENV } from '@env';

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);


export default function Pokemon() {
    const params = useLocalSearchParams()

    const sv = useSharedValue(0);

    React.useEffect(() => {
        sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${sv.value * 360}deg` }],
    }));


    return (
        <View style={styles.container}>
            <Text>A propos:  {params?.id}</Text>
            <Animated.View style={[styles.box, animatedStyle]} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    box: {
        height: 120,
        width: 120,
        backgroundColor: '#b58df1',
        borderRadius: 20,
    },
});