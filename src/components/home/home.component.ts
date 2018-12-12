import app from '../../app.config';

require('./home.component.css');

app.component('home', {
  template: require('./home.component.html'),
  bindings:{},
  controller: class HomeComponent{
    constructor(private http){
      this.http.get('/api').then(res=>{
        console.log(res.data);
      })
    }
    static get $inject() {
      return ['$http'];
    }
  }
});