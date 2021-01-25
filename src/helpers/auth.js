/*

  This is a file created by AuthManager.be
  Copyright Timothy Verhaeghe <me@timothyverhaeghe.com>

  Version 1.0

*/

import axios from 'axios';
import env from '../../env.js';

const cookies = {};

// We do not use cookie but localstorage as we want to use electron to appify this app.

cookies.set = (name, value) => {
  window.localStorage.setItem(name, value);
};

cookies.get = (name) => {
  return window.localStorage.getItem(name);
};

cookies.remove = (name) => {
  window.localStorage.setItem(name, '');
};

const client = axios.create({
  baseURL: `${env.apiURL}`, // contains the version
  json: true,
  headers: {
    authorization: `Bearer ${cookies.get('session')}`,
  },
});

const execute = async (method, resource, data) => new Promise(((resolve, reject) => {
  client.defaults.headers.authorization = `Bearer ${cookies.get('session')}`;

  if (env.apiURL.indexOf('https') == -1 && env.apiURL.indexOf('localhost') == -1) {
    alert('YOU CANNOT MAKE A CONNECTION WITHOUT HTTP. THIS CALL IS NOT SECURE!');
    return reject('YOU CANNOT MAKE A CONNECTION WITHOUT SSL');
  }

  return client({ method, url: resource, data }).then((req) => resolve(req.data)).catch((err) =>
  // console.log(err)
    reject(err));
}));

const login = (email, password) => new Promise((resolve) => {
  if (!email || !password) {
    console.log('Login error: Not all fields are set')
    resolve({ error: 'Not all fields are set' });
  }
  axios.post(`${env.apiURL}/users/me`, {
    email,
    password,
  }).then((response) => {
    console.log('Login debug:', response.data)
    if(response.data.error){
      resolve({ error: response.data.error });
    } else if(response.data && response.data.token){
      cookies.set('session', response.data.token);
      resolve(response.data);
    } else {
      resolve({ error: 'Something unexpected happened. Please try again.' });
    }
  })
    .catch(() => {
      resolve({ error: 'The username and/or password is incorrect.' });
    });
});

/*
  Body contains the email & password & firstname & lastname
*/

const signup = (body) => new Promise((resolve) => {
  if (!body.email || !body.password) {
    console.log('Login error: Not all fields are set')
    resolve({ error: 'Not all fields are set' });
  }
  axios.post(`${env.apiURL}/users`, body).then((response) => {
    console.log('Login debug:', response.data)
    if(response.data.error){
      resolve({ error: response.data.error });
    } else if(response.data && response.data.token){
      cookies.set('session', response.data.token);
      resolve(response.data);
    } else {
      resolve({ error: 'Something unexpected happened. Please try again.' });
    }
  })
    .catch(() => {
      resolve({ error: 'Something unexpected happened. Please try again.' });
    });
});


const resetPassword = (email) => new Promise((resolve) => {
  if (!email) {
    resolve({ error: 'Not all fields are set' });
  }
  axios.post(`${env.apiURL}/users/reset-password`, {
    email,
  }).then((response) => {
    resolve(response.data);
  })
    .catch(() => {
      resolve({ error: 'Something unexpected happened. Please try again.' });
    });
});

/*
e.g.
  const auth = require('@helpers/auth');

  const account = await auth.login(email, password); // Login
  const account = await auth.me(); // Get your account
  await auth.logout(); // Logout

  const auth = require('@helpers/auth');
  const account = await auth.me().catch(function(e){}); // Get your account

*/
const me = async () => new Promise((resolve, reject) => {
  if (cookies.get('session')) {
    execute('get', '/users/me').then((user) => resolve(user)).catch((e) => reject(e));
  } else {
    return reject('Missing session cookie.');
  }
});

const updateProfile = async (data) => new Promise((resolve, reject) => {
  if (cookies.get('session')) {
    execute('put', '/users/me', data).then((user) => resolve(user)).catch((e) => reject(e));
  } else {
    return reject('Missing session cookie.');
  }
});

const logout = async () => {
  cookies.remove('session');
  document.location.href = '/';
};

// Return a Boolean (false) if you are not on a login page or password reset page.
const shouldRedirectToLogin = () => {
  if (
    document.location.href.indexOf('password') > -1
    || document.location.href.toLowerCase().indexOf('login') > -1
    || document.location.href.toLowerCase().indexOf('signup') > -1
  ) {
    return false;
  }
  return true;
};

const put = (url, body) => new Promise((resolve) => {
  if (cookies.get('session')) {
    execute('put', url, body).then((user) => {
      resolve(user);
    }).catch((e) => {
      resolve({ error: e });
    });
  } else {
    return resolve({ error: 'Missing session cookie.' });
  }
});

const post = (url, body) => new Promise((resolve) => {
  if (cookies.get('session')) {
    execute('post', url, body).then((res) => {
      resolve(res._id);
    }).catch((e) => {
      resolve(e);
    });
  } else {
    return resolve('Missing session cookie.');
  }
});

const get = (url) => new Promise((resolve) => {
  if (cookies.get('session')) {
    execute('get', url).then((user) => {
      resolve(user);
    }).catch((e) => {
      resolve({ error: e });
    });
  } else {
    return resolve({ error: 'Missing session cookie.' });
  }
});

export default {
  me,
  login,
  signup,
  resetPassword,

  cookies,

  shouldRedirectToLogin,
  logout,
  updateProfile,

  put,
  post,
  get,

};
