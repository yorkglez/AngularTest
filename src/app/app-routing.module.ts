import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//*Import components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {component: LoginComponent, path: 'login'},
  {component: HomeComponent, path: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
