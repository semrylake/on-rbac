<template>
     <div>
          <h1>Dashboard Page</h1>
          <hr>
          <p>Secret page</p>
          <hr>
          <button @click="onlogout">Logout</button>
     </div>
</template>
<script setup lang="ts">
useHead({ title: 'Dashboard' });
definePageMeta({
     middleware: 'auth'
});
const onlogout = async () => {
     try {
          await $fetch('/api/logout');
          window.location.reload()
     } catch (error) {
          alert('failed to logout');
     }
};
</script>