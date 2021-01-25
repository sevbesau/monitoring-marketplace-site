import Vue from 'vue';
import Vuex from 'vuex';

import Auth from '../helpers/auth';

Vue.use(Vuex);


// on what amount of seconds do we want to ping our API to "save the timing".
// Problem is scalabality
// const PINGINTERVALTIME = 5;

export default new Vuex.Store({
  state: {
    user: {},
  },
  methods: { },
  mutations: {
    /* Set entire user object */
    setUser(state, user) {
      state.user = user;
    },
    logout() {
      // Trigger to remove the session
      Auth.cookies.remove('session');
      document.location.reload();
    },
  },
});
