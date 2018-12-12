import * as angular from 'angular';
import app from './app.config';
import './components/home/home.component';
import './app.component';
import './components/login/login.component';
import './components/header/header.component';
import './components/register/register.component';

import './services/user.service';

angular.bootstrap(document,[app.name]);

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';