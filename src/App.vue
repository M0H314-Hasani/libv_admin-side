<template>
  <ExternalStyle
    src="assets/css/main/app.rtl.css"
    @onLoaded="ExternalStyleLoaded = true"
  />
  <RouterView v-if="ExternalStyleLoaded" />
</template>

<script setup>
import { ref } from 'vue';

const ExternalStyleLoaded = ref(false);
</script>
