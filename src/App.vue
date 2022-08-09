<template>
  <ExternalStyle
    src="assets/css/main/app.rtl.css"
    @onLoaded="ExternalStyleLoaded = true"
  />
  <RouterView v-if="ExternalStyleLoaded" />
</template>

<script setup>
import { ref } from 'vue';
import API from '@/utils/api/mainClient';

const ExternalStyleLoaded = ref(false);

API.get('sanctum/csrf-cookie');
</script>
