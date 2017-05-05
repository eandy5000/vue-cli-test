<template>
    <div>
        <h1>Header</h1>
        <router-link :to="{path: 'Hello'}">Home</router-link>
        <router-link :to="{path: 'Contact'}">Contact</router-link>
        <router-link :to="{path: 'About'}">About</router-link>
        {{msg}}
        <hr/>
    </div>
</template>
<script>
    export default {
    }
</script>
<style scoped>
    div {
        text-align: center;
    }
    a {
        margin-left: 20px;
    }
    a:first-child {
        margin-left: 0;
    }
</style>
