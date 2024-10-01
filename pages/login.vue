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
               <br>
               <!-- <div>{{mydata.captcha}}</div> -->
               <div v-html="mydata.captcha" style="border: 1px solid gray; width: 200px; border-radius: 5px"></div>
               <br>
               <button @click="getCaptcha">Refresh Captcha</button>
               <input v-model="formcaptcha.captcha" placeholder="Enter the captcha text" />
               <br>
               <span v-if="errorRes.errorStatus == true" style="color: red;">{{ errorRes.errorMessage }}</span>
               <br>
               <button @click="onLogin">Login</button>
          </fieldset>

     </div>
</template>
<script setup lang="ts">
// import { ref, onMounted } from 'vue';
// import { useFetch } from '#app';
import images from '~/assets/images/bg-captcha.png';
import captcha from '~/server/api/captcha';
useHead({ title: 'Login' });
definePageMeta({
     middleware: 'unauth'
});

const form = reactive({
     email: '',
     password: '',
});
const formcaptcha = reactive({
     captcha: '',
});
const errorRes = reactive({
     errorStatus: false,
     errorMessage: '',
});
const mydata = reactive({
     captcha: '',
     lanjutlogin: false,
});
// fungsi call to api login
const onLogin = async () => {
     try {
          const datacaptcha = await $fetch('/api/verify-captcha', {
               method: 'POST',
               body: formcaptcha,
          });
          if (datacaptcha.valid == false) {
               errorRes.errorMessage = datacaptcha.message;
               errorRes.errorStatus = true;
          } else {
               mydata.lanjutlogin = true;
          }

          if (mydata.lanjutlogin == true) {
               const result = await $fetch('/api/login', {
                    method: 'POST',
                    body: form
               });
               console.log("====== status", result.status)
               if (result.status) {
                    window.location.replace('/dashboard');
               } else {
                    errorRes.errorStatus = true;
                   errorRes.errorMessage = result.message;
               }
          }
     } catch (error) {
          console.log(error);
          alert('failed to login');
     }
     formcaptcha.captcha = '';
     getCaptcha(); 
};
// var captchaSvg = '';
const userInput = ref('');
const captchaInput = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const getCaptcha = async () => {
     const datacp = await $fetch('/api/captcha');
     mydata.captcha = datacp.svg // Memperbarui SVG CAPTCHA
};
onMounted(() => {
     getCaptcha(); // Mendapatkan CAPTCHA saat komponen pertama kali di-mount
});
</script>