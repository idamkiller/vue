<template>
    <h1>Pokemon: {{id}}</h1>
    <div v-if="pokemon">
        <h2>Nombre: {{pokemon.name}}</h2>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
    
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            pokemon: null
        }
    },
    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
                .then(response => response.json())
                this.pokemon = pokemon
            } catch (error) {
                this.$router.push('/')
            }
        }
    },
    created() {
        this.getPokemon()
    },
    watch: {
        id() {
            this.getPokemon()
        }
    }
}
</script>