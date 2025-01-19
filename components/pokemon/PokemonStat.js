import { StyleSheet, View } from "react-native"
import { Row } from "../Row"
import { ThemedText } from "../ThemedText"
import { useThemeColors } from "../../hooks/useThemeColor";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { useEffect } from "react";

/**
 * 
 * @param {string} name 
 * @returns {string}
 */
function statShortName(name) {
    return name
        .replaceAll("special", "S")
        .replaceAll("-", "")
        .replaceAll("attack", "ATK")
        .replaceAll("defense", "DEF")
        .replaceAll("speed", "SPD")
        .toUpperCase()
}

/**
 * 
 * @param {import("react-native").ViewProps & {
 * color: string,
 * name: string,
 * value: number
 * }} props 
 * @returns {import("react").ReactNode}
 */
export function PokemonStat(props) {
    const { style, color, name, value, ...rest } = props
    const colors = useThemeColors()
    const sharedValue = useSharedValue(value)
    const barInnerStyle = useAnimatedStyle(() => {
        return {
            flex: sharedValue.value
        }
    })

    const barBackgroundStyle = useAnimatedStyle(() => {
        return {
            flex: 255 - sharedValue.value
        }
    })

    useEffect(() => {
        sharedValue.value = withSpring(value)
    }, [value])

    return (<Row gap={8} style={[style, styles.roo]} {...rest}>
        <View style={[styles.name, { borderRightColor: colors.grayLight }]}>
            <ThemedText
                variant="subtitle3"
                style={{ color: color }}
            >
                {statShortName(name)}
            </ThemedText>
        </View>
        <View style={styles.number}>
            <ThemedText color="grayDark">
                {value.toString().padStart(3, "0")}
            </ThemedText>
        </View>
        <Row style={styles.bar}>
            <Animated.View style={[styles.barInner, { backgroundColor: color }, barInnerStyle]} />
            <Animated.View style={[styles.barBackground, { backgroundColor: color + "24" }, barBackgroundStyle]} />
        </Row>
    </Row>)
}

const styles = StyleSheet.create({
    root: {

    },
    name: {
        width: 40,
        paddingRight: 8,
        borderStyle: "solid",
        borderRightWidth: 1
    },
    number: {
        width: 23
    },
    bar: {
        flex: 1,
        height: 4,
        borderRadius: 4,
        overflow: "hidden"
    },
    barInner: {
        height: 4,
    },
    barBackground: {
        height: 4,
    }
})