<template>
  <div class='z-50 absolute left-0 right-0 text-white px-8 lg:container mx-auto p-8 flex justify-between items-center'>
    <router-link to="/explore" class="flex items-center">
      <img class="w-12 h-12" src="https://cdn.monitoring.app/logo.png" alt="">
      <div class="flex flex-col ml-2">
        <p class="text-lg font-semibold">Monitoring</p>
        <p class="text-md opacity-80">marketplace</p>
      </div>
    </router-link>
    <div>
      <!--MOBILE NAV-->
      <div class="lg:hidden">
        <div class="flex flex-col cursor-pointer"
          @click="showMenu = !showMenu">
          <div class="w-8 h-1 mb-2 bg-black"></div>
          <div class="w-8 h-1 mb-2 bg-black"></div>
          <div class="w-8 h-1 bg-black"></div>
        </div>
        <div v-if="showMenu" class=" absolute mt-8 right-0 left-0 flex flex-col shadow-lg bg-black z-50">
          <div class="relative flex flex-row items-center mx-8 py-4">
            <input type="text" placeholder="Zoek een plugin!" class="border-gray-300 border rounded-sm px-4 py-2 pl-8 w-full">
            <svg class="absolute text-gray-300 left-2 w-5 h-5" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-linecap="round" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linejoin="round"><circle cx="11.059" cy="11.059" r="7.059"></circle><line x1="20" x2="16.05" y1="20" y2="16.05"></line></g><rect width="24" height="24" fill="none"></rect></svg>
          </div>
          <router-link to="/explore" class="border-t border-b px-8 py-4">Explore</router-link>
          <router-link to="/build" class="border-b px-8 py-4">Build</router-link>
          <div v-if="!user">
            <router-link to="/login" class="border-2 rounded mx-8 text-center text-white py-2 mt-8">LOGIN</router-link>
            <router-link to="/signup" class="border-2 rounded mx-8 text-center text-black bg-white border-white py-2 mt-4 mb-8">START FOR FREE</router-link>
          </div>
          <div v-else>
            <p class="border-2 rounded m-8 text-center text-white py-2 cursor-pointer" @click="logout">LOGOUT</p>
          </div>
        </div>
      </div>

      <!--NAV-->
      <div class="hidden lg:flex items-center">
        <router-link class="mx-8 text-lg opacity-60" to="/explore">Explore</router-link> 
        <router-link class="mx-8 text-lg opacity-60" to="/build">Build</router-link> 

        <div v-if="user && user.firstname" class="ml-16 pl-24 flex items-center cursor-pointer" @click="showDropdown = !showDropdown">
          <p>{{user.firstname}} {{user.lastname}}</p>
          <img class="w-12 h-12 rounded-full ml-4" :src="user.avatar" alt="">
          <div :class="showDropdown ? '' : 'hidden'" class="flex flex-col absolute top-24 bg-gray-700 rounded-lg p-2 shadow-lg">
            <p class="mx-2 my-3 cursor-pointer" @click="logout">Logout</p>
            <a class="mx-2 my-3 cursor-pointer" href="">Go to Monitoring</a>
          </div>
        </div>

        <div class="flex items-center" v-else>
          <router-link class="border mx-3 text-center rounded opacity-60 p-2" to="/login">LOGIN</router-link>
          <router-link class="border mx-3 text-center rounded bg-black border-black p-2" to="/signup">START FOR FREE</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../helpers/auth';

export default {
  name: 'Header',
  data() {
    return {
      showMenu: false,
      showDropdown: false,
      user: {},
    };
  },
  methods: {
    logout() {
      auth.logout();
    }
  },
  async mounted() {
    this.user = await auth.me();
  }
}
</script>

<style scoped>
.router-link-active{
  opacity: 100;
}
</style>
