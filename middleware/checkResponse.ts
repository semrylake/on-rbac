import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
export default defineNuxtRouteMiddleware(async (to, from) => {
  // Gunakan fetch untuk mengintercept setiap request
//   addInterceptor();
//   function addInterceptor() {
//     const $fetch = useFetch();

//     $fetch.status.onResponse((ctx) => {
//       const status = ctx.response.status;
//       if (status === 401) {
//         // Redirect ke halaman login jika tidak terotentikasi
//         return navigateTo("/login");
//       }
//       //  else if (status === 403) {
//       //    // Arahkan ke halaman akses ditolak
//       //    return navigateTo("/forbidden");
//       //  } else if (status === 500) {
//       //    // Tampilkan pesan error server internal atau arahkan ke halaman khusus
//       //    console.error("Server Error: ", ctx.response.statusText);
//       //    return navigateTo("/server-error");
//       //  }
//     });
//     // Tambahkan interceptor untuk error
//     $fetch.onError((error) => {
//       console.error("Fetch Error:", error);
//       return navigateTo("/error"); // Redirect ke halaman error umum jika ada error lain
//     });
//   }
});
