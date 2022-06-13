<template>
  <div class="options-container">
    <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.id"
            @click="$emit('selectedPokemon', pokemon.id, pokemon.name)">
            {{pokemon.name}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PokemonOptions',
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scope>
    ul {
        list-style-type: none;
        margin: 20px 0 0 0;
        padding: 0;
    }
    li {
        background-color: white;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
        margin-bottom: 10px;
        width: 250px;
    }

    li:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .options-container {
        display: flex;
        justify-content: center;
    }
</style>