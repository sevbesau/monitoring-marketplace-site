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
          <h2 class="text-4xl font-bold mb-2">{{widget.name}}</h2>
          <p class="text-2xl opacity-90">Manage your widget</p>
        </div>
        <div class="flex max-w-6xl p-16">
          <div class="w-full flex flex-col items-start">
            <!--GENERAL INFO-->
            <p class="text-xl font-semibold">General information</p>
            <p class="text-xl opacity-80">Let's start with the basics</p>
            <div class="flex w-full justify-between">
              <div class="mt-3 w-full mr-16 flex flex-col">
                <div>
                  <label class="text-xl opacity-80 mb-1" for="name">Name of the widget</label>
                  <input class="rounded p-2 w-full text-black" type="text" id="name" v-model="widget.name">
                  <p class="mt-1 opacity-80">This will be the name displayed on the Marketplace.</p>
                </div>
                <div>
                  <label class="text-xl opacity-80 mb-1 mt-3" for="tagline">Tagline</label>
                  <input class="rounded p-2 w-full text-black" type="text" id="tagline" v-model="widget.tagline">
                  <p class="mt-1 opacity-80">This will be the slogan displayed on the Marketplace.</p>
                </div>
              </div>
              <div class="mt-3 flex flex-col">
                <img @click="$refs.picture.click()" class="border-white border rounded-lg h-48 w-48 cursor-pointer" :src="widget.icon" alt="+">
                <input ref="picture" @change="uploadPicture" type="file" style="display: none;">
              </div>
            </div>
            <div class="w-full mt-3">
              <label class="text-xl opacity-80 mb-1" for="description">Description</label>
              <p class="mt-1 opacity-80">You can use markdown here</p>
              <textarea rows="4" class="rounded p-2 w-full text-black" type="text" id="description" v-model="widget.description" />
            </div>
            
            <!--TECHNICAL INFO-->
            <div class="mt-16">
              <p class="text-xl font-semibold">Technical information</p>
              <p class="text-xl opacity-80">This is where we make it work</p>
            </div>

            <div class="w-full mt-3">
              <label class="text-xl opacity-80 mb-1" for="apiUrl">API</label>
              <input class="rounded p-2 w-full text-black" type="text" id="apiUrl" v-model="widget.apiUrl">
              <p class="mt-1 opacity-80">The url of the api endpoint we should query</p>
            </div>
            
            <div class="w-full mt-3">
              <label class="text-xl opacity-80 mb-1" for="apiKey">Json key</label>
              <input class="rounded p-2 w-full text-black" type="text" id="apiKey" v-model="widget.apiKey">
              <p class="mt-1 opacity-80">The key we should look for in the api response to parse data from</p>
            </div>

            <button @click="save()" class="py-2 px-4 mt-24 rounded bg-white text-black">UPDATE WIDGET</button>
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
      widget: { 
        name: '', 
        tagline: '',
        icon: '',
        description: '',
        apiUrl: '',
        apiKey: '',
      },
    }
  },
  methods: {
    async save() {
      const res = await api.put(`${env.apiURL}/widgets/${this.$route.params.widgetId}`, this.widget);
      console.log(res);
    },
    uploadPicture: async function (e) {
      let droppedFiles = e.target.files;
      if (!droppedFiles) return;
      if (droppedFiles.length !== 1) return;
      let formData = new FormData();
      formData.append('file', droppedFiles[0]);
      const res = await api.post(`${env.apiURL}/uploads`, formData)
      console.log(res);
    },
  },
  async mounted() {
    auth.me().catch(() => this.$router.push('/'));

    const data = await api.get(`${env.apiURL}/widgets/${this.$route.params.widgetId}`);
    console.log(data);
    this.widget = data;
  }
}
</script>

<style>
</style>