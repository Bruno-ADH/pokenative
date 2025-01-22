import React, { useRef, useState } from 'react';
import { Link, router, useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet, Pressable, Image, Platform } from "react-native";
import { RootView } from '../../components/RootView';
import { Row } from '../../components/Row';
import Back from "@/assets/images/arrow_back.svg"
import { ThemedText } from '../../components/ThemedText';
import { useFetchQuery } from '../../hooks/useFetchQuery';
import PokeBg from "@/assets/images/pokeball_bg.svg"
import { Colors } from '../../constants/Colors';
import { useThemeColors } from '../../hooks/useThemeColor';
import { basePokemonStats, formatSize, formatWeight, getPokemonArtwork } from '../../functions/pokemon';
import { Card } from '../../components/Card';
import { PokemonType } from '../../components/pokemon/PokemonType';
import { PokemonSpec } from '../../components/pokemon/PokemonSpec';
import Weight from "@/assets/images/weight.svg"
import Height from "@/assets/images/straighten.svg"
import { PokemonStat } from '../../components/pokemon/PokemonStat';
import { Audio } from 'expo-av';
import Prev from "@/assets/images/chevron_left.svg"
import Next from "@/assets/images/chevron_right.svg"
import PagerView from 'react-native-pager-view';


export default function Pokemon() {
    const params = useLocalSearchParams()
    const [id, setId] = useState(parseInt(params.id, 10))
    const offset = useRef(1)
    const pager = useRef(null)

    const onPageSelected = (e) => {
        console.log('e.nativeEvent.position :>> ', e.nativeEvent.position);
        offset.current = e.nativeEvent.position - 1;
    }

    const onPageScrollStateChanged = (e) => {
        console.log('e.nativeEvent.pageScrollState :>> ', e.nativeEvent.pageScrollState);

        if (e.nativeEvent.pageScrollState !== "idle") {
            return;
        }

        if (offset.current === -1 && id === 2 ){
            return;
        }

        if (offset.current === 1 && id === 150 ){
            return;
        }

        if(offset.current !== 0) {
            setId(id + offset.current)
            console.log('id + offset.current :>> ', id + offset.current);
            offset.current = 0;
            pager.current?.setPageWithoutAnimation(1)
        }
    }

    const onPrevious = () => {
        pager.current?.setPage(0)
    }

    const onNext = () => {
        pager.current?.setPage(2 + offset.current)
    }

    return (
        <PagerView
            ref={pager}
            onPageSelected={onPageSelected}
            onPageScrollStateChanged={onPageScrollStateChanged}
            initialPage={1}
            style={{ flex: 1 }}
        >
            <PokemonView key={id - 1} id={id - 1} onNext={onNext} onPrevious={onPrevious}/>
            <PokemonView key={id} id={id} onNext={onNext} onPrevious={onPrevious}/>
            <PokemonView key={id + 1} id={id + 1} onNext={onNext} onPrevious={onPrevious}/>
        </PagerView>)
}

