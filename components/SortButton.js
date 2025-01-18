import { Dimensions, Modal, Pressable, StyleSheet, Text, View } from "react-native"
import { useThemeColors } from "../hooks/useThemeColor"
import Tag from "@/assets/images/tag.svg"
import Alpha from "@/assets/images/text_format.svg"
import { useRef, useState } from "react"
import { ThemedText } from "./ThemedText"
import { Card } from "./Card"
import { Row } from "./Row"
import { Radio } from "./Radio"
import { Shadows } from "../constants/Shadow"

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
    const [isModalVisible, setModaleVisible] = useState(false)
    const buttonRef = useRef(null)
    const [position, setPosition] = useState(null)

    const onButtonPress = () => {
        buttonRef.current?.measureInWindow((x, y, width, height) => {
            setPosition({
                top: y + height,
                right: Dimensions.get("window").width - x - width
            })
            setModaleVisible(true)
        })
    }

    console.log('position :>> ', position);

    const onClose = () => {
        setModaleVisible(false)
    }

    const options = [
        { label: "Number", value: "id" },
        { label: "Name", value: "name" }
    ]

    return (
        <>
            <Pressable onPress={onButtonPress}>
                <View
                    ref={buttonRef}
                    style={[styles.button, { backgroundColor: colors.grayWhite }]}
                >
                    {value === "id" ? <Tag /> : <Alpha />}
                </View>
            </Pressable>
            <Modal
                animationType="fade"
                transparent
                visible={isModalVisible}
                onRequestClose={onClose}
            >
                <Pressable style={styles.backdrop} onPress={onClose} />
                <View style={[styles.popup, { backgroundColor: colors.tint, ...position }]}>
                    <ThemedText
                        style={styles.title}
                        variant="subtitle2"
                        color="grayWhite"
                    >
                        Sort by:
                    </ThemedText>
                    <Card style={styles.card}>
                        {options.map((o) => (
                            <Pressable key={"press"+o.value} onPress={() => onChange(o.value)}>
                                <Row key={o.value} gap={8}>
                                    <Radio checked={o.value === value} />
                                    <ThemedText variant="body3" color="grayDark">{o.label}</ThemedText>
                                </Row>
                            </Pressable>
                        ))}
                    </Card>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 32,
        width: 32,
        aspectRatio: 1 / 1,
        borderRadius: 16,
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
    },

    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.3)"
    },

    popup: {
        padding: 4,
        paddingTop: 16,
        gap: 16,
        borderRadius: 16,
        position: "absolute",
        width: 113,
        ...Shadows.dp2
    },

    title: {
        paddingLeft: 20
    },

    card: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        gap: 16,
        boxShadow: "0px 0px 2px #000000 inset",
    }
})