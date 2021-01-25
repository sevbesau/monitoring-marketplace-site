<template>
  <div class="h-screen flex flex-row">
    <div class="sm:hidden md:block md:w-4/12  bg-white h-screen relative overflow-hidden bg-no-repeat bg-center bg-cover"  :style="'background-image: url('+bg+');'">
      <div class="mt-20 absolute top-0 w-full flex flex-row items-center justify-center">
        <!-- <img src="" alt="" class="w-56"> -->
      </div>
    </div>
    <div class="w-8/12 sm:w-full md:w-8/12 bg-white h-screen flex flex-col items-center justify-between py-20">
      <div class="w-8/12 flex flex-row items-center justify-start">
      </div>
      <div class="w-8/12">
          <h2 class="lg:text-3xl tracking-tighter font-semibold sm:text-4xl">Welcome aboard {{member.firstname}}! </h2>
          <p class="text-sm text-gray-600">Tell us a little bit more about yourself so we can configure your account.</p>


        <div v-if="false" class="mt-10">
          <label class="text-sm text-gray-600">Invite id</label>
          <input type="text" class="px-4 text-sm py-3 border border-gray-300 w-full rounded-lg" placeholder="Email adress" v-model="$route.params.id">
        </div>

        <div class="mt-5">
          <label class="text-sm text-gray-600">Set a password</label>
          <input type="password" class="px-4 text-sm py-3 border border-gray-300 w-full rounded-lg" placeholder="Awesome password" v-model="member.password" autocomplete="new-password">
        </div>


          <button @click="submit()" class="w-full px-3 mt-8 bg-indigo-500 text-white py-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-600 transition duration-200">Get started</button>
          <div class="relative py-3">
            <p v-if="error" class="absolute text-red-500 mt-5 font-medium text-sm outline-none">{{error}}</p>
          </div>
      </div>
      <div class="w-8/12">
        <a href="http://sputnikOS.com" class="text-gray-400 text-sm">&#169; 2020 Sputnik </a>
      </div>
    </div>
  </div>
</template>

<script>
import env from '@/../env.js';
const axios = require('axios');
import auth from '@/helpers/auth';

export default {
  name: 'login',
  data() {
    return {
      bg: 'https://images.unsplash.com/photo-1558095625-f882e3436125?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
      error: false,
      error_animation: false,
      user: {},
      member: {
        password: "",
        firstname: '',
      }
    }
  },
  methods: {
    async submit() {
      axios.put(env.apiURL + '/users/'+this.$route.params.id+'/onboard', {
        password: this.member.password,
      }, {
        headers: {
          'Authorization': 'Bearer '+auth.cookies.get('session')
        }
      }).then(async function (response) {
        console.log(response);
        alert('Ok everything is configured. Try to login now.');
        document.location.href = '/';
        // document.location.reload();
      });
    },
    async get() {
      const _self = this;
      axios.get(env.apiURL + '/users/'+this.$route.params.id+'/onboard', {
        headers: {
          'Authorization': 'Bearer '+auth.cookies.get('session')
        }
      }).then(async function (response) {
        _self.member = response.data;
        if(!_self.member.firstname){
          alert('Euhm...')
        }
      });
    },
  },
  async mounted() {
    this.user = await auth.me().catch(() => {});
    if (this.user && this.user._id) {
      this.$router.replace({ name: "overview" });
    }
    this.get();
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        this.submit();
      }
    });
  },
}
</script>
