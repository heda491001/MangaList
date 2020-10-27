<template>
  <div class="hello">
    <h1>list view</h1>
    <p>to show all mangalist</p>
      <li v-for="record in recordslist" :key="record.id">
        <p>test</p>
        {{ record.title }} - {{ record.price }}
        <br>
      </li>
      <p>asdasd</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'list',
  computed: mapState({
    recordslist: state => state.records.all
  }),
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
