import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { getPokemonDetailsByUrlApi, getPokemons } from '../api/pokemon-api-service';
import { PokemonList } from '../components/PokemonList';

function PokedexScreen() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [nextUrl, setNextUrl] = useState(null);

    useEffect( () => {
        ( async () => { await loadPokemons() })()
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await getPokemons(nextUrl);
            console.log(response);
            setNextUrl(response.next);

            const pokemonList: Pokemon[] = [];
            for (const item of response.results) {
                console.log('item -->', item);
                const pokemonDetail = await getPokemonDetailsByUrlApi(item.url);
                //console.log('pokemonDetail -->', pokemonDetail.types[0].type.name);
                
                pokemonList.push({
                    id: pokemonDetail.id,
                    name: pokemonDetail.name,
                    type: pokemonDetail.types[0].type.name,
                    order: pokemonDetail.order,
                    image: pokemonDetail.sprites.other['official-artwork'].front_default
                });

            }
            setPokemons([...pokemons, ...pokemonList])
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SafeAreaView>
            <PokemonList
                pokemons={pokemons} 
                loadPokemons={loadPokemons} 
                isNext={nextUrl}
            />
        </SafeAreaView>
    )
}

export {PokedexScreen}