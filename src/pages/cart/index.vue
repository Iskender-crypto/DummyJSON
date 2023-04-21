<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title"><b>Карты</b></h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item breadcrumb__actived" to="/carts"
            >Карты</router-link
          >
        </div>
      </div>
      <button @click="show(new Cart({}))" class="btn btn-primarys me-3">
        Добавить
      </button>
    </div>
    <div class="d-flex">
      <input
        v-model="searchText"
        class="form-control my__search mt-0 me-2"
        type="text"
      />
      <button @click="search" class="btn btn-primarys">Искать</button>
    </div>
    <app-table :items="items" :columns="columns">
      <template #id="{ item }">{{ item.id }}</template>
      <template #products="{ item }">
        <router-link :to="`/carts/${item.id}`">Карты </router-link>
      </template>
      <template #discountedTotal="{ item }">{{
        item.discountedTotal
      }}</template>
      <template #total="{ item }">{{ item.total }}</template>
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
    <div class="d-flex align-items-center mb-5">
      <nav aria-label="Page navigation example ">
        <ul class="pagination mb-0 d-flex align-items-center me-3">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            @click="pagination(pageIndex)"
            class="page-item"
            v-for="pageIndex in pageCount"
            :key="pageIndex"
          >
            <button class="page-link">{{ pageIndex }}</button>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <select @change="get" v-model="limit" class="form-select">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
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
import { Cart } from "../../entities/cart/Cart";
import { useEntities } from "../../hooks/useEntities";
import AppTable from "../../components/app-table.vue";
import AppDialog from "../../components/app-dialog.vue";
import { TableColumn } from "../../models/TableColumn";
const pagination = async (pageIndex: number) => {
  skip.value = pageIndex;
  await get();
};
const {
  loaded,
  items,
  show,
  update,
  remove,
  add,
  item,
  dialog,
  limit,
  skip,
  get,
  pageCount,
  queryString,
  total,
  searchText,
  search,
} = useEntities<Cart>("carts");
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
    name: "discountedTotal",
    caption: "со скидкой Всего",
  }),
  new TableColumn({
    name: "total",
    caption: "total",
  }),
  new TableColumn({
    name: "action",
  }),
];
</script>
<style src="../../assets/css/style.css"></style>
