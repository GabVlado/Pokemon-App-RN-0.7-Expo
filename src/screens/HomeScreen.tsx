import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { styles } from '../theme/appTheme';
import {  useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPagination } from '../hooks/usePokemonPagination';
import { FadeInImage } from '../components/FadeInImage';




export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { simplePokemonList, loadPokemons } = usePokemonPagination()




    return (

        <View>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <FlatList
                data={simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <FadeInImage
                        uri={item.picture}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
                ) }

                //infinite scroll
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}

                ListFooterComponent={ (
                    <ActivityIndicator
                        style={{height: 100}}
                        size={20}
                        color="grey"
                    />
                )}

            />



            {/* <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
            }}>
                Pokedex
            </Text> */}
        </View>
    )
}


