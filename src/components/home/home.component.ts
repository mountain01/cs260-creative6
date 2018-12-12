import app from '../../app.config';

require('./home.component.css');

app.component('home', {
  template: require('./home.component.html'),
  bindings:{},
  controller: class HomeComponent{
    user;
    constructor(private userService){
      this.user = this.userService.user;
    }
    static get $inject() {
      return ['UserService'];
    }
  }
});