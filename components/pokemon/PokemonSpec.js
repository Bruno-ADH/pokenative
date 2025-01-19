import { StyleSheet, View } from "react-native"
import {ImageProps} from 'react-native'
import { Row } from "../Row"
import { Component } from "react"
import { ThemedText } from "../ThemedText"

/**
 * 
 * @param {import("react-native").ViewProps & {
 * title : string, 
 * description : string, 
 * Image : import("react").ReactNode}} props
 * @returns {import("react").ReactNode}
 */
export function PokemonSpec(props) {
    const {style, title="", Image, description="", ...rest} = props
    
    return <View style={[style, styles.root]} {...rest}>
        <Row style={styles.row}>
            {Image && Image}
            <ThemedText color="grayDark">{title}</ThemedText>
        </Row>
        <ThemedText variant="caption" color="grayMedium" style={{textTransform: "capitalize"}}>{description}</ThemedText>
    </View>
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        gap: 4,
        alignItems: "center",
        paddingHorizontal: 1,
    },
    
    row: {
        height: 32,
        alignItems: "center"
    }
})