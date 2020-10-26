<template>
  <div class="hello">
    <h1>list view</h1>
    <p>to show all mangalist</p>
      <li v-for="record in records" :key="record.id">
        {{ record.title }} - {{ record.price }}
        <br>
      </li>
      <p>asdasd</p>
  </div>
</template>

<script>
export default {
  name: 'list',
  created () {
    this.$store.dispatch('records/getAllRecords')
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
