<template>
  <ExternalStyle
    src="assets/css/pages/auth.rtl.css"
    @onLoaded="loaded = true"
  />
  <div id="auth" v-show="loaded">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loaded = ref(false);
</script>

<script>
/**
 * @category Pages
 * @subcategory Layouts
 * @desc This layout used for auth related pages like login,register,...
 * @vue-slot DEFAULT This is default slot
 */
export default {};
</script>
