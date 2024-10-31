<template>
     <div class="bg-slate-900 font-sans h-auto">
          <header class="flex items-center justify-between py-4 border-b px-40 border-slate-800">
               <div class="flex items-center space-x-2">
                    <span class="text-xl font-semibold text-white">OnRBAC</span>
               </div>
               <nav class="space-x-6 text-gray-600">
                   
                    <!-- <a href="#" class="hover:text-black">Components</a>
                    <a href="#" class="hover:text-black">Themes</a>
                    <a href="#" class="hover:text-black">Examples</a>
                    <a href="#" class="hover:text-black">Blocks</a>
                    <a href="#" class="hover:text-black">GitHub</a> -->
               </nav>
               <!-- <div class="flex items-center space-x-4"> -->
                    <!-- <input type="text" placeholder="Search documentation..."
                         class="border rounded px-4 py-1 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <button class="text-gray-600 hover:text-black">⚙️</button>
                    <button class="text-gray-600 hover:text-black">👤</button>
                    <button class="text-gray-600 hover:text-black">🌙</button> -->
                    <!-- <a href="#" class="hover:text-black">Docs</a> -->
               <!-- </div> -->
          </header>

          <main class="flex flex-col items-center justify-center h-screen text-center bottom-0">
               <span class="bg-gray-100 text-gray-600 px-3 rounded-full mb-4">🔐 Create with: shadcn, nuxt, tailwind
                    →</span>
               <h1 class="text-4xl font-bold text-white mb-10">Role-Based Access Control</h1>
               <p class="text-white mb-6 px-20">
                    RBAC atau Role-Based Access Control digunakan sebagai manajemen akses yang mengatur hak akses pengguna
                    berdasarkan peran (role). RBAC membantu
                    menentukan siapa yang dapat mengakses data atau fitur tertentu dalam aplikasi berdasarkan peran yang
                    diberikan.
               </p>
               <div class="flex space-x-4">
                    <!-- <button class="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">Masuk</button> -->
                    <nuxt-link class="px-6 py-2 bg-white text-gray-900 font-bold rounded hover:bg-gray-200"to="/login">Masuk</nuxt-link>
               </div>
          </main>

     </div>
</template>
<script setup lang="ts">
useHead({ title: 'Home' });
// import  "~/assets/berry/css/landing.css"
</script>