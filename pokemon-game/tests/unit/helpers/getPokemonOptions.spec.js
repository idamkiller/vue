import getPokemonOptions, {getPokemons, getPokemonNames} from '@/helpers/getPokemonOptions.js'
import { mockPokemons } from '../mocks/pokemons.mock';

describe('getPokemonOptions helpers', () => {
    test('debe de regresar un arreglo de numeros', () => {
        const pokemons = getPokemons();
        expect(pokemons.length).toBe(650);
        pokemons.forEach((pokemon, index) => {
            expect(pokemon).toBe(index + 1);
        });
    });

    test('getPokemonNames debe retornar un arreglo de 4 elementos con nombres', async () => {
        const pokemons = await getPokemonNames([1,2,3,4]);
        expect(pokemons.length).toBe(4);
        pokemons.forEach((pokemon) => {
            expect(pokemon.name).toBeDefined();
            expect(pokemon.id).toBeDefined();
        });

        expect(pokemons).toStrictEqual(mockPokemons);
    });

    test('getPokemonOptions debe retornar un arreglo mezclado', async () => {
        const pokemons = await getPokemonOptions()
        expect(pokemons.length).toBe(4);
        pokemons.forEach((pokemon) => {
            expect(pokemon.name).toBeDefined();
            expect(pokemon.id).toBeDefined();
        });
        expect(pokemons).toEqual([
            {name: expect.any(String), id: expect.any(Number)},
            {name: expect.any(String), id: expect.any(Number)},
            {name: expect.any(String), id: expect.any(Number)},
            {name: expect.any(String), id: expect.any(Number)}
        ]);
    });
});