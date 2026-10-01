import { request } from "./api.helper";

export class RickMortyHelpper{
    allCharactersUrl = 'https://rickandmortyapi.com/api/character';
    async getAllCharacters(param = '') {
        let url = this.allCharactersUrl;
        const endpoint = param ? `${url}/${param}` : url;
        return await request(endpoint);
    }
}