<template>
  <div class="absolute top-0 left-0 right-0 bg-gray-600 text-white">
    <section class="">
      <div class="mt-48 flex flex-col items-center justify-items-center">
        <h1 class="text-6xl"><b>Build a widget</b></h1>
        <p class="text-xl opacity-70 mt-3">Create your own widgets and add them to the marketplace</p>
        <router-link class="p-3 mt-16 bg-white text-black rounded" to="/build/widgets">DEVELOP YOUR WIDGETS</router-link>
      </div>
    </section>
    
    <section class="mt-16 flex bg-gray-700 flex-col items-center">
      <h2 class="mt-24 font-semibold text-5xl">Get Started</h2>
      <p class="text-xl opacity-70 mt-3">Everything you need to know about building widgets</p>
      <div class="container mx-auto my-8 max-w-5xl flex flex-row p-4">
        <router-link to="" class="flex flex-col items-center text-center">
          <svg class="w-16 h-16" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-linecap="round" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linejoin="round"><path d="M12 21v0l-2.95404e-08-5.91179e-08c-.613226-1.22722-1.8681-2.00176-3.24-1.9998h-4.2606l-5.60656e-08 3.73035e-13c-.82809 5.4919e-06-1.49939-.67129-1.4994-1.49938 -4.42135e-11-6.66672e-06-4.39639e-11-1.33334e-05 7.48734e-13-2.00002e-05h-3.75699e-13v-12.001l-3.33298e-11-9.77363e-06c-1.25038e-07-.82809.6713-1.49939 1.49939-1.49939 6.66668e-06-1.00631e-12 1.33334e-05 4.24496e-11 2.00001e-05 1.30369e-10h3.501l6.41191e-08 1.58096e-13c2.20891 5.43323e-06 3.99959 1.79069 3.99959 3.9996v0Z"></path><path d="M12 21v0l1.77266e-07-3.54754e-07c.613226-1.22722 1.8681-2.00176 3.24-1.9998h4.2642l-2.36027e-08 5.68328e-11c.826687-.00199055 1.4958-.672711 1.4958-1.4994v-12.001l3.33458e-11-1e-05c0-.82809-.6713-1.49939-1.49939-1.49939 -6.66668e-06 0-1.33334e-05 4.44631e-11-2.00001e-05 1.33388e-10h-3.501l-1.87374e-07 4.73399e-13c-2.20891 5.62634e-06-3.99959 1.79069-3.99959 3.9996v0Z"></path></g><rect width="24" height="24" fill="none"></rect></svg>
          <h3 class="text-2xl text-blue-500">Knowledge Base</h3>
          <p>Have a look at our knowledge base articles relating to building your own widget</p>
        </router-link>
        <router-link to="" class="flex flex-col items-center text-center">
          <svg class="w-16 h-16" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-linecap="round" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linejoin="round"><path d="M12 21v0l-2.95404e-08-5.91179e-08c-.613226-1.22722-1.8681-2.00176-3.24-1.9998h-4.2606l-5.60656e-08 3.73035e-13c-.82809 5.4919e-06-1.49939-.67129-1.4994-1.49938 -4.42135e-11-6.66672e-06-4.39639e-11-1.33334e-05 7.48734e-13-2.00002e-05h-3.75699e-13v-12.001l-3.33298e-11-9.77363e-06c-1.25038e-07-.82809.6713-1.49939 1.49939-1.49939 6.66668e-06-1.00631e-12 1.33334e-05 4.24496e-11 2.00001e-05 1.30369e-10h3.501l6.41191e-08 1.58096e-13c2.20891 5.43323e-06 3.99959 1.79069 3.99959 3.9996v0Z"></path><path d="M12 21v0l1.77266e-07-3.54754e-07c.613226-1.22722 1.8681-2.00176 3.24-1.9998h4.2642l-2.36027e-08 5.68328e-11c.826687-.00199055 1.4958-.672711 1.4958-1.4994v-12.001l3.33458e-11-1e-05c0-.82809-.6713-1.49939-1.49939-1.49939 -6.66668e-06 0-1.33334e-05 4.44631e-11-2.00001e-05 1.33388e-10h-3.501l-1.87374e-07 4.73399e-13c-2.20891 5.62634e-06-3.99959 1.79069-3.99959 3.9996v0Z"></path></g><rect width="24" height="24" fill="none"></rect></svg>
          <h3 class="text-2xl text-blue-500">API Documentation</h3>
          <p>Learn more about our API and other technical aspects of our tool</p>
        </router-link>
        <router-link to="" class="flex flex-col items-center text-center">
          <svg class="w-16 h-16" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-linecap="round" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linejoin="round"><path d="M12 21v0l-2.95404e-08-5.91179e-08c-.613226-1.22722-1.8681-2.00176-3.24-1.9998h-4.2606l-5.60656e-08 3.73035e-13c-.82809 5.4919e-06-1.49939-.67129-1.4994-1.49938 -4.42135e-11-6.66672e-06-4.39639e-11-1.33334e-05 7.48734e-13-2.00002e-05h-3.75699e-13v-12.001l-3.33298e-11-9.77363e-06c-1.25038e-07-.82809.6713-1.49939 1.49939-1.49939 6.66668e-06-1.00631e-12 1.33334e-05 4.24496e-11 2.00001e-05 1.30369e-10h3.501l6.41191e-08 1.58096e-13c2.20891 5.43323e-06 3.99959 1.79069 3.99959 3.9996v0Z"></path><path d="M12 21v0l1.77266e-07-3.54754e-07c.613226-1.22722 1.8681-2.00176 3.24-1.9998h4.2642l-2.36027e-08 5.68328e-11c.826687-.00199055 1.4958-.672711 1.4958-1.4994v-12.001l3.33458e-11-1e-05c0-.82809-.6713-1.49939-1.49939-1.49939 -6.66668e-06 0-1.33334e-05 4.44631e-11-2.00001e-05 1.33388e-10h-3.501l-1.87374e-07 4.73399e-13c-2.20891 5.62634e-06-3.99959 1.79069-3.99959 3.9996v0Z"></path></g><rect width="24" height="24" fill="none"></rect></svg>
          <h3 class="text-2xl text-blue-500">Contact us</h3>
          <p>Need help or do you have a question? Find your answer here!</p>
        </router-link>
      </div>
    </section>

    <section class="flex border-t pt-8 border-black bg-gray-700">
      <div class="w-full flex flex-col">
        <div class="pt-8 text-center">
          <h2 class="font-semibold text-5xl">Ready?</h2>
          <p class="text-xl opacity-70 mt-3 mb-8">Start creating widgets now!</p>
          <router-link class="p-3 mt-8 bg-white text-black rounded" to="/build/widgets">DEVELOP YOUR WIDGETS</router-link>
        </div>
        <!--FOOTER-->
        <Footer class="border-t mt-32 border-black"/>
      </div>
    </section>
  
  </div>
</template>

<script>
import Footer from '../../components/Footer';
import auth from '../../helpers/auth';
import api from '../../helpers/api';
import env from '../../../env';

export default {
  components: {
    Footer,
  },
  async mounted() {
    auth.me().catch(() => this.$router.push('/'));
    const widgets = await api.get(`${env.apiURL}/widgets/byUser`);
    if (widgets.length > 0) this.$router.push('/build/widgets/')
  }
}
</script>

<style>
</style>