<template>
  <div>
    test
  </div>
</template>

<script lang="ts" setup>
useHead({ title: 'Dashboard' });
definePageMeta({
  layout: 'custom',
   middleware: 'auth'
});
</script>