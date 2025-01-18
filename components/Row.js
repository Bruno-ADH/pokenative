import { StyleSheet, View } from "react-native"

/**
 * 
 * @param {Object} props 
 * @param {import("react-native").ViewStyle} props.style 
 * @param {import("react-native").ViewStyle<{gap}>} props.gap
 * @returns {import("react").ReactNode}
 */
export function Row(props) {
    const {style, gap, ...rest} = props

    return (<View style={[styles.rowStyle, style, gap ? {gap : gap} : undefined]} {...rest}>

    </View>)
}

const styles = StyleSheet.create({
    rowStyle: {
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
    }
})