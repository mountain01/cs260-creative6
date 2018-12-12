import app from './app.config';

require('./app.component.css');

app.component('app',{
  template: require('./app.component.html'),
  bindings:{},
  controller: class AppComponent {
    contructor(){}
    static get $inject() {
      return [];
    }
  }
});