import { Pressable, StyleSheet, View } from "react-native"
import { useThemeColors } from "../hooks/useThemeColor"
import Tag from "@/assets/images/tag.svg"
import Alpha from "@/assets/images/text_format.svg"

/**
 * 
 * @param {Object} props 
 * @param {string} props.value 
 * @param {function} props.function
 * @returns 
 */
export function SortButton(props) {
    const { value, onChange } = props
    const colors = useThemeColors()

    const onButtonPress = () => {

    }

    return (
        <Pressable onPress={onButtonPress}>
            <View style={[styles.button, { backgroundColor: colors.grayWhite }]}>
                {value === "id" ? <Tag /> : <Alpha />}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 32,
        width: 32,
        aspectRatio: 1/1,
        borderRadius: 16,
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
    }
})