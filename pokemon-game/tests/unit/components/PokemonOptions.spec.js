import {shallowMount} from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions.vue';
import { mockPokemons } from '../mocks/pokemons.mock';

describe('PokemonOptions component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: mockPokemons
            }
        })
    })
    test('debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('debe de mostrar las 4 opciones correctamente', () => {
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4);
        
        liTags.forEach((li, index) => {
            expect(li.text()).toBe(mockPokemons[index].name);
        });
    });

    test('debe emitir seleccion con sus respectivos parametros al hacer click', () => {
        
        const liTags = wrapper.findAll('li')
        liTags.forEach((li, index) => {
            li.trigger('click')
            expect(wrapper.emitted('selectedPokemon').length).toBe(index + 1);
        })

        expect(wrapper.emitted('selectedPokemon')).toEqual([
            [ 1, 'bulbasaur' ],
            [ 2, 'ivysaur' ],
            [ 3, 'venusaur' ],
            [ 4, 'charmander' ]
        ]);
    });
});