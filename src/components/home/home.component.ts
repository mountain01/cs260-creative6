import app from '../../app.config';

require('./home.component.css');

app.component('home', {
  template: require('./home.component.html'),
  bindings:{},
  controller: class HomeComponent{
    constructor(){}
    static get $inject() {
      return [];
    }
  }
});