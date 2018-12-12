import app from '../app.config';

app.service('UserService', class UserService{
  constructor(private http){}

  login(user){
    return this.http.post('/api/login', user).then(res=>res.data);
  }
  register(user){
    return this.http.post('/api/register', user).then(res=>res.data);
  }
  static get $inject() {
    return ['$http']
  }
})