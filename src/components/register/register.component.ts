import app from '../../app.config';

require('./register.component.css');

app.component('register',{
  template: require('./register.component.html'),
  bindings:{},
  controller: class RegisterComponent{
    user = {}
    constructor(private userService, private state){}

    register(){
      this.userService.register(this.user).then((res)=>{
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