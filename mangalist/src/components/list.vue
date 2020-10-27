<template>
  <div class="hello">
    <h1>list view</h1>
    <p>to show all mangalist</p>
      <li v-for="record in recordslist" :key="record.id">
        {{ record.title }} - {{ record.price }}  - {{record.inventory}} 
      </li>
      <!-- <vxe-table
          border
          show-header-overflow
          show-overflow
          highlight-hover-row
          :align="allAlign"
          :data="recordslist">
          <vxe-table-column type="seq" title="seq" width="60"></vxe-table-column>
          <vxe-table-column field="title" title="title"></vxe-table-column>
          <vxe-table-column field="price" title="price"></vxe-table-column>
          <vxe-table-column field="inventory" title="inventory"></vxe-table-column>
        </vxe-table> -->
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
