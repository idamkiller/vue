import { createStore } from 'vuex'
import getRandomInt from '@/helpers/getRandomInt'

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
    },
    mutations: {
        increment(state) {
            state.count++
            state.lastMutation = 'increment'
        },
        decrement(state) {
            state.count--
            state.lastMutation = 'decrement'
        },
        incrementBy(state, val){
            state.count += val
            state.lastMutation = 'incrementBy'
        }
    },
    actions: {
        async incrementRandomInt(context){
            const random = await getRandomInt()
            context.commit('incrementBy', random)
        }
    }
})