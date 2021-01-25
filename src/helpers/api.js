import axios from 'axios'

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
    // baseURL: `${APIURL}`, // contains the version
    json: true,
    headers: {
      'authorization': 'Bearer '+cookies.get('session')
    }
})

const execute = async (method, resource, data) => {
  return new Promise(function(resolve, reject){
    client.defaults.headers['authorization'] = 'Bearer ' + cookies.get('session');
    return client({ method, url: resource, data,}).then(req => {
      return resolve(req.data);
    }).catch(function(err){
      // console.log(err)
      return reject(err);
    })
  })
}


const get = async (endpoint) => {
  return new Promise((resolve, reject) => {
    execute('get', endpoint).then(function(data){
      return resolve(data);
    }).catch(function(e){
      return reject(e);
    });
  })
}


const post = async (endpoint, data) => {
  return new Promise((resolve, reject) => {
    execute('post', endpoint, data).then(function(user){
      return resolve(user);
    }).catch(function(e){
      return reject(e);
    });
  })
}

const put = async (endpoint, data) => {
  return new Promise((resolve, reject) => {
    execute('put', endpoint, data).then(function(user){
      return resolve(user);
    }).catch(function(e){
      return reject(e);
    });
  })
}


const remove = async (endpoint) => {
  return new Promise((resolve, reject) => {
    execute('delete', endpoint).then(function(user){
      return resolve(user);
    }).catch(function(e){
      return reject(e);
    });
  })
}


export default {
  post,
  get,
  delete: remove,
  put,
}

/*
import api from '@/helpers/api';

const API = await api.init({name: 'restaurants'});

API.findOne()

*/