function PokemonView({ id, onNext, onPrevious }) {
    const colors = useThemeColors()
    const { data: pokemon } = useFetchQuery("/pokemon/[id]", { id: id })
    const { data: species } = useFetchQuery("/pokemon-species/[id]", { id: id })
    const mainType = pokemon?.types?.[0].type.name
    const colorType = mainType ? Colors.type[mainType] : colors.tint
    const types = pokemon?.types ?? []
    const bio = species?.flavor_text_entries?.find(({ language }) => language.name === "en")?.flavor_text.replaceAll("\n", ". ");

    const stats = pokemon?.stats ?? basePokemonStats

    const onImagePress = async () => {
        const cry = pokemon?.cries?.latest
        if (!cry) {
            return;
        }
        const { sound } = await Audio.Sound.createAsync(
            { uri: cry },
            { shouldPlay: true }
        )
        sound.playAsync()
    }

    // const onPrevious = () => {
    //     router.replace({ pathname: "/pokemon/[id]", params: { id: Math.max(id - 1, 1) } })
    // }

    // const onNext = () => {
    //     router.replace({ pathname: "/pokemon/[id]", params: { id: Math.min(id + 1, 151) } })
    // }

    const isFirst = id === 1
    const isLast = id === 151

    console.log('mainType :>> ', mainType);
    console.log('colorType :>> ', colorType);

    console.table('pokemon table:>> ', pokemon);
    return (
        <RootView backgroundColor={colorType}>
            <View>
                <PokeBg style={styles.pokeball} />
                <Row style={styles.header}>
                    <Pressable onPress={router.back}>
                        <Row gap={8}>
                            <Back />
                            <ThemedText
                                variant="headline"
                                color="grayWhite"
                                style={styles.pokename}
                            >
                                {pokemon?.name}
                            </ThemedText>
                        </Row>
                    </Pressable>
                    <ThemedText
                        variant="subtitle2"
                        color="grayWhite"
                    >
                        #{id.toString().padStart(3, "0")}
                    </ThemedText>
                </Row>

                <Card style={[styles.card, { overflow: "visible" }]}>
                    <Row style={styles.imageRow}>
                        {isFirst ? (
                            <View style={{ width: 24, height: 24 }}></View>
                        ) : (
                            <Pressable onPress={onPrevious}>
                                <Prev />
                            </Pressable>
                        )}
                        <Pressable onPress={onImagePress}>
                            <Image
                                source={{ uri: getPokemonArtwork(id) }}
                                style={styles.artWork}
                            />
                        </Pressable>
                        {isLast ? (
                            <View style={{ width: 24, height: 24 }}></View>
                        ) : <Pressable onPress={onNext}>
                            <Next />
                        </Pressable>}
                    </Row>

                    <Row gap={16} style={{ height: 20 }}>
                        {types.map((t) => (
                            <PokemonType
                                key={t.type.name}
                                name={t.type.name}
                            />
                        ))}
                    </Row>

                    {/* About */}
                    <ThemedText
                        variant='subtitle1'
                        style={{ color: colorType }}
                    >
                        About
                    </ThemedText>
                    <Row>
                        <PokemonSpec
                            title={formatWeight(pokemon?.weight)}
                            description='Weight'
                            Image={<Weight />}
                            style={{
                                borderStyle: "solid",
                                borderRightColor: colors.grayLight,
                                borderRightWidth: 1
                            }}
                        />
                        <PokemonSpec
                            title={formatSize(pokemon?.height)}
                            description='Height'
                            Image={<Height />}
                            style={{
                                borderStyle: "solid",
                                borderRightColor: colors.grayLight,
                                borderRightWidth: 1
                            }}
                        />
                        <PokemonSpec
                            title={pokemon?.moves
                                .slice(0, 2)
                                .map((m) => m?.move?.name)
                                .join('\n')
                            }
                            description='Moves'
                        />
                    </Row>
                    <ThemedText color='grayDark' style={{ textTransform: "capitalize" }}>{bio}</ThemedText>

                    {/* Stats */}
                    <ThemedText
                        variant='subtitle1'
                        style={{ color: colorType }}
                    >
                        Base stats
                    </ThemedText>
                    <View style={{ alignSelf: "stretch" }}>
                        {stats.map((s) => (
                            <React.Fragment key={s?.stat?.name + "text"}>
                                <PokemonStat
                                    key={s?.stat?.name}
                                    name={s?.stat?.name}
                                    value={s?.base_stat}
                                    color={colorType}
                                />
                                {Platform.OS === "web" && <Text>{"\n"}</Text>}
                            </React.Fragment>)
                        )}
                    </View>
                </Card>
            </View>
        </RootView>

    )
}

const styles = StyleSheet.create({
    header: {
        margin: 20,
        justifyContent: "space-between",
    },
    pokename: {
        textTransform: "capitalize"
    },
    pokeball: {
        position: "absolute",
        right: 8,
        top: 8
    },
    imageRow: {
        position: "absolute",
        top: -140,
        zIndex: 2,
        justifyContent: "space-between",
        left: 0,
        right: 0,
        paddingHorizontal: 20,
    },
    artWork: {
        width: 200,
        height: 200,
        aspectRatio: 1 / 1,
    },
    card: {
        marginTop: 144,
        paddingTop: 56,
        paddingHorizontal: 20,
        paddingBottom: 20,
        boxShadow: "0px 0px 2px #000000 inset",
        gap: 16,
        alignItems: "center",
    },
});