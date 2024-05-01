import { constants } from "../utils/constants";


// export class PokemonApiService {
//     async getPokemons(endpoint: string) {
//         try {
//             const url = constants.API_HOST.concat("/pokemon?limit=20&offset=0");
//             const response = await fetch(endpoint || url);
//             return await response.json();
//         } catch (error) {
//             throw error;
//         }
//     }
    
//     async getPokemonDetailsByUrlApi(url: string) {
//         try {
//           const response = await fetch(url);
//           const result = await response.json();
//           return result;
//         } catch (error) {
//           throw error;
//         }
//       }
      
//       async getPokemonDetailsApi(id: number) {
//         try {
//           const url = `${constants.API_HOST}/pokemon/${id}`;
//           const response = await fetch(url);
//           const result = await response.json();
//           return result;
//         } catch (error) {
//           throw error;
//         }
//       }
// }

export async function getPokemons(endpoint?: string) {
    try {
        const url = constants.API_HOST.concat("/pokemon?limit=20&offset=0");
        const response = await fetch(endpoint || url);
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailsByUrlApi(url: string) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  export async function getPokemonDetailsApi(id: number) {
    try {
      const url = `${constants.API_HOST}/pokemon/${id}`;
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }