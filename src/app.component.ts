import app from './app.config';

import './app.component.css';

app.component('app',{
  template: require('./app.component.html'),
  bindings:{},
  controller: class AppComponent {
    constructor(){
    }
    static get $inject() {
      return [];
    }
  }
});