import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigator';



interface Props {
    pokemon: SimplePokemon
}

const windowWidth = Dimensions.get('window').width;


const PokemonCard = ({ pokemon }: Props) => {



    const [bgColor, setbgColor] = useState('grey');

    const isMounted = useRef(true);

    useEffect(() => {  // Puede causar fuga de memoria si el componente no esta montado

        ImageColors.getColors(pokemon.picture, { fallback: 'grey' })
            .then(colors => {

                if (!isMounted.current) return;

                if (colors.platform === 'android') {
                    setbgColor(colors.dominant || 'grey');
                }
                if (colors.platform === 'ios') {
                    setbgColor(colors.background || 'grey');
                }
            })

        return ( ) => {  // Se dispara cuando el componente se desmonte
            isMounted.current = false;
        }

    }, [])

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();


    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('PokemonScreen', { simplePokemon: pokemon, color: bgColor })}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor,
            }}>

                {/* Nombre del Pokemon  y ID */}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View style={styles.pokebolaContainer}>

                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />


            </View>
        </TouchableOpacity>
    )
}

export default PokemonCard


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 150,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,

    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        top: 20,
        left: 10,
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -25,
        right: -25,
        opacity: 0.5
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5,
        overflow: 'hidden',
    }
})
