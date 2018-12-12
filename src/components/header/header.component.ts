import app from '../../app.config';
require('./header.component.css');

app.component('appHeader',{
  template: require('./header.component.html'),
  bindings: {},
  controller: class HeaderComponent{
    constructor(){}
    static get $inject(){
      return [];
    }
  }
})