import app from '../../app.config';

require('./login.component.css');

app.component('login',{
  template: require('./login.component.html'),
  bindings:{},
  controller: class LoginComponent{
    constructor(){}
    static get $inject() {
      return [];
    }
  }
})