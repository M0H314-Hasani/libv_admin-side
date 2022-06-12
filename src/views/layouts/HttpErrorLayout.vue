<template>
  <ExternalStyle
    src="assets/css/pages/error.rtl.css"
    @onLoaded="loaded = true"
  />
  <div id="error" v-show="loaded">
    <div class="error-page container">
      <slot></slot>
    </div>
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
 * @desc This layout used for error pages like 404,500,...
 * @vue-slot DEFAULT This is default slot
 */
export default {};
</script>
