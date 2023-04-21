<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title"><b>Список дел</b></h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item breadcrumb__actived" to="/todos"
            >Список дел</router-link
          >
        </div>
      </div>
      <button @click="show(new Todo({}))" class="btn btn-primarys me-3">
        Добавить
      </button>
    </div>
    <div class="d-flex">
      <input
        v-model="searchText"
        class="form-control my__search mt-0 me-2"
        type="text"
      />
      <button @click="search" class="btn btn-primary">Искать</button>
    </div>
    <app-table :items="items" :columns="columns">
      <template #id="{ item }">{{ item.id }}</template>
      <template #todo="{ item }"
        ><router-link :to="`/todos/${item.id}`">{{
          item.todo
        }}</router-link></template
      >
      <template #completed="{ item }">{{ item.completed }}</template>
      <template #action="{ item }">
        <div class="d-flex justify-content-end">
          <button @click="show(item)" class="btn btn-primarys me-3">
            Обновить
          </button>
          <button @click="remove(item.id)" class="btn btn-danger">
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
    <app-dialog title="Посмотреть список дел" v-if="item != null" ref="dialog">
      <template #body>
        <div class="mb-3">
          <label class="form-label">Список дел</label>
          <input v-model="item.todo" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Закончен?</label>
          <input
            v-model="item.completed"
            type="text"
            class="form-control"
            rowspan="6"
          />
        </div>
      </template>
      <template #footer
        ><button @click="add" class="btn btn-primary">Добавить</button>
        <button @click="update" class="btn btn-success">Сохранить</button>
        <button @click="dialog.modal.hide()" class="btn btn-secondary">
          Закрыть
        </button>
      </template>
    </app-dialog>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import AppDialog from "../../components/app-dialog.vue";
import AppTable from "../../components/app-table.vue";
import { Todo } from "../../entities/Todo";
import { useEntities } from "../../hooks/useEntities";
import { TableColumn } from "../../models/TableColumn";

const pagination = async (pageIndex: number) => {
  skip.value = pageIndex;
  await get();
};

const {
  limit,
  skip,
  item,
  add,
  show,
  dialog,
  items,
  loaded,
  pageCount,
  update,
  remove,
  get,
  queryString,
  total,
  searchText,
  search,
} = useEntities<Todo>("todos");

const columns: TableColumn[] = [
  new TableColumn({
    name: "id",
    caption: "#",
  }),
  new TableColumn({
    name: "todo",
    caption: "Список дел",
  }),
  new TableColumn({
    name: "completed",
    caption: "закончен?",
  }),
  new TableColumn({
    name: "action",
  }),
];
</script>
<style src="../../assets/css/style.css"></style>
<style>
.my__search {
  width: 100%;
}
.form-select {
  width: 100px;
}
h1::selection {
  color: yellow;
  background: red;
}
.my__row {
  width: 100%;
  overflow-x: scroll;
  display: flex;
  width: fit-content;
}
.my__row::-webkit-scrollbar {
  display: none;
}
.myBlock {
  background-color: rgb(172, 214, 154);
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  font-size: 20px;
  color: black;
  transition: 0.3s;
  box-shadow: 2px 3px 2px black;
  margin: 20px 5px;
}
.myBlock:hover {
  background-color: rgb(97, 146, 86);
  transform: scale(1.03);
}
.myBlock-active {
  background-color: rgb(97, 146, 86);
}
</style>
