<template>
     <div class="bg-slate-50 flex justify-center items-center p-5">
          <!-- <div class="flex justify-center"> -->
          <Card class="w-full max-w-sm p-6 rounded shadow">
               <CardHeader>
                    <CardTitle class="text-2xl">
                         Login
                    </CardTitle>
                    <CardDescription>
                         Masukan Email dan Password
                    </CardDescription>
                    <hr>
               </CardHeader>
               <CardContent class="grid gap-4">
                    <div class="grid gap-2">
                         <Label for="email">Email</Label>
                         <Input id="email" v-model="form.email" type="email" required class="border-gray-300 rounded-lg"
                              style="border-radius: 5px;" />
                         <p class="text-red-400">{{ error_message.email }}</p>
                    </div>
                    <div class="grid gap-2">
                         <Label for="password">Password</Label>
                         <!-- Form Group -->

                         <!-- End Form Group -->
                         <div class="flex">
                              <Input id="password" v-model="form.password" type="password" required
                                   class="border-gray-300 rounded-lg" style="border-radius: 5px;" />
                              <!-- <Button class="bg-gray-950 text-white ml-1 h-auto hover:bg-gray-900"
                                   style="border-radius: 5px;" @click="changeTipePassword">
                                   <Icon name="uil:eye" class="" style="font-weight: bold; size: 5em;" />
                              </Button> -->
                         </div>
                         <div class="flex items-center space-x-2">
                              <Checkbox id="terms" @click="changeTipePassword" />
                              <label for="terms"
                                   class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                   Tampilkan Password
                              </label>
                         </div>
                         <p class="text-red-400">{{ error_message.password }}</p>
                    </div>
                    <div class="grid gap-2">

                         <Label for="captcha">Captcha</Label>
                         <div class="flex">
                              <div v-html="mydata.captcha"
                                   style="border: 1px solid #ced4da; width: 200px; height: 100%; border-radius: 5px;">
                              </div>
                              <Button class="bg-gray-950 text-white ml-2 h-auto hover:bg-gray-900"
                                   style="border-radius: 5px;" @click="getCaptcha">
                                   <Icon name="uil:refresh" class="" style="font-weight: bold; size: 5em;" />
                              </Button>

                         </div>
                         <Input id="captcha" type="captcha" required class="border-gray-300 rounded-lg"
                              v-model="formcaptcha.captcha" style="border-radius: 5px;" />
                    </div>
                    <div v-if="errorRes.errorStatus == true"
                         class="flex items-center p-4 mb-4 text-sm text-red-800 rounded bg-red-50 dark:bg-gray-800 dark:text-red-400"
                         role="alert">
                         <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                   d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                         </svg>
                         <span class="sr-only">Info</span>
                         <div>
                              {{ errorRes.errorMessage }}
                         </div>
                    </div>
               </CardContent>
               <CardFooter>
                    <Button type="button" class="w-full font-bold text-white bg-gray-950 hover:bg-gray-900"
                         style="border-radius: 5px;" @click="onLogin">
                         Masuk
                    </Button>
               </CardFooter>
          </Card>
          <!-- </div> -->
     </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Label from '~/components/ui/label/Label.vue';
import { Checkbox } from '@/components/ui/checkbox'
useHead({ title: 'Login' });
definePageMeta({
     middleware: 'unauth'
});
import captcha from '~/server/api/captcha';
const form = reactive({
     email: '',
     password: '',
});
const formcaptcha = reactive({
     captcha: '',
});
const res_api = ref(null);
const error_message = reactive({
     email: '',
     password: ''
})
const errorRes = reactive({
     errorStatus: false,
     errorMessage: '',
});
type ResApiCekCaptcha = {
     valid: boolean;
     message: string;
}
type ResApiGetCaptcha = {
     svg: string;
}

const mydata = reactive({
     captcha: '',
     lanjutlogin: false,
});

// fungsi call to api login
const onLogin = async () => {
     try {
          const datacaptcha = await $fetch<ResApiCekCaptcha>('/api/verify-captcha', {
               method: 'POST',
               body: formcaptcha,
          });
          errorRes.errorStatus = false;
          errorRes.errorMessage = '';
          const cpt_valid = datacaptcha.valid;
          const cpt_message = datacaptcha.message;
          if (!cpt_valid) {
               errorRes.errorMessage = cpt_message;
               errorRes.errorStatus = true;
          } else {
               mydata.lanjutlogin = true;
          }

          if (mydata.lanjutlogin == true) {
               res_api.value = await $fetch('/api/login', {
                    method: 'POST',
                    body: form
               });
               if (res_api.value.status) {
                    window.location.replace('/dashboard');
               } else {
                    errorRes.errorStatus = true;
                    errorRes.errorMessage = res_api.value.message;
                    if (res_api.value.error) {
                         error_message.email = res_api.value.error.email;
                         error_message.password = res_api.value.error.password;
                         // console.log(error_message.value.password)
                    } else {
                         error_message.email = '';
                         error_message.password = '';
                    }
               }
          }
          // if (formcaptcha.captcha != '' && formcaptcha.captcha.length == 0) {
          // }
     } catch (error) {
          // console.log(error)
          alert('Proses login gagal. Terjadi kesalahan pada sistem. Silahkan coba beberapa saat lagi');
     }
     formcaptcha.captcha = '';
     getCaptcha();

};
// var captchaSvg = '';
// const userInput = ref('');
// const captchaInput = ref('');
// const errorMessage = ref('');
// const successMessage = ref('');
const getCaptcha = async () => {
     const datacp = await $fetch<ResApiGetCaptcha>('/api/captcha');
     mydata.captcha = datacp.svg // Memperbarui SVG CAPTCHA
};

let showpassword = ref(false);
const changeTipePassword = async () => {
     showpassword.value = !showpassword.value
     if (showpassword.value) {
          document.getElementById("password")!.setAttribute('type', 'text');
     } else {
          document.getElementById("password")!.setAttribute('type', 'password');

     }
}
onMounted(() => {
     getCaptcha(); // Mendapatkan CAPTCHA saat komponen pertama kali di-mount
});
</script>