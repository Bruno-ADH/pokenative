import { Image, Pressable, StyleSheet, View } from "react-native"
import { Card } from "../Card"
import { ThemedText } from "../ThemedText"
import { useThemeColors } from "../../hooks/useThemeColor"
import { Link } from "expo-router"
import { getPokemonArtwork } from "../../functions/pokemon"

/**
 * @param {Object} Props 
 * @param {import("react-native").ViewStyle} style -le style du pokemon card
 * @param {number} id -l'id du pokemon
 * @param {string} name -le nom du pokemon
 */
export function PokemonCard(Props) {
    const { style = {}, id, name } = Props
    const colors = useThemeColors()

    return (<Link href={{ pathname: "/pokemon/[id]", params: { id: id } }} asChild>
        <Pressable android_ripple={{color: colors.tint, foreground: true}} style={style}>
            <Card style={[styles.card]}>
                <ThemedText variant="caption" color="grayMedium" style={styles.id}>#{id?.toString()?.padStart(3, '0')}</ThemedText>
                <Image
                    source={{ uri: getPokemonArtwork(id) }}         
                    style={{
                        width: 72, 
                        height: 72
                    }}
                />
                <ThemedText variant="body3" color="grayDark">{name}</ThemedText>
                <View style={[styles.shadow, { backgroundColor: colors.grayBackground }]} />
            </Card>
        </Pressable>
    </Link>)
}

const styles = StyleSheet.create({
    card: {
        position: "relative",
        alignItems: "center",
        padding: 4,
    },
    id: {
        alignSelf: "flex-end",
    },
    shadow: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 44,
        borderRadius: 7,
        zIndex: -1
    }
})