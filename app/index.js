import react, { useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList, ActivityIndicator, Platform } from 'react-native';
import Pokeball from '@/assets/images/pokeball.svg'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '../components/ThemedText'
import { useThemeColors } from '../hooks/useThemeColor';
import { Card } from '../components/Card';
import pokeball from '@/assets/images/pokeball.png'
import { PokemonCard } from '../components/pokemon/PokemonCard';
import { useFetchQuery, useInfiniteFetchQuery } from '../hooks/useFetchQuery';
import { getPokemonId } from '../functions/pokemon';
import { SearchBar } from '../components/SearchBar';
import { Row } from '../components/Row';
import { SortButton } from '../components/SortButton';

export default function Index() {
  const router = useRouter()
  const color = useThemeColors()
  const [search, setSearch] = useState("")
  const [sortKey, setSortKey] = useState("id")
  // const pokemons = Array.from({ length: 35 }, (_, k) => ({
  //   name: 'Pokémon name',
  //   id: k + 1,
  // }))
  const { data, isFetching, fetchNextPage } = useInfiniteFetchQuery('/pokemon?limit=21')
  const pokemons = data?.pages.flatMap(
    (page) =>
      page.results.map(
        (r) => (
          {
            name: r.name,
            url: r.url,
            id: getPokemonId(r.url)
          }
        )
      )
  ) ?? []

  const filteredPokemons = [...(search
    ? pokemons.filter(
      (p) =>
        p.name.includes(search.toLowerCase()) ||
        p.id.toString() === search
    )
    : pokemons)].sort((a, b) => (a[sortKey] < b[sortKey]) ? -1 : 1)


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: color?.tint }]}>
      <Row style={styles.header} gap={16}>
        <Pokeball/>
        <ThemedText variant="headline" color="grayLight">Pokédex</ThemedText>
      </Row>
      <Row style={styles.search} gap={16}>
        <SearchBar
          value={search}
          onChange={setSearch}
        />
        <SortButton value={sortKey} onChange={setSortKey}/>
      </Row>

      <Card style={styles.body}>
        <FlatList
          data={filteredPokemons}
          numColumns={Platform.OS === "web" ? 4 : 3}
          contentContainerStyle={[styles.gridGap, styles.list]}
          columnWrapperStyle={[styles.gridGap]}
          ListFooterComponent={
            isFetching ? <ActivityIndicator color={color.tint} /> : null
          }
          onEndReached={search ? undefined : () => fetchNextPage()}
          renderItem={({ item }) => (
            <PokemonCard
              id={item.id}
              name={item.name}
              style={{
                flex: Platform.OS === "web" ? 1 / 4 : 1 / 3
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
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
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  body: {
    flex: 1,
    boxShadow: "0px 0px 2px #000000 inset",
    marginTop: 16
  },
  gridGap: {
    gap: 8,
  },
  list: {
    padding: 12,
  },

  search: {
    marginTop: Platform.OS === "web" ? 26 : 0,
    marginBottom: Platform.OS === "web" ? 10 : 0,
    paddingHorizontal: 12,
  }
})