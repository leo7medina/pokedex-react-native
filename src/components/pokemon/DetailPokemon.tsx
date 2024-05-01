import React from 'react'
import { Text, SafeAreaView, ScrollView, View, StyleSheet, Image } from 'react-native';
import { capitalize } from 'lodash';
import Type from './Type';
import Stats from './Stats';
import { constants } from '../../utils/constants';

function DetailPokemon(props: any) {
    const { pokemon } = props;
    const color = constants.POKEMON_TYPE_COLORS[pokemon.type.toLowerCase()];
    const bgStyle = [{ backgroundColor: color, ...styles.bg}];
    
    return (
        <>
            <View style={bgStyle} />
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                    <Text style={styles.order}>#{`${pokemon.order}`.padStart(3, '0')}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={ {uri: pokemon.image}} style={styles.image} />
                </View>
            </SafeAreaView>
            <Type types={pokemon.types}/>
            <Stats stats={pokemon.stats}/>
        </>
    )
}

const styles = StyleSheet.create({
    bg: {
      width: "100%",
      height: 400,
      position: "absolute",
      borderBottomEndRadius: 300,
      borderBottomLeftRadius: 300,
      transform: [{ scaleX: 2 }],
    },
    content: {
      marginHorizontal: 20,
      marginTop: 30,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 40,
    },
    name: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 27,
    },
    order: {
      color: "#fff",
      fontWeight: "bold",
    },
    contentImg: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      top: 30,
    },
    image: {
      width: 250,
      height: 300,
      resizeMode: "contain",
    },
  });

export default DetailPokemon