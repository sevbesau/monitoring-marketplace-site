<template>
  <div class="absolute top-0 left-0 right-0 bg-gray-600 text-white">
    <section class="mt-28 flex border-t border-black bg-gray-700">
      <!--LEFT COL--> 
      <div class="w-1/4 flex border-r border-black">
        <div class="w-1/3"></div>
        <div class="flex flex-col">
          <div class="relative flex flex-row items-center mt-16 w-3/4">
            <input type="text" placeholder="Zoek een widget!" 
              class="border-gray-300 border rounded-md shadow-xl px-6 py-2 pl-10 w-full">
            <svg class="absolute text-gray-300 left-4 w-5 h-5" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-linecap="round" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linejoin="round"><circle cx="11.059" cy="11.059" r="7.059"></circle><line x1="20" x2="16.05" y1="20" y2="16.05"></line></g><rect width="24" height="24" fill="none"></rect></svg>
          </div>
          <Sidenav />
        </div>
      </div>

      <!--RIGHT COL--> 
      <div class="w-3/4 flex flex-col">
        <div class="p-16 border-b border-black">
          <h2 class="text-4xl font-bold mb-2">{{widget.name}}</h2>
          <p class="text-2xl opacity-90">{{widget.tagline}}</p>
        </div>
        <div class="flex p-16">
          <div class="w-1/5 flex flex-col">
            <img class="w-full rounded-md" :src="widget.icon" alt="">
            <button class="w-full mt-6 py-2 px-4 bg-green-600 rounded-md">ADD</button>
            <p class="border-t border-black mt-8 pt-8 text-lg opacity-80">Developer</p>
            <p class="cursor-pointer text-blue-400 text-xl">{{widget.author.firstname}} {{widget.author.lastname}}</p>
          </div>
          <div class="px-16" id="description">{{widget.description}}</div>
          <div class=""></div>
        </div>
        <!--FOOTER-->
        <Footer class="mt-40 border-t border-black"/>
      </div>
    </section>
  
  </div>
</template>

<script>
import Sidenav from '../../components/Sidenav';
import Footer from '../../components/Footer';

import env from '../../../env';
import api from '../../helpers/api';

export default {
  components: {
    Sidenav,
    Footer,
  },
  data() {
    return {
      widget: {},
    };
  },
  async mounted() {
    this.widget = await api.get(`${env.apiURL}/widgets/${this.$route.params.widgetId}`);
  }
}
</script>

<style>
</style>