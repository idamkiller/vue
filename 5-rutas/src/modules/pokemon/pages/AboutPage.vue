<template>
    <h1>About page</h1>
    <hr>
    <h2>{{message}}</h2>
    <button @click="onChange">
        Cambiar mensaje
    </button>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue!'
        }
    },
    methods: {
        onChange() {
            this.message = 'Hello Vue 2!'
        }
    },
}
</script>