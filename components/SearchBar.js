import { StyleSheet, TextInput } from "react-native"
import { Row } from "./Row"
import { useThemeColors } from "../hooks/useThemeColor"
import Search from '@/assets/images/search.svg'

/**
 * 
 * @param {Object} props
 * @param {string} props.value -le texte du champs
 * @param {function} props.onChange -fonction pour mettre a jour le texte
 */
export function SearchBar(props) {
    const { value, onChange } = props
    const colors = useThemeColors()

    return (
        <Row gap={8} style={[styles.wrapper, {backgroundColor: colors.grayWhite}]}>
        <Search/>
        <TextInput
            style={[styles.input, {color: colors.grayDark}]}
            selectionColor={colors.tint}
            value={value}
            onChangeText={onChange}
        />
    </Row>
    )
}

const styles= StyleSheet.create({
    wrapper: {
        flex: 1,
        borderRadius: 16,
        height: 32,
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        height: 16,
        lineHeight: 16,
        fontSize: 10,
        fontFamily: "RobotoRegular",
        padding: 0,
        borderWidth: 0,
    },
})