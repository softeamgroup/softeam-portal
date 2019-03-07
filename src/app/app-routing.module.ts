import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/user/login/login.component';
import { HomePageComponent } from './modules/home/home-page.component';
import { AuthGuard } from './modules/user/guards/auth.guard';
import { PageNotFoundComponent } from './shared/pageNotFound/page-not-found.component';

const routes: Routes = [
  {
    path : "accueil",
    component : HomePageComponent,
    canActivate : [AuthGuard],
    canLoad : [AuthGuard]
  },
  {path : "login", component : LoginComponent},
  {path : "", redirectTo : "login", pathMatch : "full"},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
