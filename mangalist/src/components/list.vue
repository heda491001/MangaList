<template>
  <div class="hello">
    <h1>list view</h1>
    <p>to show all mangalist</p>
      <li v-for="record in recordslist" :key="record.id">
        {{ record.title }} - {{ record.price }}  - {{record.inventory}} 
      </li>
      
    <vxe-table　size="medium"　:data="tableData">
      <vxe-table-column type="title" width="60"></vxe-table-column>
    　<vxe-table-column type="price" width="60"></vxe-table-column>
      <vxe-table-column type="inventory" width="60"></vxe-table-column>
    </vxe-table>
  </div>
</template>



 <!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vxe-table/lib/style.css">
<!-- 引入脚本 -->
<script src="https://cdn.jsdelivr.net/npm/xe-utils"></script>
<script src="https://cdn.jsdelivr.net/npm/vxe-table"></script>

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
