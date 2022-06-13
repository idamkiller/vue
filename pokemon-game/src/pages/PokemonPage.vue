<template>
    <h1 v-if="!pokemon">Espere por favor</h1>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        <PokemonImage :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArray" @selectedPokemon="chekAnswer"/>
        <template v-if="message">
            <h3 class="fade-in">{{message}}</h3>
            <button @click="resetGame">Nuevo Juego</button>
        </template>
    </div>
</template>

<script>
    import PokemonImage from '@/components/PokemonImage.vue'
    import PokemonOptions from '@/components/PokemonOptions.vue'

    import getPokemonOptions from '@/helpers/getPokemonOptions'

    export default{
        name: 'PokemonPage',
        components: {
            PokemonImage,
            PokemonOptions
        },
        data() {
            return {
                pokemonArray: [],
                pokemon: null,
                message: null,
                showPokemon: false
            }
        },
        methods: {
            resetGame() {
                this.pokemon = null
                this.message = null
                this.showPokemon = false
                this.pokemonArray = []
                this.mixPokemonArray()
            },
            async mixPokemonArray(){
                this.pokemonArray = await getPokemonOptions()
                const rndInt = Math.floor(Math.random() * this.pokemonArray.length)
                this.pokemon = this.pokemonArray[rndInt]
            },
            getPokemonId(id) {
                this.pokemonId = id
                this.showPokemon = true
            },
            chekAnswer(id){
                this.pokemonId = id
                this.showPokemon = true

                if(this.pokemonId === this.pokemon.id){
                    this.message = `¡Correcto! es ${this.pokemon.name}`
                } else {
                    this.message = `¡Incorrecto! es ${this.pokemon.name}`
                }
            }
        },
        mounted() {
            this.mixPokemonArray()
        }
    }
</script>