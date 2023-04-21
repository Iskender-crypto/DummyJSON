<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.body }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/">Комментарии</router-link
          >>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/comments/:id"
            >{{ model.body }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>id: </b>{{ model.id }}</p>
      <p class="mb-2"><b>body:</b>{{ model.body }}</p>
      <p class="mb-2"><b>postId:</b>{{ model.postId }}</p>
      <p class="mb-2"><b>user:</b>
        <div class="ms-4">
          <p class="mb-2"><b>id:</b>{{model.user.id}}</p>
          <p class="mb-2"><b>userName:</b>{{model.user.id}}</p> 
        </div>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { Comment } from "../../entities/comment/Comment";
import { useEntity } from "../../hooks/useEntity";
const { params } = useRoute();
const { model, loaded } = useEntity<Comment>(`comments`, +params.id);
</script>
<style src="../../assets/css/style.css"></style>
<style src="../../assets/css/product.css"></style>
