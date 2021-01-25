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
            <router-link to="http://webfaster.com" class=" text-blue-400 text-xl">Webfaster</router-link>
          </div>
          <div class="px-16" id="description"></div>
          <div class=""></div>
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

import { Remarkable } from 'remarkable';

export default {
  components: {
    Sidenav,
    Footer,
  },
  data() {
    return {
      widget: {
        name: 'blendr.io',
        icon:'https://marketplace-static.teamleader.eu/icons/446638a8-bf79-49ea-a34f-28e2242c66c6.png?v=1519738583',
        tagline: 'Data integration and cloud automation',
        description: `Blendr.io is a data integration and cloud automation platform. Create "Data Blends" to connect your sales & marketing cloud tools, for example, to orchestrate customer journeys, to perform data enrichment or to centrally manage your data for compliance with GDPR.

Advantages of using Blendr.io

- Integrate +100 marketing and sales tools with Teamleader, including marketing automation applications, social media accounts, mailing tools, project management, e-commerce platforms, helpdesks and more. For example, Marketo, Clearbit, Gravity Forms, Hubspot, My SQL and many more.
- Automate all your data flows across multiple tools.
- Sync, combine and enrich your data.

Advantages of the integration:

- Create Data Blends to enrich your leads' and customers' data in Teamleader by connecting them with data enrichment applications.
- Automate any of your data flows, e.g. send data from your website sign up forms directly to Teamleader.
- Easily sync and combine your Teamleader data with data on your other sales and marketing applications.
- Create dashboards to access your customer information across all applications.
- Generate more leads by, e.g. connecting your Teamleader account to Facebook Ads and automatically creating lookalike campaigns to target people similar to your existing customers.
        `,
      },
    };
  },
  mounted() {
    const md = new Remarkable();
  document.getElementById('description').innerHTML = md.render(this.widget.description);
  }
}
</script>

<style>
</style>