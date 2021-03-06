import angular from 'angular';
import ngRoute from 'angular-route';
import './style/app.scss'

import App from './components/app/app.js';

const root = angular  
  .module('App', [ 
    ngRoute,
    App
  ])
  .config(($routeProvider,$locationProvider) => {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/',{
          templateUrl: './views/home.html'
      })
      .otherwise('/');
  })
  .name;

export default root;  
