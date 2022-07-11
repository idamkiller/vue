
<template>
  <h1>Counter vuex</h1>
  <h2>Direct access: {{$store.state.count}}</h2>
  <h2>Computed: {{countComputed}}</h2>

  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt">Random</button>

  <h2>map: {{count}}</h2>
  <h2>{{lastMutation}}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'

    export default {
        name: 'Counter',
        methods: {
            increment() {
                this.$store.commit('increment')
            },
            decrement(){
                this.$store.commit('decrement')
            },
            incrementBy() {
                this.$store.commit('incrementBy', 5)
            },
            ...mapActions({
                incrementRandomInt: 'incrementRandomInt'
            })
            // incrementRandom() {
            //     // this.$store.commit('incrementBy', 5)
            //     this.$store.dispatch('incrementRandomInt')
            // },
        },
        computed: {
            countComputed() {
                return this.$store.state.count
            },
            ...mapState({
                count: state => state.count,
                lastMutation: state => state.lastMutation
            })
        }
    }
</script>