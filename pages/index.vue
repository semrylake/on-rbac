<template>
     <div>
          <h1>Home Page</h1>
          <hr>
          <nuxt-link to="/login">Go to login</nuxt-link>
          <br>
          <nuxt-link to="/register">Go to register</nuxt-link>
     </div>
</template>
<script setup lang="ts">
     useHead({ title: 'Home' });
</script>