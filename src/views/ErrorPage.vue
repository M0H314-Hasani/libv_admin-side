<template>
  <HttpErrorLayout>
    <div class="col-md-8 col-12 offset-md-2">
      <div class="text-center">
        <img
          class="img-error"
          :src="(() => `/assets/images/samples/error-${props.code}.svg`)()"
          alt="Not Found"
        />
        <h1 class="error-title">{{ props.title }}</h1>
        <p class="fs-5 text-gray-600">{{ props.description }}</p>
        <button
          @click="router.back()"
          class="btn btn-lg btn-outline-primary mt-3"
        >
          بازگشت
        </button>
      </div>
    </div>
  </HttpErrorLayout>
  <router-link to="/login">LOGIN</router-link>
</template>

<script setup>
import HttpErrorLayout from '@/views/layouts/HttpErrorLayout.vue';
import { useRouter } from 'vue-router';

const props = defineProps(['code', 'title', 'description']);

const router = useRouter();
</script>

<script>
/**
 * @category Pages
 * @subcategory Pages
 * @desc This Page is for showing http errors
 */
export default {};
</script>
