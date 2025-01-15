import react, { useEffect } from 'react';
import { Link, useRouter } from 'expo-router';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList, ActivityIndicator, } from 'react-native';
import HomeIcon from "@/assets/home.svg";
import home from "@/assets/icon.png";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../components/ThemedText'
import { useThemeColors } from '../hooks/useThemeColor';
import { Card } from '../components/Card';
import pokeball from '@/assets/images/pokeball.png'
import { PokemonCard } from '../components/pokemon/PokemonCard';
import { useFetchQuery, useInfiniteFetchQuery } from '../hooks/useFetchQuery';
import { getPokemonId } from '../functions/pokemon';

export default function Index() {
  const router = useRouter()
  const color = useThemeColors()
  // const pokemons = Array.from({ length: 35 }, (_, k) => ({
  //   name: 'Pokémon name',
  //   id: k + 1,
  // }))
  const {data, isFetching, fetchNextPage} = useInfiniteFetchQuery('/pokemon?limit=21')
  const pokemons = data?.pages.flatMap((page) => page.results) ?? []

  const handlePress = () => {
    router.push("/login")
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color?.tint }]}>
      <View style={styles.header}>
        <Image
          source={pokeball}
          width={24}
          height={24}
        />
        <ThemedText variant="headline" color="grayLight">Pokédex</ThemedText>
      </View>
      <Card style={styles.body}>
        <FlatList
          data={pokemons}
          numColumns={3}
          contentContainerStyle={[styles.gridGap, styles.list]}
          columnWrapperStyle={styles.gridGap}
          ListFooterComponent={
            isFetching ? <ActivityIndicator color={color.tint}/> : null
          }
          onEndReached={() => fetchNextPage()}
          renderItem={({ item }) => (
            <PokemonCard id={getPokemonId(item.url)} name={item.name} style={{flex: 1/3 }}/>
          )}
          keyExtractor={(item) => item.url}
        />

      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 12
  },
  body: {
    flex: 1,
    boxShadow: "0px 0px 2px #000000 inset"
  },
  gridGap: {
    gap: 8,
  },
  list: {
    padding: 12,
  }
})