import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component' ;
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [{ path : 'menu' , component :  MenuComponent } ,
              {path : '' ,component : HomeComponent} ,
              {path : 'details/:id' , component : DetailsComponent},
              {path : 'login' , component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
