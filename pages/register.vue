<template>
     <div>
          <h1>Register Page</h1>
          <br>
          <nuxt-link to="/login">Go to login</nuxt-link>
          <br>
          <nuxt-link to="/">Go to home</nuxt-link>  
          <hr>
          <fieldset>
               <label for="nama">Nama</label>
               <input v-model="form.nama" type="nama" name="nama" id="nama" placeholder="Masukan nama">
               <br>
               <label for="email">Email</label>
               <input v-model="form.email" type="email" name="email" id="email" placeholder="Masukan email">
               <br>
               <label for="">Pasword</label>
               <input v-model="form.password" type="text" name="Pasword" id="Pasword">
               <br>
               <button>Submit</button>
          </fieldset>
     </div>
</template>
<script setup lang="ts">
useHead({ title: 'Register' });
definePageMeta({
     middleware: 'unauth'
});
const form = reactive({
     nama: '',
     email: '',
     password: ''
});
</script>