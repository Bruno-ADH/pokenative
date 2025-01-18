import { StyleSheet, Text } from "react-native";
import { useThemeColors } from "../hooks/useThemeColor";

/**
 * @param {Object} Props - L'objet Texte
 * @param {string} Props.variant - le font family, size
 * @param {string} Props.color - le nom de la couleur du texte 
 */
export function ThemedText(Props) {
    const { variant, color, style, ...rest } = Props;
    const colors = useThemeColors() ?? {}

    return <Text style={[styles[variant ?? 'body3'],{color: colors[color ?? "grayWhite"]}, style]} {...rest}/>
}

const styles = StyleSheet.create({
    body3: {
        fontFamily: "RobotoRegular",
        fontSize: 10,
        lineHeight: 16,
    },
    body1: {
        fontFamily: "RobotoRegular",
        fontSize: 14,
        lineHeight: 16,
    },
    body2: {
        fontFamily: "RobotoRegular",
        fontSize: 12,
        lineHeight: 16,
    },
    caption: {
        fontFamily: "RobotoRegular",
        fontSize: 8,
        lineHeight: 12,
    },
    headline: {
        fontFamily: "RobotoBold",
        fontSize: 24,
        lineHeight: 32,
    },
    subtitle3: {
        fontFamily: "RobotoBold",
        fontSize: 10,
        lineHeight: 16,
    },
    subtitle1: {
        fontFamily: "RobotoBold",
        fontSize: 14,
        lineHeight: 16,
    },
    subtitle2: {
        fontFamily: "RobotoBold",
        fontSize: 12,
        lineHeight: 16,
    },
})