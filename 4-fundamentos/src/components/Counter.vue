<template>
    <div>
        <h2>{{title}}</h2>
        <p>
        <button @click="decrement">-</button>
        <span>{{ count }} <sup>2</sup> = {{square}}</span>
        <button @click="increment">+</button>
        </p>
        <p data-testid="counterP">{{count}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        props: {
            title: {
                type: String,
                default: 'Counter'
            },
            start: {
                type: Number,
                default: 10
            }
        },
        data() {
            return {
                count: this.start
            }
        },
        methods: {
            increment() {
                this.count++
            },
            decrement() {
                this.count--
            }
        },
        computed: {
            square() {
                return this.count * this.count
            }
        }
    }
</script>