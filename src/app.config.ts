import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

const app = angular.module('app', [uiRouter])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state({
        name:'login',
        url:'/login',
        component: 'login'
      })
      .state({
        name: 'register',
        url:'/register',
        component:'register'
      })
      .state({
        name: 'home',
        url: '/',
        component: 'home'
      });
  });

export default app;
