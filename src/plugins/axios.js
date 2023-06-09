// @ts-check
import axios from 'axios'
axios.interceptors.request.use(function(config) {
  console.log('request => config ====================================');
  console.log(config);
  console.log('request => config ====================================');

  // if u add new Chainable promise or other interceptor
  // You have to return `config` inside of a rquest
  // otherwise u will get a very confusing error
  // and spend sometime to debug it.
  return config;
}, function(error) {
  return Promise.reject(error);
});