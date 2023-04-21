<template>
  <div class="d-flex justify-content-center align-items-center h-100vh">
    <form class="row g-3">
      <h1>Регистрация</h1>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Логин</label>
        <input placeholder="login" class="form-control" type="text" />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">E-mail</label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Пароль</label>
        <input type="password" class="form-control" id="inputPassword4" />
      </div>

      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck"> Check me out </label>
        </div>
      </div>
      <div class="col-12 form-footer">
        <button @click.prevent="" type="submit" class="btn btn-primary btn-lg">
          Подписаться
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
h1 {
  border-bottom: 1px solid rgb(98, 96, 96);
  padding-bottom: 20px;
}
.form-footer {
  border-top: 1px solid rgb(98, 96, 96);
  padding-top: 20px;
  margin-top: 20px;
}
.h-100vh {
  height: 100vh;
  padding-bottom: 100px;
}
form {
  width: 500px;
  margin: auto;
  background-color: rgb(194, 244, 183);
  padding: 20px;
  border-radius: 15px;
}
</style>
