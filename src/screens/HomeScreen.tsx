import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { styles } from '../theme/appTheme';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPagination } from '../hooks/usePokemonPagination';
import PokemonCard from '../components/PokemonCard';





export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { simplePokemonList, loadPokemons } = usePokemonPagination()


    return (

            <SafeAreaView >

                <View
                    style={{
                        alignItems: 'center',

                    }}
                >
                    <View  style={{ width: '100%',overflow:'hidden', height: 200  , position: 'absolute'}}>

                        <Image
                            source={require('../assets/pokebola.png')}
                            style={styles.pokebolaBG}
                        />
                    </View>

                    <FlatList
                        data={simplePokemonList}
                        keyExtractor={(pokemon) => pokemon.id}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        removeClippedSubviews={false}
                        

                        //Header
                        ListHeaderComponent={(
                            <Text style={{
                                ...styles.title,
                                ...styles.globalMargin,
                                top: top + 20,
                                marginBottom: top + 20,
                                paddingBottom: 10,

                            }}>
                                Pokedex
                            </Text>

                        )}

                        renderItem={({ item, index }) => (
                            <PokemonCard pokemon={item} />
                        )}

                        //infinite scroll
                        onEndReached={loadPokemons}
                        onEndReachedThreshold={0.4}

                        ListFooterComponent={(
                            <ActivityIndicator
                                style={{ height: 100 }}
                                size={20}
                                color="grey"
                            />
                        )}

                    />

                </View>

            </SafeAreaView>

    )
}


