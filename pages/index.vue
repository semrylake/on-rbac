<template>
  <div class="bg-slate-900 font-sans h-auto">
    <header class="flex items-center justify-between py-4 border-b px-40 border-slate-800">
      <div class="flex items-center justify-between">
        <span class="text-xl font-semibold text-white">
          OnRBAC</span>
      </div>
      <nav class="space-x-6 text-gray-600">
      </nav>

    </header>

    <main class="flex flex-wrap items-center justify-center h-screen bottom-0" style="margin-top: -70px;">
      <div class="flex flex-wrap px-40">
        <div class="w-full self-center px-4 lg:w-1/2">
          <h1 class="text-base font-semibold text-teal-400 md:text-xl">
            <!-- OnRBAC -->
            <span class="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white">Role-Based Access
              Control</span>
          </h1>

          <p class="text-secondary mb-10 mt-10 font-medium leading-relaxed">
            RBAC atau Role-Based Access Control digunakan sebagai manajemen akses yang mengatur hak akses pengguna
            berdasarkan peran (role). RBAC membantu
            menentukan siapa yang dapat mengakses data atau fitur tertentu dalam aplikasi berdasarkan peran yang
            diberikan.
          </p>
          <nuxt-link class="px-6 py-2 bg-white text-gray-900 font-bold rounded hover:bg-gray-200"
            to="/login">Login</nuxt-link>
        </div>
        <div class="w-full self-end px-4 lg:w-1/2">
          <div class="mt-10 relative lg:mt-9 lg:right-0">
            <img width="300" height="300" src="/assets/images/Programmer-amico.png"
              class="max-w-full mx-auto relative z-10" />
          </div>
        </div>
      </div>
      <!-- </div> -->
    </main>

  </div>
</template>
<script setup lang="ts">
useHead({ title: 'Home' });
// import  "~/assets/berry/css/landing.css"
</script>