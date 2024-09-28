<template>
     <div>
          <h1>Login Page</h1>
          <br>
          <nuxt-link to="/register">Go to register</nuxt-link>
          <br>
          <nuxt-link to="/">Go to home</nuxt-link>
          <br>
          <hr>
          <fieldset>
               <label for="">Email</label>
               <input v-model="form.email" type="email" name="email" id="email" placeholder="Masukan email">
               <br>
               <label for="">Pasword</label>
               <input v-model="form.password" type="text" name="Pasword" id="Pasword">
               <br>
               <span v-if="errorRes.errorStatus == true" style="color: red;">{{ errorRes.errorMessage }}</span>
               <br>
               <button @click="onLogin">Login</button>
          </fieldset>

     </div>
</template>
<script setup lang="ts">
useHead({ title: 'Login' });
definePageMeta({
     middleware: 'unauth'
});
const form = reactive({
     email: '',
     password: '',

});
const errorRes = reactive({
     errorStatus: false,
     errorMessage: ''
});
// fungsi call to api login
const onLogin = async () => {
     try {
          const result = await $fetch('/api/login', {
               method: 'POST',
               body: form
          });
          if (result.success) {
               window.location.replace('/dashboard');
          } else {
               errorRes.errorMessage = result.message;
               errorRes.errorStatus = true;
          }
          // if (result["status"]) {
               // await navigateTo('/dashboard');
          // } else {

          // }
          // if (result.success) {
          // } else {
          //      errorRes.errorMessage = result.message;
          //      errorRes.errorStatus = true;
          // }


     } catch (error) {
          console.log(error);
          // throw createError({
          //      statusCode: 500,
          //      statusMessage: "Something went wrong"
          // })
          alert('failed to login');
     }
};
</script>