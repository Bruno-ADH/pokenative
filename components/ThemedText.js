import { StyleSheet, Text } from "react-native";
import { useThemeColors } from "../hooks/useThemeColor";

/**
 * @param {Object} Props - L'objet Texte
 * @param {string} Props.variant - Un variant 
 * @param {string} Props.color - Couleur du texte 
 */
export function ThemedText(Props) {
    const { variant, color, ...rest } = Props;
    const colors = useThemeColors() ?? {}

    return <Text style={[styles[variant ?? 'body3'],{color: colors[color ?? "grayWhite"]}]} {...rest}/>
}

const styles = StyleSheet.create({
    body3: {
        fontSize: 10,
        lineHeight: 16,
    },
    body1: {
        fontSize: 14,
        lineHeight: 16,
    },
    body2: {
        fontSize: 12,
        lineHeight: 16,
    },
    caption: {
        fontSize: 8,
        lineHeight: 12,
    },
    headline: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold"
    },
    subtitle3: {
        fontSize: 10,
        lineHeight: 16,
        fontWeight: "bold"
    },
    subtitle1: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "bold"
    },
    subtitle2: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "bold"
    },
})