import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  {
    path: "users",
    canActivate: [AuthGuard],
    component: ListComponent
  },
  {
    path: "users/:id",
    canActivate: [AuthGuard],
    component: CrudComponent
  },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
