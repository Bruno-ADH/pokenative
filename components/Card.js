import { StyleSheet, View } from "react-native";
import { Shadows } from "../constants/Shadow";
import { useThemeColors } from "../hooks/useThemeColor";

/**
 * @param {import("react-native").ViewProps} Props 
 * @returns {import("react").ReactNode}
 */
export function Card (Props) {
    const color = useThemeColors()
    const { style, ...rest } = Props
    return <View style={[styles, {backgroundColor: color.grayWhite}, style]} {...rest}/>
}

const styles = {
    borderRadius: 8,
    overflow: "hidden",
    ...Shadows.dp2,
}