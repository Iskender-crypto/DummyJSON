<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.firstName }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/users"
            >Пользователи</router-link
          >>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/users/:id"
            >{{ model.firstName }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>Номер: </b>{{ model.id }}</p>
      <p class="mb-2"><b>Имя:</b>{{ model.firstName }}</p>
      <p class="mb-2"><b>Фамилия:</b>{{ model.lastName }}</p>
      <p class="mb-2"><b>Лет:</b>{{ model.age }}</p>
      <p class="mb-2"><b>Пол:</b>{{ model.gender }}</p>
      <p class="mb-2"><b>e-mail:</b>{{ model.email }}</p>
      <p class="mb-2"><b>Телефон:</b>{{ model.phone }}</p>
      <p class="mb-2"><b>username:</b>{{ model.username }}</p>
      <p class="mb-2"><b>password:</b>{{ model.password }}</p>
      <p class="mb-2"><b>birthDate:</b>{{ model.birthDate }}</p>
      <p class="mb-2 d-flex">
        <b>image:</b><img :src="`${model.image}`" alt="" />
      </p>
      <p class="mb-2"><b>bloodGroup:</b>{{ model.bloodGroup }}</p>
      <p class="mb-2"><b>height:</b>{{ model.height }}</p>
      <p class="mb-2"><b>weight:</b>{{ model.weight }}</p>
      <p class="mb-2"><b>eyeColor:</b>{{ model.eyeColor }}</p>
      <p class="mb-2"><b>hair:</b><div class="ms-4">
        <p class="mb-1"><b>color:</b>{{ model.hair.color }}</p>
        <p class="mb-1"><b>type:</b>{{ model.hair.type }}</p>
      </div></p>
      <p class="mb-2"><b>domain:</b>{{ model.domain }}</p>
      <p class="mb-2"><b>ip:</b>{{ model.ip }}</p>
      <p class="mb-2"><b>address:</b>
        <div class="ms-4">
        <p class="mb-1"><b>address:</b>{{ model.address.address }}</p>
        <p class="mb-1"><b>city:</b>{{ model.address.city }}</p>
        <p class="mb-1"><b>coordinates:</b>
          <div class="ms-4">
            <p class="mb-1"><b>lat:</b>{{ model.address.coordinates.lat }}</p>
            <p class="mb-1"><b>lng:</b>{{ model.address.coordinates.lng }}</p>
          </div>
        </p>
        <p class="mb-1"><b>postalCode:</b>{{ model.address.postalCode }}</p>
        <p class="mb-1"><b>state:</b>{{ model.address.state }}</p>
        </div>
      </p>
      <p class="mb-2"><b>macAddress:</b>{{ model.macAddress }}</p>
      <p class="mb-2"><b>university:</b>{{ model.university }}</p>
      <p class="mb-2"><b>bank:</b><div class="ms-4">
        <p class="mb-1"><b>cardExpire:</b>{{ model.bank.cardExpire }}</p>
        <p class="mb-1"><b>cardNumber:</b>{{ model.bank.cardNumber }}</p>
        <p class="mb-1"><b>currency:</b>{{ model.bank.currency }}</p>
        <p class="mb-1"><b>iban:</b>{{ model.bank.iban }}</p>
      </div></p>
      <p class="mb-2"><b>company:</b>  
        <div class="ms-4">
          <p class="mb-1"><b>address:</b>
          <div class="ms-4">
            <p class="mb-1"><b>address:</b>{{ model.address.address }}</p>
          <p class="mb-1"><b>city:</b>{{ model.address.city }}</p>
          <p class="mb-1"><b>coordinates:</b>
            <div class="ms-4">
              <p class="mb-1"><b>lat:</b>{{ model.address.coordinates.lat }}</p>
              <p class="mb-1"><b>lng:</b>{{ model.address.coordinates.lng }}</p>
            </div>
          </p>
          <p class="mb-1"><b>postalCode:</b>{{ model.address.postalCode }}</p>
          <p class="mb-1"><b>state:</b>{{ model.address.state }}</p>
        </div>
        </p>
        <p class="mb-1"><b>department:</b>{{ model.address.state }}</p>
        <p class="mb-1"><b>name:</b>{{ model.address.state }}</p>
        <p class="mb-1"><b>title:</b>{{ model.address.state }}</p>
        </div>
      </p>
      <p class="mb-2"><b>ein:</b>{{ model.ein }}</p>
      <p class="mb-2"><b>ssn:</b>{{ model.ssn }}</p>
      <p class="mb-2"><b>userAgent:</b>{{ model.userAgent }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { User } from "../../entities/user/User";
import { useEntity } from "../../hooks/useEntity";
const { params } = useRoute();
const { model, loaded } = useEntity<User>(`users`, +params.id);
</script>
<style src="../../assets/css/style.css"></style>
<style src="../../assets/css/product.css"></style>
