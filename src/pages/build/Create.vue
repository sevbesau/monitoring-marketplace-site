<template>
  <div class="absolute top-0 left-0 right-0 bg-gray-600 text-white">
    <section class="mt-28 flex border-t border-black bg-gray-700">
      <!--LEFT COL--> 
      <div class="w-1/4 flex border-r border-black">
        <div class="w-1/3"></div>
        <Sidenav />
      </div>

      <!--RIGHT COL--> 
      <div class="w-3/4 flex flex-col">
        <div class="p-16 border-b border-black">
          <h2 class="text-4xl font-bold mb-2">Create widget</h2>
          <p class="text-2xl opacity-90">Start creating a new widget</p>
        </div>
        <div class="flex p-16">
          <div class="w-10/12 flex flex-col items-start">
            <label class="text-2xl mb-1" for="name">Name of the widget</label>
            <input class="rounded p-2 w-full text-black" type="text" id="name" v-model="widget.name">
            <p class="mt-1 opacity-80">This will be the name displayed on the Marketplace.</p>
            <button @click="create()" class="py-2 px-4 mt-24 mb-64 rounded bg-white text-black">CREATE INTEGRATION</button>
          </div>
        </div>
        <!--FOOTER-->
        <Footer class="border-t border-black"/>
      </div>
    </section>
  
  </div>
</template>

<script>
import Sidenav from '../../components/BuildSidenav';
import Footer from '../../components/Footer';

import env from '../../../env';
import api from '../../helpers/api';
import auth from '../../helpers/auth';

export default {
  components: {
    Sidenav,
    Footer,
  },
  data() {
    return {
      widget: { name: '' },
    }
  },
  methods: {
    async create() {
      const data = await api.post(`${env.apiURL}/widgets/create`, this.widget);
      this.$router.push('/build/widget/'+data._id);
    }
  },
  mounted() {
    auth.me().catch(() => this.$router.push('/'));
  }
}
</script>

<style>
</style>