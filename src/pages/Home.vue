<template>
  <div class="absolute top-0 left-0 right-0 bg-gray-600 text-white">

    <!--LANDING--> 
    <section class="">
      <div class="mt-48 flex flex-col items-center justify-items-center">
        <h1 class="text-6xl"><b>Integrate your favourite data</b></h1>
        <p class="text-xl opacity-70 mt-3">Everything you need to work smarter in one place</p>
        <div class="relative flex flex-row items-center mt-4 mb-24 w-96">
          <input type="text" placeholder="Zoek een plugin!" class="border-gray-300 border rounded-md shadow-xl px-6 py-4 pl-10 w-full">
          <svg class="absolute text-gray-300 left-4 w-5 h-5" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-linecap="round" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linejoin="round"><circle cx="11.059" cy="11.059" r="7.059"></circle><line x1="20" x2="16.05" y1="20" y2="16.05"></line></g><rect width="24" height="24" fill="none"></rect></svg>
        </div>
      </div>
    </section>

    <!--MAIN PAGE--> 
    <section class="border-t border-black flex bg-gray-700">
      <!--LEFT COL--> 
      <div class="w-1/4 flex border-r border-black">
        <div class="w-1/3"></div>
        <Sidenav />
      </div>

      <!--RIGHT COL--> 
      <div class="w-3/4">
        <div class="grid grid-cols-3 mt-10 mx-12">
          <router-link :to="`/widget/${widget._id}`" v-for="widget in widgets" v-bind:key="widget.name"
            class="border rounded-xl m-4 flex flex-col text-center hover:shadow-2xl cursor-pointer">
            <div class="border-b rounded-t-xl py-4 w-full flex justify-center">
              <img class="w-32 h-32" :src="widget.icon"/>
            </div>
            <div class="p-4 rounded-b-xl bg-gray-600">
              <p class="font-bold text-xl">{{widget.name}}</p>
              <p>{{widget.tagline}}</p>
            </div>
          </router-link>
        </div>
        <!--FOOTER-->
        <Footer class="border-t border-black"/>
      </div>
    </section>
  
  </div>
</template>

<script>
import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';

export default {
  components: {
    Sidenav,
    Footer,
  },
  data() {
    return {
      widgets: [
        {
          _id: '0',
          name: 'blendr.io',
          icon: 'https://media-exp1.licdn.com/dms/image/C4D0BAQE7MzeBI60oWw/company-logo_200_200/0?e=2159024400&v=beta&t=CbALwPayFNnEt819BJ__P-CZj8rt46RuZziMmUFpAKI',
          tagline: 'Data integration and cloud automation',
        },
        {
          _id: '0',
          name: 'blendr.io',
          icon: 'https://media-exp1.licdn.com/dms/image/C4D0BAQE7MzeBI60oWw/company-logo_200_200/0?e=2159024400&v=beta&t=CbALwPayFNnEt819BJ__P-CZj8rt46RuZziMmUFpAKI',
          tagline: 'Data integration and cloud automation',
        },
        {
          _id: '0',
          name: 'blendr.io',
          icon: 'https://media-exp1.licdn.com/dms/image/C4D0BAQE7MzeBI60oWw/company-logo_200_200/0?e=2159024400&v=beta&t=CbALwPayFNnEt819BJ__P-CZj8rt46RuZziMmUFpAKI',
          tagline: 'Data integration and cloud automation',
        },
        {
          _id: '0',
          name: 'blendr.io',
          icon: 'https://media-exp1.licdn.com/dms/image/C4D0BAQE7MzeBI60oWw/company-logo_200_200/0?e=2159024400&v=beta&t=CbALwPayFNnEt819BJ__P-CZj8rt46RuZziMmUFpAKI',
          tagline: 'Data integration and cloud automation',
        },
        {
          _id: '0',
          name: 'blendr.io',
          icon: 'https://media-exp1.licdn.com/dms/image/C4D0BAQE7MzeBI60oWw/company-logo_200_200/0?e=2159024400&v=beta&t=CbALwPayFNnEt819BJ__P-CZj8rt46RuZziMmUFpAKI',
          tagline: 'Data integration and cloud automation',
        },

      ],
    };
  },
}
</script>

<style>

</style>