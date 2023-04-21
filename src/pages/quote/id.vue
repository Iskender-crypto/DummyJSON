<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.quote }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/quotes">Цитаты</router-link
          >>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/quotes/:id"
            >{{ model.author }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>Номер: </b>{{ model.id }}</p>
      <p class="mb-2"><b>Цитата:</b>{{ model.quote }}</p>
      <p class="mb-2"><b>Автор:</b>{{ model.author }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Quote } from "../../entities/Quote";
import { RouterLink, useRoute } from "vue-router";
import { useEntity } from "../../hooks/useEntity";
const { params } = useRoute();
const { model, loaded } = useEntity<Quote>(`quotes`, +params.id);
</script>
<style src="../../assets/css/style.css"></style>
<style src="../../assets/css/product.css"></style>
