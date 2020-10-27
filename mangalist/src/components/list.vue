<template>
  <div class="hello">
    <h1>list view</h1>
    <p>to show all records</p>
      <vxe-table
          border
          show-header-overflow
          show-overflow
          highlight-hover-row
          :align="allAlign"
          :data="recordslist">
          <vxe-table-column type="seq" sortable title="seq" width="60"></vxe-table-column>
          <vxe-table-column field="title" sortable title="title" :filters="[{ data: '' }]" :filter-method="filterMethod">
            <template v-slot:filter="{ $panel, column }">
              <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)">
            </template>
          </vxe-table-column>
          <vxe-table-column field="price" sortable title="price"></vxe-table-column>
          <vxe-table-column field="inventory" sortable title="inventory"></vxe-table-column>
        </vxe-table>
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
  },
  methods: {
    filterMethod ({ option, row }) {
      return row.title === option.data
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
