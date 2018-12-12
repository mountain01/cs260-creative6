import app from '../app.config';

app.service(
  'UserService',
  class UserService {
    user;
    constructor(private http) {}

    login(user) {
      return this.http.post('/api/login', user).then(res => {
        this.user = user;
        return res.data;
      });
    }
    register(user) {
      return this.http.post('/api/register', user).then(res => {
        this.user = user;
        return res.data;
      });
    }
    static get $inject() {
      return ['$http'];
    }
  }
);
