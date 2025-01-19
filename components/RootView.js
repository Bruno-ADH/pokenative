import { StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useThemeColors } from "../hooks/useThemeColor"
import Animated, {Easing, interpolateColor, ReduceMotion, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { useEffect } from "react"


/**
 * 
 * @param {import("react-native").ViewProps & {
 * backgroundColor: string
 * }} props 
 */
export function RootView (props) { 
    const {style = {}, backgroundColor, ...rest} = props
    const colors = useThemeColors()
    const progress = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
          backgroundColor: interpolateColor(
            progress.value,
            [0, 1],
            [colors.tint, backgroundColor ?? colors.tint]
          ),
        };
      }, [backgroundColor]);

      useEffect(()=>{
       if (backgroundColor) {
        progress.value = 0;
        progress.value = withTiming(1, {
            duration: 700,
            easing: Easing.out(Easing.quad),
            reduceMotion: ReduceMotion.System,
          })
       }
      },[backgroundColor])


    if(!backgroundColor) {
        return <SafeAreaView style={[rootStyle.container, { backgroundColor: colors?.tint }, style]} {...rest} />
    }
    return <Animated.View style={[{flex: 1}, animatedStyle, style ]}>
        <SafeAreaView style={rootStyle.container}  {...rest}/>
    </Animated.View>
 }

 const rootStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
    },
 })