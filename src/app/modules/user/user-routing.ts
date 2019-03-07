import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


export const userRoutes: Routes = [
    //FIXME change the component when we create the register component
    {path : "register", component : LoginComponent}
  ];