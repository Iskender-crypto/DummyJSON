<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.todo }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/todos"
            >Список дел</router-link
          >>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/photos/:id"
            >{{ model.todo }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>Номер: </b>{{ model.id }}</p>
      <p class="mb-2"><b>Заголовок:</b>{{ model.todo }}</p>
      <p class="mb-2"><b>Закончен?:</b>{{ model.completed }}</p>
      <p class="mb-2"><b>Пользовательский номер:</b>{{ model.userId }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { Post } from "../../entities/Post";
import { useEntity } from "../../hooks/useEntity";
const { params } = useRoute();
const { model, loaded } = useEntity<Post>(`todos`, +params.id);
</script>
<style src="../../assets/css/style.css"></style>
<style src="../../assets/css/product.css"></style>
