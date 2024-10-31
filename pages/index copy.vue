<template>
     <div>
          <nav class="navbar navbar-expand-md navbar-light default">
               <div class="container">
                    <a class="navbar-brand" href="#">
                         <img src="@/assets/images/logo.png" width="50" alt="logo" class="img-fluid"> <strong>ONRBAC</strong>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                         data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                         aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                         <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                              <li class="nav-item">
                                   <nuxt-link class="btn btn-info"to="/register_oldpage">Daftar</nuxt-link>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
          <header id="home">
               <div class="container">
                    <div class="row align-items-center justify-content-center text-center">
                         <div class="col-lg-9 col-xl-6">
                              <h1 class="mt-sm-3 mb-sm-4 f-w-600 wow fadeInUp" data-wow-delay="0.2s">
                                   Aplikasi Verifikasi e-STR Fasyankes
                              </h1>
                              <h4 class="mb-sm-4 text-muted wow fadeInUp" data-wow-delay="0.4s">
                                   Cek dan validasi keabsahan data STR Tenaga Kesehatan yang bekerja di Fasyankes Anda di sini.
                              </h4>
                              <div class="my-3 my-xl-5 wow fadeInUp" data-wow-delay="0.6s">
                                   <nuxt-link class="btn btn-info me-2" to="/login">Masuk</nuxt-link>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     </div>
</template>
<script setup lang="ts">
useHead({ title: 'Home' });
// import  "~/assets/berry/css/landing.css"
</script>