import { StyleSheet, View } from "react-native"
import { Colors } from "../../constants/Colors"
import { ThemedText } from "../ThemedText"
/**
 * @param {Object} props 
 * @param {keyof (typeof Colors)["type"]} props.name 
 */
export function PokemonType(props) {
    const { name } = props

    return <View
        style={[
            rootStyle.caps,
        { backgroundColor: Colors?.type[name] }
        ]}
    >
        <ThemedText
            color="grayWhite"
            variant="subtitle3"
            style={{ textTransform: "capitalize" }}
        >
            {name}
        </ThemedText>
    </View>
}

const rootStyle = StyleSheet.create({
    caps: {
        height: 20,
        borderRadius: 8,
        paddingHorizontal: 8,
        alignItems: "center",
        justifyContent: "center"
    }
})