<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.products[0].title }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/authors"
            >Авторы</router-link
          >>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/authors/:id"
            >{{
          }}</router-link>
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>id: </b>{{ model.products[0].id }}</p>
      <p class="mb-2"><b>title: </b>{{ model.products[0].title }}</p>
      <p class="mb-2"><b>price: </b>{{ model.products[0].price }}</p>
      <p class="mb-2"><b>quantity: </b>{{ model.products[0].quantity }}</p>
      <p class="mb-2"><b>total: </b>{{ model.products[0].total }}</p>
      <p class="mb-2">
        <b>discountPercentage: </b>{{ model.products[0].discountPercentage }}
      </p>
      <p class="mb-2">
        <b>discountedPrice: </b>{{ model.products[0].discountedPrice }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { CartProduct } from "../../../entities/cart/CartProduct";
import { useEntity } from "../../../hooks/useEntity";
const { params } = useRoute();

const { model, loaded } = useEntity<CartProduct>(`carts`, +params.id);
</script>
<style src="../../../assets/css/style.css"></style>
<style src="../../../assets/css/product.css"></style>
