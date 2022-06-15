<template>
    <a
        v-if="isExternalLink"
        :href="link.to"
        target="_blank"
        class="normal-link"
    >
        {{link.name}}
    </a>
    <router-link
        v-else
        :to="route"
        v-slot="{isActive}"
    >
        <a
            :class="isActive ? 'is-active' : 'normal-link'"
        >
            {{link.name}}
        </a>
    </router-link>
</template>

<script>
export default {
    name: 'CustomLink',
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    computed: {
        isExternalLink() {
            return this.link.to.startsWith('http')
        },
        route(){
            return this.link.id === undefined ?
                {name: this.link.to} :
                {name: this.link.to, params: {id: this.link.id}}
        }
    },
}
</script>

<style scope>

    .is-active {
        color: #42b983;
        font-weight: bold;
    }
    .normal-link {
        color: #2c3e50;
    }
    
</style>