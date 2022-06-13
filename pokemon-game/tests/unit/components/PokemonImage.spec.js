import {shallowMount} from '@vue/test-utils';
import PokemonImage from '@/components/PokemonImage.vue';

describe('PokemonImage component', () => {
    test('debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(PokemonImage, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })

        expect(wrapper.html()).toMatchSnapshot();
    });
    test('debe de mostrar la imagen oculta y el pokemon 100', () => {
        const wrapper = shallowMount(PokemonImage, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })

        const [img1, img2] = wrapper.findAll('img')

        expect(img1.exists()).toBeTruthy()
        expect(img2).toBeUndefined()
        
        expect(img1.classes('hidden-pokemon')).toBeTruthy()

        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
    });
    test('debe mostrar la imagen de pokemon con showPokemon en true', () => {
        const wrapper = shallowMount(PokemonImage, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })

        const img = wrapper.find('img')

        expect(img.exists()).toBeTruthy()
    
        expect(img.classes('hidden-pokemon')).toBeFalsy()
        expect(img.classes('fade-in')).toBeTruthy()
    });
})