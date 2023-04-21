<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.id }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/authors"
            >Авторы</router-link
          >>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/carts/:id"
            >{{ model.id }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>id: </b>{{ model.id }}</p>
      <p class="mb-2">
        <b>products: </b
        ><router-link :to="`/carts/cartProducts`">Товары</router-link>
      </p>
      <p class="mb-2"><b>total: </b>{{ model.total }}</p>
      <p class="mb-2"><b>discountedTotal: </b>{{ model.discountedTotal }}</p>
      <p class="mb-2"><b>userId: </b>{{ model.userId }}</p>
      <p class="mb-2"><b>totalProducts: </b>{{ model.totalProducts }}</p>
      <p class="mb-2"><b>totalQuantity: </b>{{ model.totalQuantity }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { Cart } from "../../entities/cart/Cart";
import { CartProduct } from "../../entities/cart/CartProduct";
import { useEntity } from "../../hooks/useEntity";
const { params } = useRoute();
const { model, loaded } = useEntity<Cart>(`carts`, +params.id);
</script>
<style src="../../assets/css/style.css"></style>
<style src="../../assets/css/product.css"></style>
