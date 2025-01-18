import { StyleSheet, View } from "react-native"
import { useThemeColors } from "../hooks/useThemeColor"

/**
 * 
 * @param {Object} props 
 * @param {boolean} props.checked - Cocher
 * @returns 
 */
export function Radio(props) {
    const { checked } = props
    const colors = useThemeColors()

    return (
        <View
            style={[
                styles.radio,
                { borderColor: colors.tint }
            ]}
        >
            {checked && <View
                style={[
                    styles.radioInner,
                    { backgroundColor: colors.tint }
                ]}
            />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    radio: {
        height: 14,
        width: 14,
        aspectRatio: 1/1,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    radioInner: {
        borderRadius: 6,
        width: 6,
        height: 6,
        aspectRatio: 1/1
    }
})