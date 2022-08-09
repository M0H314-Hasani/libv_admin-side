<template>
  <AuthLayout>
    <div class="row h-100">
      <div class="col-lg-5 col-12">
        <div id="auth-left">
          <div class="auth-logo">
            <a href="index.html"
              ><img src="/assets/images/logo/logo.svg" alt="Logo"
            /></a>
          </div>
          <h1 class="auth-title">Log in.</h1>
          <p class="auth-subtitle mb-5">
            Log in with your data that you entered during registration.
          </p>

          <form action="index.html">
            <div class="form-group position-relative has-icon-left mb-4">
              <input
                type="text"
                class="form-control form-control-xl"
                placeholder="Username"
              />
              <div class="form-control-icon">
                <i class="bi bi-person"></i>
              </div>
            </div>
            <div class="form-group position-relative has-icon-left mb-4">
              <input
                type="password"
                class="form-control form-control-xl"
                placeholder="Password"
              />
              <div class="form-control-icon">
                <i class="bi bi-shield-lock"></i>
              </div>
            </div>
            <div class="form-check form-check-lg d-flex align-items-end">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                class="form-check-label text-gray-600"
                for="flexCheckDefault"
              >
                Keep me logged in
              </label>
            </div>
            <button
              @click.prevent="login()"
              class="btn btn-primary btn-block btn-lg shadow-lg mt-5"
            >
              Log in
            </button>
          </form>
          <div class="text-center mt-5 text-lg fs-4">
            <p class="text-gray-600">
              Don't have an account?
              <a href="auth-register.html" class="font-bold">Sign up</a>.
            </p>
            <p>
              <a class="font-bold" href="auth-forgot-password.html"
                >Forgot password?</a
              >.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-7 d-none d-lg-block">
        <div id="auth-right"></div>
      </div>
    </div>
  </AuthLayout>
  <router-link to="/error">ERROR</router-link>
  <router-link to="/">Dashboard</router-link>
</template>

<script setup>
import AuthLayout from '@/views/layouts/AuthLayout.vue';
import auth from '@/services/auth';
import Client from '@/utils/api/mainClient';

const login = async () => {
  await auth.login({
    phone_number: '09302646919',
    password: 'Password2',
  });
  await Client.get('v1/check_auth');
  // try {
  //   await auth.login({
  //     phone_number: '09302646919',
  //     password: 'Password2',
  //   });
  // } catch (error) {
  //   Swal.fire({
  //     title: 'شکست عملیات',
  //     text: error.message,
  //     icon: 'error',
  //     confirmButtonText: 'باشه',
  //   });
  // }

  // await axios.post('http://api.libv.local/api/v1/login', {
  //   phone_number: '09302646919',
  //   password: 'Password1',
  // });

  // try {
  //   const { data } = await Client.get('v1/check_auth');
  //   console.log(data);
  // } catch ({ response: { data } }) {
  //   console.log(data);
  // }
};

// (!isInSSRComponentSetup || lifecycle === "sp" /* SERVER_PREFETCH */) &&
//     injectHook(lifecycle, hook, target);
// const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */);
// const onMounted = createHook("m" /* MOUNTED */);
// const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */);
// const onUpdated = createHook("u" /* UPDATED */);
// const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */);
// const onUnmounted = createHook("um" /* UNMOUNTED */);
// const onServerPrefetch = createHook("sp" /* SERVER_PREFETCH */);
// const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */);
// const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */);
// function onErrorCaptured(hook, target = currentInstance) {
//     injectHook("ec" /* ERROR_CAPTURED */, hook, target);
// }
</script>

<script>
/**
 * @category Pages
 * @subcategory Pages
 * @desc This is Login page
 */
export default {};
</script>
