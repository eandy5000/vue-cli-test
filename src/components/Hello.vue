<template>
  <div class="hello">
<h1>Main content</h1>
<p>{{test}} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, suscipit sequi nam consequatur, odio voluptatem saepe hic a asperiores nobis perspiciatis ratione minus corporis tempore consectetur, rem fugiat aspernatur odit!</p>
</div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
    test () {
      return this.$store.state.test
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
