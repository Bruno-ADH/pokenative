import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useThemeColors } from "../hooks/useThemeColor"


/**
 * 
 * @param {import("react-native").ViewProps} props 
 */
export function RootView (props) { 
    const {style, ...rest} = props
    const colors = useThemeColors()

    return <SafeAreaView style={[rootStyle.container, { backgroundColor: colors?.tint }]} {...rest} />
 }

 const rootStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
    },
 })