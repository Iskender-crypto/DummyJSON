<template>
  <div class="container my__container">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title"><b>Админ</b></h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item breadcrumb__actived" to="/"
            >Главная</router-link
          >
        </div>
      </div>
    </div>

    <div class="my__row">
      <div class="my__col">
        <router-link to="/quotes" class="my__block">Цитаты</router-link>
      </div>
      <div class="my__col">
        <router-link to="/products" class="my__block">Товары</router-link>
      </div>
      <div class="my__col">
        <router-link to="/comments" class="my__block">Комментарий</router-link>
      </div>
      <div class="my__col">
        <router-link to="/carts" class="my__block">Карты</router-link>
      </div>
      <div class="my__col">
        <router-link to="/posts" class="my__block">Посты</router-link>
      </div>
      <div class="my__col">
        <router-link to="/users" class="my__block">Пользователь</router-link>
      </div>
      <div class="my__col">
        <router-link to="/todos" class="my__block">Список дел</router-link>
      </div>
    </div>
  </div>
</template>
<style src="../assets/css/style.css"></style>
<style scoped>
.my__row {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -10px;
}

.my__col {
  padding: 0px 10px;
  width: 25%;
  margin-bottom: 30px;
}

.my__block {
  height: 150px;
  background-color: rgb(140, 239, 140);
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: 0.1s;
}
.my__block:hover {
  color: white;
  background-color: rgb(38, 68, 38);
}
</style>
