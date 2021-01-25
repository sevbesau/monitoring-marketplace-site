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
          <h2 class="text-4xl font-bold mb-2">Your widgets</h2>
          <p class="text-2xl opacity-90">Manage the widgets you're building</p>
        </div>
        <div class="flex justify-center p-16">
          <div v-if="widgets && widgets.length == 0" class="flex flex-col items-center mt-8">
            <svg class="w-24 h-24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-linecap="round" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linejoin="round"><path d="M18.67 6.7l-2.616-2.616 -6.52627e-08-6.52729e-08c-1.44483-1.44505-3.78754-1.44524-5.23259-.000409705 -.000136622.000136601-.000273234.000273213-.000409835.000409835l-1.173 1.173 -2.30036e-08 2.2959e-08c-.180597.180247-.180881.472769-.000634467.653366 .0868227.0869915.204729.135802.327635.135634h.734l-9.44062e-08-3.61799e-11c.490599.000188004.961056.195133 1.308.542l.766.766v1.309l1.963 1.962 1.01-.3 .952.951v1.308l.562.562 -4.79072e-09-4.78809e-09c.412347.412121 1.08065.412121 1.493 9.62497e-09l2.431-2.432 -1.20685e-08 1.20294e-08c.412281-.410944.413364-1.0783.0024209-1.49058 -.000805646-.000808267-.0016126-.00161523-.00242087-.00242087l-.561-.561h-1.309l-.951-.952Z"></path><path d="M3.192 20.305v0l7.81179e-08 7.80865e-08c.927291.926918 2.43042.926616 3.35734-.000675562 .0465484-.0465671.0911393-.0950505.133657-.145325l8.063-9.534 -1.963-1.962 -9.464 8.166 -4.63576e-08 4.00203e-08c-.992456.856783-1.10244 2.35589-.245657 3.34834 .0379765.0439902.0775555.086571.118657.127656Z"></path></g><rect width="24" height="24" fill="none"></rect></svg>
            <h4 class="text-2xl mt-4">Start building</h4>
            <p class="opacity-90">You're one step away from building your first widget</p>
            <router-link to="/build/create" class="p-3 mt-4 mb-64 bg-white text-black rounded">CREATE WIDGET</router-link>
          </div>
          <div v-else>
            {{widgets}}
          </div>
        </div>
        <!--FOOTER-->
        <Footer class="border-t mt-64 border-black"/>
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
      widgets: [],
    };
  },
  async mounted() {
    auth.me().catch(() => this.$router.push('/'));
    this.widgets = await api.get(`${env.apiURL}/widgets/byUser`);
  }
}
</script>

<style>
</style>