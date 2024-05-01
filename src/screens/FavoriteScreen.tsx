import React, { useCallback, useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import useAuth from '../hooks/useAuth';
import { useFocusEffect } from '@react-navigation/native';
import { getPokemonsFavoriteApi } from '../api/favorite-api-service';
import { getPokemonDetailsApi } from '../api/pokemon-api-service';
import NoLogged from '../components/NoLogged';
import { PokemonList } from '../components/PokemonList';

function FavoriteScreen() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const {auth} = useAuth();

  useFocusEffect(
    useCallback( () => {
      if (auth) {
        (async() => {
          const response = await getPokemonsFavoriteApi();
          console.log('getPokemonsFavoriteApi -> ', response);
          const pokemonsArray = [];
          for await(const id of response) {
            if (id !== null && id !== undefined) {
              const pokemonDetail = await getPokemonDetailsApi(id);
              pokemonsArray.push({
                id: pokemonDetail.id,
                name: pokemonDetail.name,
                type: pokemonDetail.types[0].type.name,
                order: pokemonDetail.order,
                image: pokemonDetail.sprites.other["official-artwork"].front_default,
              });
            }
          }
          setPokemons(pokemonsArray);
        })()
      }
    }, [auth])
  );
  return !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />;
}

export {FavoriteScreen} 