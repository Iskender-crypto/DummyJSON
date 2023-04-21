<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title"><b>CartProduct</b></h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Cart</router-link>>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/cartsProducts"
            >CartProduct</router-link
          >
        </div>
      </div>
      <button @click="show(new CartProduct({}))" class="btn btn-primarys me-3">
        Добавить
      </button>
    </div>
    <app-table :items="items" :columns="columns">
      <template #id="{ item }">{{ item.products[0].id }}</template>
      <template #products="{ item }">
        <router-link :to="`/carts/cartProducts/${item.id}`">{{
          item.products[0].title
        }}</router-link>
      </template>
      <template #price="{ item }">{{ item.products[0].price }}</template>
      <template #quantity="{ item }">{{ item.products[0].quantity }}</template>
      <template #action="{ item }">
        <div class="d-flex justify-content-end">
          <button @click="show(item)" class="btn btn-primarys me-3">
            Обновить
          </button>
          <button @click="remove(item.id)" class="btn btn-danger me-3">
            Удалить
          </button>
        </div>
      </template>
    </app-table>
    <app-dialog title="Посмотреть авторы" v-if="item != null" ref="dialog">
      <template #body>
        <div class="mb-3">
          <label class="form-label">Имя</label>
          <input v-model="item.firstName" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Фамилия</label>
          <textarea
            v-model="item.lastName"
            class="form-control"
            rows="6"
          ></textarea>
        </div>
      </template>
      <template #footer>
        <button @click="add" class="btn btn-primary">Добавить</button>
        <button @click="update" class="btn btn-success">Сохранить</button>
        <button @click="dialog.modal.hide()" class="btn btn-secondary">
          Закрыть
        </button>
      </template>
    </app-dialog>
  </div>
</template>
<script setup lang="ts">
import { useEntities } from "../../../hooks/useEntities";
import AppTable from "../../../components/app-table.vue";
import AppDialog from "../../../components/app-dialog.vue";
import { TableColumn } from "../../../models/TableColumn";
import { CartProduct } from "../../../entities/cart/CartProduct";
const { loaded, items, show, update, remove, add, item, dialog } =
  useEntities<CartProduct>("carts");
const columns: TableColumn[] = [
  new TableColumn({
    name: "id",
    caption: "#",
  }),
  new TableColumn({
    name: "products",
    caption: "Товары",
  }),
  new TableColumn({
    name: "price",
    caption: "Цена",
  }),
  new TableColumn({
    name: "quantity",
    caption: "quantity",
  }),
  new TableColumn({
    name: "action",
  }),
];
</script>
<style src="../../../assets/css/style.css"></style>
