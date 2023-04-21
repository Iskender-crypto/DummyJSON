<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.firstName }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/products"
            >Авторы</router-link
          >>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/authors/:id"
            >{{ model.title }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>id: </b>{{ model.id }}</p>
      <p class="mb-2"><b>title: </b>{{ model.title }}</p>
      <p class="mb-2"><b>description: </b>{{ model.description }}</p>
      <p class="mb-2"><b>price: </b>{{ model.price }}</p>
      <p class="mb-2">
        <b>discountPercentage: </b>{{ model.discountPercentage }}
      </p>
      <p class="mb-2"><b>rating: </b>{{ model.rating }}</p>
      <p class="mb-2"><b>stock: </b>{{ model.stock }}</p>
      <p class="mb-2"><b>brand: </b>{{ model.brand }}</p>
      <p class="mb-2"><b>category: </b>{{ model.category }}</p>
      <p class="mb-2">
        <b>thumbnail: </b><br /><img :src="`${model.thumbnail}`" alt="" />
      </p>
      <p class="mb-2"><b>images: </b><br>
        <div class="scroll">
          <div class="scroll__in" v-for="img in model.images">
            <img   :src="`${img}`" alt="">
          </div>
        </div></p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { Product } from "../../entities/Product";
import { useEntity } from "../../hooks/useEntity";
const { params } = useRoute();
const { model, loaded } = useEntity<Product>(`products`, +params.id);
</script>
<style src="../../assets/css/style.css"></style>
<style src="../../assets/css/product.css"></style>
<style scoped>
.scroll{
  overflow-x: scroll;
  display: flex;
}

.scroll__in{
  display: flex;
}
.scroll__in img{
  margin: 10px;
}
</style>
