import app from '../../app.config';

require('./login.component.css');

app.component('login',{
  template: require('./login.component.html'),
  bindings:{},
  controller: class LoginComponent{
    user = {}
    constructor(private userService, private state){}

    login(){
      this.userService.login(this.user).then((res)=>{
        console.log(res);
        this.user = {};
        this.state.go('home');
      });
    }
    static get $inject() {
      return ['UserService', '$state'];
    }
  }
})