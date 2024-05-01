import React, { useEffect, useState } from 'react'
import { Button, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { getPokemonDetailsApi } from '../api/pokemon-api-service';
import DetailPokemon from '../components/pokemon/DetailPokemon';
import useAuth from '../hooks/useAuth';
import Favorite from '../components/pokemon/Favorite';

function PokemonScreen(props: any) {
  const {navigation, route: {params} } = props;
  const [pokemon, setPokemon] = useState(null);
  const {auth} = useAuth();
  console.log('PokemonScreen -> navigation', navigation);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={params?.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
        // <FontAwesome5 name={'comments'} solid brand/>
        // <Button title='Atras' color='#fff' onPress={() => navigation.goBack} />
      ),
    });
  }, [navigation, params, pokemon]);

  useEffect(() => {
    ( async() => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon({
          id: response.id,
          name: response.name,
          order: response.order,
          type: response.types[0].type.name,
          types: response.types,
          stats: response.stats,
          image: response.sprites.other["official-artwork"].front_default
        });
      } catch (error) {
        console.error(error);
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <DetailPokemon pokemon={pokemon} />
    </ScrollView>
  )
}


export {PokemonScreen}
