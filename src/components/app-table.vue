<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.id">
          {{ column.caption }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="column in columns" :key="column.id">
          <slot :name="column.name" :item="item">
            {{ item?.[column.name] }}</slot
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { TableColumn } from "../models/TableColumn";

interface PropTypes {
  columns: TableColumn[];
  items: any[];
}

defineProps<PropTypes>();
</script>
